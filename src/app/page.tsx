import StartPageClient from '@/components/StartPageClient'
import { generateProjectMetadata } from '@/lib/metadata'
import { detectBrowserLanguage } from '@/utils/language'

export async function generateMetadata() {
  const preferredLocale = detectBrowserLanguage()

  return await generateProjectMetadata(preferredLocale)
}

export default function StartPage() {
  return <StartPageClient />
}
