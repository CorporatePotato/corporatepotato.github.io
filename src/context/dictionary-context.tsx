'use client'

import { createContext, useContext } from 'react'

import { Dictionary } from '@/types/dictionary'

const DictionaryContext = createContext<Dictionary | undefined>(undefined)

type DictionaryProviderProps = {
  dict: Dictionary
  children: React.ReactNode
}

export function DictionaryProvider({ dict, children }: DictionaryProviderProps) {
  return <DictionaryContext.Provider value={dict}>{children}</DictionaryContext.Provider>
}

export function useDictionary() {
  const context = useContext(DictionaryContext)
  if (!context) {
    throw new Error('useDictionary must be used inside DictionaryProvider')
  }
  return context
}
