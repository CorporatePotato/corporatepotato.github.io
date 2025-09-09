'use client'

import { useDictionary } from '@/context/dictionary-context'

const MediaKit = () => {
  const dict = useDictionary()

  return (
    <section data-section="media-kit">
      <div className="sectionSpacing halfContentWidth">
        <h1 id="media-kit" className="text-center">
          {dict.media_kit_title}
        </h1>
        <p className="p2 mb-11 text-left">{dict.mediaKit_intro}</p>
        <div className="flex flex-col items-center">
          <a
            className="button"
            href="https://drive.google.com/drive/folders/1jmv_Kc3nDDQZbIlxjegfLcT5IYYaT-1S"
            target="_blank"
          >
            {dict.mediaKit_button}
          </a>
        </div>
      </div>
    </section>
  )
}

export default MediaKit
