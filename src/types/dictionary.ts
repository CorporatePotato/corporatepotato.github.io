import { getDictionary } from '@/lib/dictionaries'

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
