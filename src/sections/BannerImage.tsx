'use client'

import Image from 'next/image'

import { usePageContext } from '@/context/page-context'
import { SupportedLocale } from '@/types/language'

const BannerImage = () => {
  const { locale } = usePageContext()
  // Assign localized versions of logo
  const logoSrcMap: Record<SupportedLocale, string> = {
    'en-us': '/assets/WellKeeper_Logo_Color_Horizontal_English.png',
    'zh-hans': '/assets/WellKeeper_Logo_Color_Horizontal_SChinese.png',
    'zh-hant': '/assets/WellKeeper_Logo_Color_Horizontal_TChinese.png',
    'ja-jp': '/assets/WellKeeper_Logo_Color_Horizontal_Japanese.png',
    'ko-kr': '/assets/WellKeeper_Logo_Color_Horizontal_Korean.png'
  }

  const logoSrc = logoSrcMap[locale]

  return (
    <section className="contentWidth bannerBg" data-section="banner-image">
      {/* Background image */}
      {/*       <Image
        src="/assets/WellKeeper_Header_Website.jpg"
        alt="Banner background image"
        width={1920}
        height={500}
        className="bannerBgImage h-auto w-full"
        priority
      /> */}

      {/* Background video */}
      <video
        src="/assets/WellKeeper_Header_Website.webm"
        autoPlay
        loop
        muted
        playsInline
        className="bannerBgImage h-auto w-full"
        style={{ objectFit: 'cover' }}
      >
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Logo wrapper */}
      <div className="bannerLogo">
        <Image src={logoSrc} alt="Well Keeper logo" fill className="object-contain" priority />
      </div>
    </section>
  )
}

export default BannerImage
