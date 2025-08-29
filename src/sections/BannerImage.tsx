'use client'

import Image from 'next/image'

import { SupportedLocale } from '@/types/language'

const BannerImage = ({ locale }: { locale: SupportedLocale }) => {
  // Assign localized versions of logo
  const logoSrcMap: Record<string, string> = {
    'zh-Hans': '/assets/GameName_Logo_Horizontal_Color_ChineseSimplified.png',
    'zh-Hant': '/assets/GameName_Logo_Horizontal_Color_ChineseTraditional.png',
    ja: '/assets/GameName_Logo_Horizontal_Color_Japanese.png'
    // add more locales and logos here
  }

  // English logo by default
  const logoSrc = logoSrcMap[locale] || '/assets/GameName_Logo_Horizontal_Color_English.png'

  return (
    <section className="contentWidth bannerBg" data-section="banner-image">
      {/* Background image */}
      <Image
        src="/assets/GameName_Header_Website.jpg"
        alt="Banner background image"
        width={1920}
        height={500}
        className="bannerBgImage h-auto w-full"
        priority
      />

      {/* Logo wrapper */}
      <div className="bannerLogo">
        <Image src={logoSrc} alt="GameName logo" fill className="object-contain" />
      </div>
    </section>
  )
}

export default BannerImage
