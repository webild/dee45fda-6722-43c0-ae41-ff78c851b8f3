"use client";

import React, { memo } from "react";
import Image from "next/image";
import UnderlineButton from "@/components/buttons/UnderlineButton";
import { FooterStyle } from "../../styles/footer/types";
import { getFunAndTrendyFooterStyle } from "../../styles/footer/simple/funAndTrendy";
import { getFuturisticFooterStyle } from "../../styles/footer/simple/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";

interface FooterColumn {
  title: string;
  items: Array<{
    label: string;
    onClick?: () => void;
  }>;
}

interface SimpleFooterProps {
  columns?: FooterColumn[];
  copyrightText?: string;
  onPrivacyClick?: () => void;
}

const SimpleFooter = memo<SimpleFooterProps>(function SimpleFooter({ 
  columns,
  copyrightText = "© 2025 | Webild",
  onPrivacyClick
}) {
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
      role="contentinfo"
      aria-label="Site footer"
      className={`relative overflow-hidden w-full py-15  px-[var(--width-10)] text-white ${style.className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute z-10 top-0 left-0 w-full h-1 ${style.gradientClassName}`}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${style.gradientClassName}, transparent)`
        }}
      />
      <div
        aria-hidden="true"
        className={`absolute z-0 -top-1/2 -translate-y-1/2 left-0 w-full h-200 md:h-140 blur-2xl rounded-[100%]`}
        style={{ background: style.svgClassName }}
      ></div>
      <div
        className={`relative w-full max-w-[var(--width-100)] z-10 ${style.containerClassName}`}
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start mb-10">
          {style.logoSrc && (
            <div className="flex-shrink-0">
              <Image
                src={style.logoSrc}
                alt="Logo"
                width={style.logoWidth || 120}
                height={style.logoHeight || 40}
                className={`object-contain ${style.logoClassName}`}
              />
            </div>
          )}

          <div
            className={`w-full md:w-fit flex gap-[var(--width-10)] md:gap-[calc(var(--width-10)/2)] ${style.columnsClassName}`}
          >
            {(columns || []).map((column) => (
              <div
                key={column.title}
                className={`flex items-start flex-col gap-4 ${style.columnClassName}`}
              >
                <h3
                  className={`text-sm font-medium ${style.columnTitleClassName}`}
                >
                  {column.title}
                </h3>
                {column.items.map((item) => (
                  <UnderlineButton
                    key={item.label}
                    text={item.label}
                    onClick={item.onClick}
                    className={`!text-base font-medium ${style.columnItemClassName}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-between pt-9 border-t ${style.copyrightContainerClassName}`}
        >
          <span
            className={`text-sm ${style.copyrightTextClassName}`}
          >
            {copyrightText}
          </span>
          <UnderlineButton
            text="Privacy Policy"
            onClick={onPrivacyClick}
            className={style.privacyButtonClassName}
          />
        </div>
      </div>
    </footer>
  );
});

export default SimpleFooter;
