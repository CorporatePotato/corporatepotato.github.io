import { DictionaryProvider } from '@/context/dictionary-context'
import { PageContextProvider } from '@/context/page-context'
import { getDictionary } from '@/lib/dictionaries'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import { SupportedLocale } from '@/types/language'

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: SupportedLocale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <PageContextProvider locale={locale}>
      <DictionaryProvider dict={dict}>
        <Header />
        {children}
        <Footer />
      </DictionaryProvider>
    </PageContextProvider>
  )
}
