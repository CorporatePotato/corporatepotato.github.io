'use client'

import { useDictionary } from '@/context/dictionary-context'
import { handlePrefillClick } from '@/utils/navigation'

const FactSheet = () => {
  const dict = useDictionary()

  const items = dict.fact_sheet_items || []

  if (!Array.isArray(items) || items.length === 0) {
    return <div>Error: fact_sheet_items not loaded or wrong format.</div>
  }

  return (
    <section data-section="fact-sheet" className="sectionSpacing">
      <h1 id="fact-sheet" className="text-center">
        {dict.fact_sheet_title || 'Fact sheet'}
      </h1>
      <div className="sectionBg mb-6">
        <div className="factSheet contentWidth">
          {items.map((item) => (
            <div key={item.title} className="flex w-full flex-1">
              <h3 className="h3 w-38">{item.title}</h3>
              <div className="p2">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => handlePrefillClick('request-key')} className="button mt-2">
          {dict.fact_sheet_request_key}
        </button>
      </div>
    </section>
  )
}

export default FactSheet
