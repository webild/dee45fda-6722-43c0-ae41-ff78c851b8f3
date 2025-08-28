import React, { ReactNode, memo } from 'react';
import { INLINE_TITLE_CLASSES, INLINE_DESCRIPTION_CLASSES } from './constants';

/**
 * InlineTextbox Component
 * 
 * @example Basic usage with strings:
 * <InlineTextbox 
 *   title="Welcome"
 *   description="This is a description"
 * />
 * 
 * @example With text components (recommended patterns):
 * <InlineTextbox 
 *   title={<SlideText text="Animated Title" variant="scrub" />}
 *   description={<BlurText text="Blurred Description" variant="words-scrub" />}
 * />
 * 
 * @example With multiple text components in description:
 * <InlineTextbox 
 *   title={<SlideText text="Title" variant="scrub" />}
 *   description={
 *     <div className="flex flex-col gap-2">
 *       <HighlightText text="First paragraph" variant="words-trigger" />
 *       <HighlightText text="Second paragraph" variant="words-trigger" />
 *     </div>
 *   }
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
export interface InlineTextboxProps {
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
}

const InlineTextbox = memo(function InlineTextbox({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: InlineTextboxProps) {
  return (
    <div className={`block relative ${className}`}>
      <span className={`inline-block mr-[var(--width-15)] md:mr-[var(--width-10)] ${INLINE_TITLE_CLASSES} ${titleClassName} [&>*]:!inline`}>
        {title}
      </span>
      <span className={`inline font-light ${INLINE_DESCRIPTION_CLASSES} ${descriptionClassName} [&>*]:!inline`}>
        {description}
      </span>
    </div>
  );
});

export default InlineTextbox;