'use client'

import React, { useState, useRef, useEffect } from 'react'

import { useDictionary } from '@/context/dictionary-context'
import { usePageContext } from '@/context/page-context'

const localeToLanguageName: Record<string, string> = {
  'zh-hans': 'ChineseSimplified'
}

interface FeatureVideoProps {
  index: number
  languageName: string
}

const FeatureVideo = ({ index, languageName }: FeatureVideoProps) => {
  const [src, setSrc] = useState(`/assets/WellKeeper_ShortClip_${index + 1}_${languageName}.webm`)
  const videoRef = useRef<HTMLVideoElement>(null)

  const fallbackSrc = `/assets/WellKeeper_ShortClip_${index + 1}_English.webm`

  const handleError = () => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view - play it
            video.play().catch((error) => {
              console.log('Video play failed:', error)
            })
          } else {
            // Video is out of view - pause it
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px 0px -10% 0px' // Start playing slightly before fully in view
      }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata" // Only load metadata initially, not the full video
      className="h-auto w-full object-cover"
      onError={handleError}
    />
  )
}

const Features = () => {
  const { locale } = usePageContext()
  const dict = useDictionary()

  const heading = dict.features_title || 'Features'
  const items = dict.features_body || []
  const languageName = localeToLanguageName[locale] || 'English'

  return (
    <section data-section="features" className="sectionSpacing">
      <h1 id="features" className="text-center">
        {heading}
      </h1>
      <div className="flex flex-col gap-0">
        {items.map((item, index: number) => (
          <div key={item.title} className={`${index % 2 === 0 ? 'bg-darkGrey' : ''} w-full`}>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } contentWidth mx-auto items-center gap-6 pt-4 pb-22 sm:gap-8 sm:py-22`}
            >
              {/* Video Column */}
              <div className="md:w-63/100">
                <FeatureVideo index={index} languageName={languageName} />
              </div>

              {/* Text Column */}
              <div className="md:w-37/100">
                <h2 className="mb-2 sm:mb-3">{item.title}</h2>
                <p className="p2">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features