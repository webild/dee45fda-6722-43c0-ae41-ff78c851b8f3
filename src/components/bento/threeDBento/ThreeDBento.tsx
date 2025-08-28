'use client'

import React from 'react'
import { ThreeDBentoProps, CONTAINER_STYLES } from './constants'
import { useThreeDAnimation } from './useThreeDAnimation'
import ThreeDBentoItem from './ThreeDBentoItem'

const ThreeDBento: React.FC<ThreeDBentoProps> = ({ 
    items, 
    enableAnimation = true, 
    className = '', 
    gridClassName = '', 
    itemClassName = '',
    imageContainerClassName = '',
    imageClassName = '',
    textContainerClassName = '',
    titleClassName = '',
    descriptionClassName = ''
}) => {
    const { sectionRef, setItemRef } = useThreeDAnimation(items, enableAnimation)

    return (
        <div className={`w-full ${className}`} ref={sectionRef}>
            <div
                className={`w-full grid grid-cols-1 md:grid-cols-3 gap-6 ${gridClassName}`}
                style={CONTAINER_STYLES}
            >
                {items.map((item, index) => (
                    <ThreeDBentoItem
                        key={index}
                        ref={(el) => setItemRef(el, index)}
                        item={item}
                        index={index}
                        className={itemClassName}
                        imageContainerClassName={imageContainerClassName}
                        imageClassName={imageClassName}
                        textContainerClassName={textContainerClassName}
                        titleClassName={titleClassName}
                        descriptionClassName={descriptionClassName}
                    />
                ))}
            </div>
        </div>
    )
}

ThreeDBento.displayName = 'ThreeDBento'

export default React.memo(ThreeDBento)