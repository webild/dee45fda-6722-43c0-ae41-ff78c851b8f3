"use client";

import React, { memo } from "react";
import UnderlineButton from "@/components/buttons/UnderlineButton";
import FooterLogoComponent from "./FooterLogoComponent";
import { FooterStyle } from "../../styles/footer/types";
import { getFunAndTrendyFooterStyle } from "../../styles/footer/gradient/funAndTrendy";
import { getFuturisticFooterStyle } from "../../styles/footer/gradient/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";

interface FooterItem {
  label: string;
  onClick?: () => void;
}

interface GradientFooterProps {
  items?: FooterItem[];
}

const GradientFooter = memo(function GradientFooter({ 
  items
}: GradientFooterProps) {
  const theme = useSiteTheme();
  const style: FooterStyle = getThemeStyle(
    theme,
    {
      funAndTrendy: getFunAndTrendyFooterStyle,
      futuristicAndOutOfBox: getFuturisticFooterStyle
    }
  );
  return (
    <footer
      className={`relative overflow-hidden w-full bg-black shadow text-white ${
        style.logoSrc ? "py-0 pt-20 pb-10" : "pt-30 md:pt-0 pb-10"
      } px-[var(--width-10)] flex justify-center ${style.className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
        }}
      >
        <div
          className={`absolute z-0 -bottom-1/2 translate-y-[30%] left-0 w-[150%] md:w-[125%] -rotate-15 h-140 md:h-240 blur-2xl rounded-[100%] opacity-30 ${style.gradientClassName?.startsWith('bg-') ? style.gradientClassName : ''}`}
          style={{
            background: style.gradientClassName?.startsWith('var(') ? style.gradientClassName : undefined
          }}
        />
      </div>
      <div
        className={`relative w-full max-w-[var(--width-100)] z-10 flex flex-col-reverse md:flex-col ${
          style.logoSrc ? "gap-5 md:gap-10" : "gap-0 md:gap-5"
        } ${style.containerClassName}`}
      >
        <FooterLogoComponent
          logoSrc={style.logoSrc || ""}
          logoAlt={style.logoAlt}
          logoText={style.logoText}
          className={style.logoClassName}
          svgClassName={style.svgClassName}
        />

        <div
          className={`grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 ${style.itemsClassName}`}
        >
          {items &&
            items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className={`flex items-center justify-center text-center ${style.itemClassName}`}
              >
                <UnderlineButton
                  text={item.label}
                  onClick={item.onClick}
                  className={`!text-base font-medium !w-fit text-white/50 ${style.buttonClassName}`}
                />
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
});

GradientFooter.displayName = 'GradientFooter';

export default GradientFooter;
