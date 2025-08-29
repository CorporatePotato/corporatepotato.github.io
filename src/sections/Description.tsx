'use client'

import { useDictionary } from '@/context/dictionary-context'

const Description = () => {
  const dict = useDictionary()

  return (
    <section data-section="description">
      <div className="sectionSpacing halfContentWidth sm:text-center">
        <p className="p1">{dict.description}</p>
      </div>
    </section>
  )
}

export default Description
