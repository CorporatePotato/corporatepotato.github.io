'use client'

import React, { useState } from 'react'

import { useDictionary } from '@/context/dictionary-context'
import { usePageContext } from '@/context/page-context'

const localeToLanguageName: Record<string, string> = {
  'zh-hans': 'ChineseSimplified'
}

interface FeatureVideoProps {
  index: number
  languageName: string
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
