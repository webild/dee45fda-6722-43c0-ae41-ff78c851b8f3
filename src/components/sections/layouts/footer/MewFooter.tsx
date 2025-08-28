"use client";

import { memo } from "react";
import { FooterStyle } from "../../styles/footer/types";
import { getFunAndTrendyFooterStyle } from "../../styles/footer/mew/funAndTrendy";
import { getFuturisticFooterStyle } from "../../styles/footer/mew/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import Image from "next/image";
import PushableButton from "@/components/buttons/PushableButton";
import {
  Framer,
  Github,
  Instagram,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import SideGlowGradientBackground from "@/components/background/SideGlowGradientBackground";

interface MewFooterProps {
  title?: string;
}

const MewFooter = memo<MewFooterProps>(function MewFooter({ 
  title = "Let's come together and put an end to their tyranny… The dog days are done."
}) {
  const theme = useSiteTheme();
  const style: FooterStyle = getThemeStyle(
    theme,
    {
      funAndTrendy: getFunAndTrendyFooterStyle,
      futuristicAndOutOfBox: getFuturisticFooterStyle
    }
  );
  const socialIcons: Array<LucideIcon> = [Github, Instagram, Framer, Twitter];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className={`relative overflow-hidden w-full pt-10 sm:py-10 px-[var(--width-5)] ${style.className}`}
    >
      {style?.gradient?.show && (
        <SideGlowGradientBackground
          inset={style.gradient.inset}
          rounded={style.gradient.rounded}
          radialColor={style.gradient.radialColor}
          linearColor={style.gradient.linearColor}
          radialOpacity={style.gradient.radialOpacity}
          linearOpacity={style.gradient.linearOpacity}
          linearOpacityMobile={style.gradient.linearOpacityMobile}
        />
      )}
      {style?.section?.backgroundPattern && (
        <div
          className={`absolute inset-0 opacity-20 ${style.section.backgroundPattern} bg-repeat`}
        />
      )}
      <div className="relative z-10 w-full sm:w-5/7">
        <p className={style.titleClassName}>
          {title}
        </p>
        <div className="flex gap-6 mt-6 sm:mt-10">
          {socialIcons.map((Icon, idx) => (
            <PushableButton
              key={idx}
              type="button"
              variant={style.button?.variant || "side"}
              className={style.button?.className}
              frontClassName={style.button?.childClassName}
              ariaLabel={`Social icon ${idx + 1}`}
            >
              <Icon
                strokeWidth={1.25}
                className={style.button?.iconClassName}
              />
            </PushableButton>
          ))}
        </div>
      </div>
      <div className="sm:absolute bottom-0 md:w-2/7 right-0 sm:h-full flex items-end justify-center z-10 relative mt-6 w-full sm:w-auto">
        <Image
          src="/sections/images/character2.webp"
          alt="Mew Footer"
          width={1000}
          height={1000}
          className="sm:w-auto w-full sm:h-11/12 object-contain object-bottom"
        />
      </div>
    </footer>
  );
});

export default MewFooter;
