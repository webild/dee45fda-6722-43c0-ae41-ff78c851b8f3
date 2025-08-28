import React, { ReactNode, memo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DEFAULT_TITLE_CLASSES,
  DEFAULT_DESCRIPTION_CLASSES,
  GSAP_FADE_CONFIG,
  GSAP_SCROLL_TRIGGER_CONFIG,
} from "./constants";
import { cls } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * ContentTextbox Component
 * 
 * @example Basic usage with strings:
 * <ContentTextbox 
 *   title="Welcome"
 *   description="This is a description"
 * />
 * 
 * @example With text components (recommended patterns):
 * <ContentTextbox 
 *   title={<SlideText text="Animated Title" variant="scrub" />}
 *   description={<BlurText text="Blurred Description" variant="words-scrub" />}
 * />
 * 
 * @example With multiple text components in description:
 * <ContentTextbox 
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
export interface ContentTextboxProps {
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
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  disableAnimation?: boolean;
}

const ContentTextbox = memo(function ContentTextbox({
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = "",
  disableAnimation = false,
}: ContentTextboxProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || disableAnimation) return;

    const animation = gsap.fromTo(contentRef.current, GSAP_FADE_CONFIG.from, {
      ...GSAP_FADE_CONFIG.to,
      scrollTrigger: {
        trigger: contentRef.current,
        ...GSAP_SCROLL_TRIGGER_CONFIG,
      },
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [disableAnimation]);

  return (
    <div
      className={`w-full flex flex-col gap-2 md:gap-3 text-center items-center ${className}`}
    >
      <div
        className={cls(
          "w-full md:w-1/2",
          DEFAULT_TITLE_CLASSES,
          titleClassName
        )}
      >
        {title}
      </div>
      <div
        className={cls(
          "w-full md:w-1/2",
          DEFAULT_DESCRIPTION_CLASSES,
          descriptionClassName
        )}
      >
        {description}
      </div>
      <div ref={contentRef} className={cls("w-fit mt-2", contentClassName)}>
        {children}
      </div>
    </div>
  );
});

export default ContentTextbox;
