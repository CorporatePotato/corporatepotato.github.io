'use client'

import { useDictionary } from '@/context/dictionary-context'
import Link from 'next/link'
import Image from 'next/image'

const Description = () => {
  const dict = useDictionary()

  return (
    <section data-section="description">
      <div className="sectionSpacing halfContentWidth sm:text-center">
        <p className="p1">{dict.description}</p>

        <div className="flex flex-col items-center">
          <a
            className="button mx-auto mt-10"
            href="https://store.steampowered.com/app/3365940/Well_Keeper/"
            target="_blank"
          >
            {dict.wishlist}
          </a>
        </div>

      </div>
    </section>
  )
}

export default Description
