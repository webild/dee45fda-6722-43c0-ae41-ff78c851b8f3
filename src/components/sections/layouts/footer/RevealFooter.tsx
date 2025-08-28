'use client';

import React, { memo, useRef, useEffect, useState } from 'react';
import SimpleFooter from './SimpleFooter';
import { FooterStyle } from "../../styles/footer/types";
import { getFunAndTrendyFooterStyle } from "../../styles/footer/reveal/funAndTrendy";
import { getFuturisticFooterStyle } from "../../styles/footer/reveal/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";

const RevealFooter = memo(function RevealFooter() {
  const theme = useSiteTheme();
  const style: FooterStyle = getThemeStyle(
    theme,
    {
      funAndTrendy: getFunAndTrendyFooterStyle,
      futuristicAndOutOfBox: getFuturisticFooterStyle
    }
  );
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    const currentFooter = footerRef.current;

    if (currentFooter) {
      resizeObserver.observe(currentFooter);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      className={`relative z-0 w-full ${style.className}`}
      style={{
        height: footerHeight ? `${footerHeight}px` : 'auto',
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
      }}
    >
      <div
        className={`fixed bottom-0 w-full flex items-center justify-center overflow-hidden ${style.wrapperClassName}`}
        style={{ height: footerHeight ? `${footerHeight}px` : 'auto' }}
      >
        <div ref={footerRef} className={`w-full ${style.containerClassName}`}>
          <SimpleFooter />
        </div>
      </div>
    </section>
  );
});

export default RevealFooter;