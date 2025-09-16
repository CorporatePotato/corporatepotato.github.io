'use client'

import { useDictionary } from '@/context/dictionary-context'
import Link from 'next/link'

const Description = () => {
  const dict = useDictionary()

  return (
    <section data-section="description">
      <div className="sectionSpacing halfContentWidth sm:text-center">
        <p className="p1">{dict.description}</p>
       <Link href="https://store.steampowered.com/app/3365940/Well_Keeper/" target="_blank">
          <img
            alt="Steam Logo"
            src="/assets/Steam_Logo_OffWhite.png"
            className="mx-auto mt-10 h-auto w-42 sm:w-36"
          />
        </Link>
      </div>
    </section>
  )
}

export default Description
