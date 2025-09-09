'use client'

import { createContext, ReactNode, useContext } from 'react'

import { SupportedLocale } from '@/types/language'

type PageContext = {
  locale: SupportedLocale
}

const PageContext = createContext<PageContext | undefined>(undefined)

type PageContextProviderProps = {
  children: ReactNode
} & PageContext

export function PageContextProvider({ locale, children }: PageContextProviderProps) {
  return <PageContext.Provider value={{ locale }}>{children}</PageContext.Provider>
}

export function usePageContext() {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePageContext must be used inside PageContextProvider')
  }
  return context
}
