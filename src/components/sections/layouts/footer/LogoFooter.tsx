"use client";

import React, { memo } from "react";
import UnderlineButton from "@/components/buttons/UnderlineButton";
import { ChevronRight } from "lucide-react";
import FooterLogoComponent from "./FooterLogoComponent";
import { FooterStyle } from "../../styles/footer/types";
import { getFunAndTrendyFooterStyle } from "../../styles/footer/logo/funAndTrendy";
import { getFuturisticFooterStyle } from "../../styles/footer/logo/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";

interface FooterColumn {
  title?: string;
  items: Array<{
    label: string;
    onClick?: () => void;
  }>;
}

interface LogoFooterProps {
  columns?: FooterColumn[];
}

const LogoFooter = memo<LogoFooterProps>(function LogoFooter({ 
  columns
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
      className={`w-full shadow ${style.logoSrc ? "py-15" : "pt-0 pb-15"
        } px-[var(--width-10)] flex justify-center relative overflow-hidden ${style.className
        }`}
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
        className={`absolute z-0 top-0 -translate-y-1/2 left-0 w-full h-200 md:h-140 blur-2xl rounded-[100%]`}
        style={{ background: style.svgClassName }}
      ></div>
      <div
        className={`w-full max-w-[var(--width-100)] flex flex-col ${style.logoSrc ? "gap-10 md:gap-20" : "gap-0"
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
          className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[var(--width-10)] md:gap-[calc(var(--width-10)/2)] mb-10 ${style.columnsClassName}`}
        >
          {columns && columns.map((column, index) => (
            <div
              key={`column-${index}`}
              className={`flex items-start flex-col gap-4 ${style.columnClassName}`}
            >
              {column.items.map((item) => (
                <div
                  key={`${item.label}-${index}`}
                  className={`flex items-center gap-2 ${style.itemClassName}`}
                >
                  <ChevronRight
                    className={`h-[var(--text-base)] w-auto text-blue ${style.iconClassName}`}
                    strokeWidth={3}
                  />
                  <UnderlineButton
                    text={item.label}
                    onClick={item.onClick}
                    className={`!text-base font-medium ${style.buttonClassName}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default LogoFooter;
