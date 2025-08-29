'use client'

import React, { useState } from 'react'

import { useDictionary } from '@/context/dictionary-context'
import { SupportedLocale } from '@/types/language'

const localeToLanguageName: Record<string, string> = {
  'zh-hans': 'ChineseSimplified'
}

interface FeatureVideoProps {
  index: number
  languageName: string
}

const FeatureVideo = ({ index, languageName }: FeatureVideoProps) => {
  const [src, setSrc] = useState(`/assets/GameName_ShortClip_${index + 1}_${languageName}.mp4`)

  const fallbackSrc = `/assets/GameName_ShortClip_${index + 1}_English.mp4`

  const handleError = () => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc)
    }
  }

  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="h-auto w-full object-cover"
      onError={handleError}
    />
  )
}

const Features = ({ locale }: { locale: SupportedLocale }) => {
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
        {items.map((item: any, index: number) => (
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
