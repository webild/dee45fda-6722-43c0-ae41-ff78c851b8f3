'use client'

import { memo, useMemo } from 'react'
import { LucideIcon } from 'lucide-react'
import PatternItem from './PatternItem'

export interface PatternItem {
  icon?: LucideIcon
  value: string
  description?: string
}

interface PatternBentoProps {
  items: PatternItem[]
  className?: string
  rowClassName?: string
  itemClassName?: string
  valueClassName?: string
  descriptionClassName?: string
  gradientClassName?: string
  button?: {
    variant?: "none" | "side" | "bottom"
    className?: string
    childClassName?: string
    iconClassName?: string
  }
}

function PatternBento({ items, className = '', rowClassName = '', itemClassName = '', valueClassName, descriptionClassName, gradientClassName, button }: PatternBentoProps) {
  const itemsPerRow = 3

  const rows = useMemo(() => {
    const rowCount = Math.ceil(items.length / itemsPerRow)
    return Array.from({ length: rowCount }, (_, rowIndex) => {
      const startIdx = rowIndex * itemsPerRow
      return items.slice(startIdx, startIdx + itemsPerRow)
    })
  }, [items])

  return (
    <section className={`w-full px-[var(--width-10)] space-y-6 ${className}`}>
      {rows.map((rowItems, rowIndex) => (
        <div key={rowIndex} className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${rowClassName}`}>
          {rowItems.map((item, itemIndex) => (
            <PatternItem
              key={`${rowIndex}-${itemIndex}`}
              item={item}
              button={button}
              rowIndex={rowIndex}
              itemIndex={itemIndex}
              className={itemClassName}
              valueClassName={valueClassName}
              descriptionClassName={descriptionClassName}
              gradientClassName={gradientClassName}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

PatternBento.displayName = 'PatternBento'

export default memo(PatternBento)