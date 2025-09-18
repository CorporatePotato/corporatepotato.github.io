'use client'

import { useDictionary } from '@/context/dictionary-context'
import { usePageContext } from '@/context/page-context'

const TRAILER_VIDEO_IDS: Record<string, string> = {
  'en-us': '7XMdPQ5aW0s',
  'zh-hans': 'xyOzTgE4g0o',
  'zh-hant': 'dAMy1PvzrRc',
  'ja-jp': 'oWPZJlE1uuA',
  'ko-kr': '1NPZQ9KCGkY',
  default: '7XMdPQ5aW0s'
}

function getTrailerId(locale: string): string {
  return TRAILER_VIDEO_IDS[locale] || TRAILER_VIDEO_IDS.default
}

const Trailer = () => {
  const { locale } = usePageContext()

  const dict = useDictionary()

  const trailerId = getTrailerId(locale)
  const embedUrl = `https://www.youtube.com/embed/${trailerId}?controls=1`

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
    </section>
  )
}

export default Trailer
