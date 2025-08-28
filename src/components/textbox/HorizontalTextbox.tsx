import React, { ReactNode, memo } from 'react';
import { DEFAULT_TITLE_CLASSES, DEFAULT_DESCRIPTION_CLASSES } from './constants';

/**
 * HorizontalTextbox Component
 * 
 * @example Basic usage with strings:
 * <HorizontalTextbox 
 *   title="Welcome"
 *   description="This is a description"
 * />
 * 
 * @example With text components (recommended patterns):
 * <HorizontalTextbox 
 *   title={<SlideText text="Animated Title" variant="scrub" />}
 *   description={<BlurText text="Blurred Description" variant="words-scrub" />}
 * />
 * 
 * @example With multiple text components in description:
 * <HorizontalTextbox 
 *   title={<SlideText text="Title" variant="scrub" />}
 *   description={
 *     <div className="flex flex-col gap-2">
 *       <HighlightText text="First paragraph" variant="words-trigger" />
 *       <HighlightText text="Second paragraph" variant="words-trigger" />
 *     </div>
 *   }
 * />
 * 
 * @example Layout variations:
 * <HorizontalTextbox 
 *   title="Title"
 *   description="Description"
 *   reverseLayout={true}  // Swaps title and description positions
 * />
 * 
 * <HorizontalTextbox 
 *   title="Title"
 *   description="Description"
 *   alignStart={true}  // Aligns both title and description to start
 * />
 * 
 * Animation Variant Guidelines (for performance):
 * - TITLE: Use 'scrub' or 'trigger'
 * - DESCRIPTION: Use 'words-scrub' or 'words-trigger'
 * 
 * Compatible text components from @/components/text/:
 * - GradientText from '@/components/text/GradientText'
 * - HighlightText from '@/components/text/HighlightText'
 * - RotateText from '@/components/text/RotateText'
 * - SlideText from '@/components/text/SlideText'
 * - BlurText from '@/components/text/BlurText'
 * - ScaleText from '@/components/text/ScaleText'
 * - ExpandText from '@/components/text/ExpandText'
 * - FlipText from '@/components/text/FlipText'
 * - MaskText from '@/components/text/MaskText'
 * - WaveText from '@/components/text/WaveText'
 * - ColorRevealText from '@/components/text/ColorRevealText'
 * - RetroText from '@/components/text/RetroText'
 * - AnimatedRetroText from '@/components/text/AnimatedRetroText'
 */
export interface HorizontalTextboxProps {
  /**
   * Title content
   * Recommended: Use text components with variant="scrub" or variant="trigger"
   * @example "Welcome" | <SlideText text="Welcome" variant="scrub" /> | <GradientText text="Welcome" />
   */
  title: ReactNode;
  /**
   * Description content
   * Recommended: Use text components with variant="words-scrub" or variant="words-trigger"
   * @example "Description" | <BlurText text="Description" variant="words-scrub" /> | <HighlightText text="Description" variant="words-trigger" />
   */
  description: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  reverseLayout?: boolean;
  alignStart?: boolean;
}

const HorizontalTextbox = memo(function HorizontalTextbox({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  reverseLayout = false,
  alignStart = false
}: HorizontalTextboxProps) {
  const layoutClass = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row';
  const alignClass = reverseLayout ? 'items-start' : (alignStart ? 'items-start' : 'items-end');
  
  return (
    <div className={`w-full flex flex-col gap-2 md:gap-6 justify-between ${layoutClass} ${alignClass} ${className}`}>
      <div className={`w-full md:w-1/2 ${DEFAULT_TITLE_CLASSES} ${titleClassName}`}>
        {title}
      </div>
      <div className={`w-full md:w-[31%] ${DEFAULT_DESCRIPTION_CLASSES} ${descriptionClassName}`}>
        {description}
      </div>
    </div>
  );
});

export default HorizontalTextbox;