'use client'

import { useEffect, useState } from 'react'

import Button from '@/components/Button'
import { useDictionary } from '@/context/dictionary-context'
import { SupportedLocale } from '@/types/language'

const TRAILER_VIDEO_IDS: Record<string, string> = {
  en: 'ABC123',
  'zh-Hans': 'ABC123',
  'zh-Hant': 'ABC123',
  ja: 'ABC123',
  default: 'ABC123'
}

function getTrailerId(locale: string): string {
  return TRAILER_VIDEO_IDS[locale] || TRAILER_VIDEO_IDS.default
}

const Trailer = ({ locale }: { locale: SupportedLocale }) => {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const dict = useDictionary()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const trailerId = getTrailerId(locale)
  const embedUrl = `https://www.youtube.com/embed/${trailerId}?controls=1`
  const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerId}?si=EQdqUiiC4tp_T-tK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    Object.assign(textArea.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '2em',
      height: '2em',
      padding: '0',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      background: 'transparent'
    })
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Fallback: Unable to copy', err)
    }
    document.body.removeChild(textArea)
  }

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      } catch (err) {
        console.error('Clipboard API failed, falling back', err)
      }
    }
    fallbackCopyTextToClipboard(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      data-section="trailer"
      className="sectionSpacing contentWidth flex w-full flex-col items-center"
    >
      <h1 id="trailer" className="text-center">
        {dict.trailer_title || 'Trailer'}
      </h1>

      <div className="relative mb-8 aspect-video w-full">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Button onClick={handleCopy}>
        {copied
          ? dict.trailer_copied_button || 'Copied!'
          : dict.trailer_copy_button || 'Copy Embed Code'}
      </Button>
    </section>
  )
}

export default Trailer
