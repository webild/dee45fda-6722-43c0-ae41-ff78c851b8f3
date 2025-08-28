'use client';

import React, { memo } from 'react';
import AnimatedRetroText from '@/components/text/AnimatedRetroText';
import SlideText from '@/components/text/SlideText';
import RotateText from '@/components/text/RotateText';
import HighlightText from '@/components/text/HighlightText';
import BlurText from '@/components/text/BlurText';
import ScaleText from '@/components/text/ScaleText';
import ExpandText from '@/components/text/ExpandText';
import FlipText from '@/components/text/FlipText';
import { BaseTextConfig } from '@/components/sections/styles/shared/types';
import { useSiteTheme } from '@/components/sections/ThemeProvider';

/**
 * TextRenderer Component
 * 
 * The SlideText component can be replaced with any text component from @/components/text/
 * 
 * @example Replace with different text component:
 * Instead of SlideText, you can use:
 * - GradientText from '@/components/text/GradientText'
 * - HighlightText from '@/components/text/HighlightText'
 * - RotateText from '@/components/text/RotateText'
 * - BlurText from '@/components/text/BlurText'
 * - ScaleText from '@/components/text/ScaleText'
 * - ExpandText from '@/components/text/ExpandText'
 * - FlipText from '@/components/text/FlipText'
 * - MaskText from '@/components/text/MaskText'
 * - WaveText from '@/components/text/WaveText'
 * - ColorRevealText from '@/components/text/ColorRevealText'
 * - RetroText from '@/components/text/RetroText'
 */
interface TextRendererProps {
    config: BaseTextConfig;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const TextRenderer = ({ config, as = 'h2' }: TextRendererProps) => {
    const theme = useSiteTheme();
    
    if (!config || !config.text) return null;
    
    // futuristicAndOutOfBox style uses the text component directly based on textAnimation
    if (theme.styleVariant === 'futuristicAndOutOfBox') {
        const animationProps = {
            text: config.text,
            className: config.className,
            variant: config.animationProps?.variant,
            duration: config.animationProps?.duration,
            stagger: config.animationProps?.stagger,
            start: config.animationProps?.start,
            end: config.animationProps?.end,
            gradientColors: config.gradientColors,
        };
        
        switch (theme.textAnimation) {
            case 'rotate':
                return <RotateText {...animationProps} />;
            case 'highlight':
                return <HighlightText {...animationProps} />;
            case 'blur':
                return <BlurText {...animationProps} />;
            case 'scale':
                return <ScaleText {...animationProps} />;
            case 'expand':
                return <ExpandText {...animationProps} />;
            case 'flip':
                return <FlipText {...animationProps} />;
            case 'slide':
            case 'none':
            default:
                return <SlideText {...animationProps} />;
        }
    }
    
    // funAndTrendy style always uses AnimatedRetroText with the theme's animation
    return (
        <AnimatedRetroText
            text={config.text}
            className={config.className}
            animation={theme.textAnimation}
            shadowColor={config.shadowColor}
            shadowOffset={config.shadowOffset}
            animationProps={config.animationProps}
            as={as}
        />
    );
};

TextRenderer.displayName = 'TextRenderer';

export default memo(TextRenderer);