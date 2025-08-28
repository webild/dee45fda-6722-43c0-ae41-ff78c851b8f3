'use client'

import { memo, useCallback, useMemo } from 'react'
import GalleryItem, { type GalleryItemData } from './GalleryItem'
import { useGalleryLayout } from './useGalleryLayout'

export type { GalleryItemData as GalleryItem } from './GalleryItem'

interface GalleryBentoProps {
  items: GalleryItemData[]
  className?: string
  gridClassName?: string
}

function GalleryBento({ items, className = '', gridClassName = '' }: GalleryBentoProps) {
  const { 
    getLayoutClasses, 
    getGridContainerClasses, 
    getImageDimensions, 
    getGridStyles 
  } = useGalleryLayout()

  const renderGalleryGrid = useCallback((items: GalleryItemData[], startIndex: number = 0) => {
    const itemCount = items.length
    const dynamicStyles = getGridStyles(itemCount)
    
    return (
      <div className={`${getGridContainerClasses(itemCount)} ${gridClassName}`} style={dynamicStyles}>
        {items.map((item, index) => {
          const actualIndex = startIndex + index
          const layoutClass = getLayoutClasses(itemCount, index)
          const dimensions = getImageDimensions(itemCount, index)
          
          return (
            <GalleryItem
              key={`${actualIndex}-${item.image}`}
              item={item}
              layoutClass={layoutClass}
              dimensions={dimensions}
              priority={actualIndex < 4}
            />
          )
        })}
      </div>
    )
  }, [getLayoutClasses, getGridContainerClasses, getImageDimensions, getGridStyles, gridClassName])

  const galleryContent = useMemo(() => {
    const totalItems = items.length
    
    if (totalItems <= 7) {
      return renderGalleryGrid(items)
    }
    
    const result = []
    let currentIndex = 0
    
    result.push(renderGalleryGrid(items.slice(0, 4), 0))
    currentIndex = 4
    
    while (currentIndex < totalItems) {
      const remainingItems = totalItems - currentIndex
      let batchSize
      
      if (remainingItems >= 7) {
        batchSize = 4
      } else if (remainingItems >= 5) {
        batchSize = remainingItems === 6 ? 6 : remainingItems
      } else {
        batchSize = remainingItems
      }
      
      const batch = items.slice(currentIndex, currentIndex + batchSize)
      result.push(renderGalleryGrid(batch, currentIndex))
      currentIndex += batchSize
    }
    
    return (
      <div className="flex flex-col gap-6">
        {result}
      </div>
    )
  }, [items, renderGalleryGrid])

  return (
    <section className={`w-full px-[var(--width-10)] ${className || ''}`}>
      {galleryContent}
    </section>
  )
}

export default memo(GalleryBento)