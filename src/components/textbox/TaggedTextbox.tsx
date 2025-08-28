import React, { ReactNode, memo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DEFAULT_TITLE_CLASSES,
  DEFAULT_DESCRIPTION_CLASSES,
  GSAP_FADE_CONFIG,
  GSAP_SCROLL_TRIGGER_CONFIG,
} from "./constants";

gsap.registerPlugin(ScrollTrigger);

/**
 * TaggedTextbox Component
 * 
 * @example Basic usage with strings:
 * <TaggedTextbox 
 *   label="New"
 *   title="Welcome"
 *   description="This is a description"
 * />
 * 
 * @example With text components (recommended patterns):
 * <TaggedTextbox 
 *   label="New"
 *   title={<SlideText text="Animated Title" variant="scrub" />}
 *   description={<BlurText text="Blurred Description" variant="words-scrub" />}
 * />
 * 
 * @example With multiple text components in description:
 * <TaggedTextbox 
 *   label="New"
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
export interface TaggedTextboxProps {
  icon?: ReactNode;
  /**
   * Label content (usually short text for the tag)
   */
  label: ReactNode;
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
  /**
   * Content to display below title and description (usually buttons)
   */
  children?: ReactNode;
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  disableAnimation?: boolean;
  tagLabelClassName?: string;
}

const TaggedTextbox = memo(function TaggedTextbox({
  icon,
  label,
  title,
  description,
  children,
  className = "",
  tagClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = "",
  disableAnimation = false,
  tagLabelClassName
}: TaggedTextboxProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tagRef.current || disableAnimation) return;

    const animations: gsap.core.Tween[] = [];

    const tagAnimation = gsap.fromTo(tagRef.current, GSAP_FADE_CONFIG.from, {
      ...GSAP_FADE_CONFIG.to,
      scrollTrigger: {
        trigger: tagRef.current,
        ...GSAP_SCROLL_TRIGGER_CONFIG,
      },
    });
    animations.push(tagAnimation);

    if (contentRef.current && children) {
      const contentAnimation = gsap.fromTo(
        contentRef.current,
        GSAP_FADE_CONFIG.from,
        {
          ...GSAP_FADE_CONFIG.to,
          scrollTrigger: {
            trigger: contentRef.current,
            ...GSAP_SCROLL_TRIGGER_CONFIG,
          },
        }
      );
      animations.push(contentAnimation);
    }

    return () => {
      animations.forEach((animation) => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      });
    };
  }, [children, disableAnimation]);

  return (
    <div
      className={`w-full flex flex-col gap-2 md:gap-3 text-center items-center ${className}`}
    >
      <div
        ref={tagRef}
        className={`flex items-center gap-2 bg-white shadow p-1 px-3 rounded-full ${tagClassName}`}
      >
        {icon}
        <span className={`text-sm font-medium ${tagLabelClassName}`}>{label}</span>
      </div>
      <div
        className={`w-full md:w-1/2 ${DEFAULT_TITLE_CLASSES} ${titleClassName}`}
      >
        {title}
      </div>
      <div
        className={`w-full md:w-1/2 ${DEFAULT_DESCRIPTION_CLASSES} ${descriptionClassName}`}
      >
        {description}
      </div>
      {children && (
        <div ref={contentRef} className={`w-fit mt-2 ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
});

export default TaggedTextbox;
