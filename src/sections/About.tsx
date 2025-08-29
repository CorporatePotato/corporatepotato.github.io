'use client'

import { useDictionary } from '@/context/dictionary-context'

const About = () => {
  const dict = useDictionary()

  // Get the about paragraphs array or default to empty array
  const heading = dict.about_title || 'About'
  const paragraphs = dict.about_paragraphs || []

  return (
    <section data-section="about">
      <div className="sectionSpacing halfContentWidth">
        <h1 id="about" className="text-center">
          {heading}
        </h1>
        {paragraphs.map((para: string, index: number) => (
          <p key={index} className="p2 p2Spacing">
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About
