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
       <Link href="https://store.steampowered.com/app/3365940/Well_Keeper/" target="_blank">
          <Image
            alt="Steam Logo"
            src="/assets/Steam_Logo_OffWhite.png"
            width={168}
            height={0}
            className="mx-auto mt-10 h-auto w-42 sm:w-36"
          />
        </Link>
      </div>
    </section>
  )
}

export default Description
