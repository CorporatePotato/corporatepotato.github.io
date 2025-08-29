'use client'

import { createContext, useContext } from 'react'

import { Dictionary } from '@/types/dictionary'

const DictionaryContext = createContext<Dictionary | null>(null)

export function DictionaryProvider({
  dict,
  children
}: {
  dict: Dictionary
  children: React.ReactNode
}) {
  return <DictionaryContext.Provider value={dict}>{children}</DictionaryContext.Provider>
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext)
  if (!ctx) {
    throw new Error('useDictionary must be used inside DictionaryProvider')
  }
  return ctx
}
