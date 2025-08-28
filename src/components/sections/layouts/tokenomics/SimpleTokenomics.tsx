'use client';

import React, { memo } from 'react';
import TextRenderer from '@/components/text/TextRenderer';
import dynamic from 'next/dynamic';
import { TokenomicsStyle } from '@/components/sections/styles/tokenomics/types';
import { getFunAndTrendyTokenomicsStyle } from "../../styles/tokenomics/simple/funAndTrendy";
import { getFuturisticTokenomicsStyle } from "../../styles/tokenomics/simple/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import HorizontalTextbox from '@/components/textbox/HorizontalTextbox';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';

const Spotlight = dynamic(() => import('@/components/background/Spotlight'), {
  ssr: false
});

interface TokenomicsProps {
  title?: string;
  description?: string;
  kpiItems?: Array<{
    value: string;
    description: string;
  }>;
}

const Tokenomics = ({ 
  title = "Tokenomics",
  description = "With zero taxes, locked liquidity, and renounced ownership, Polly is built for the community—fair, transparent, and unstoppable.",
  kpiItems = [
    { value: "98%", description: "Community Owned" },
    { value: "2.5M+", description: "Token Holders" },
    { value: "45ms", description: "Block Time" },
    { value: "99.9%", description: "Uptime" }
  ]
}: TokenomicsProps) => {
  const theme = useSiteTheme();
  const style: TokenomicsStyle = getThemeStyle(
    theme,
    {
      funAndTrendy: getFunAndTrendyTokenomicsStyle,
      futuristicAndOutOfBox: getFuturisticTokenomicsStyle
    }
  );
  return (
    <section className={`w-full relative overflow-hidden ${style.section.backgroundColor} ${style.section.className}`}>
      {style.section.backgroundPattern && (
        <div className={`absolute inset-0 opacity-20 ${style.section.backgroundPattern} bg-repeat`} />
      )}
      {style.section.spotlight && (
        <Spotlight {...style.section.spotlight} />
      )}
      <div className="max-w-[var(--width-100)] px-[var(--width-10)] mx-auto relative z-10 flex flex-col gap-6">
        <HorizontalTextbox
          title={<TextRenderer config={{...style.title, text: title}} as="h1" />}
          description={
            <p className={style.description.className}>
              {description}
            </p>
          }
          className="!gap-0 md:!gap-6"
        />
        <SimpleKPIBento
          items={kpiItems.map((item, index) => ({
            ...item,
            ...style.bento.items?.[index]
          }))}
          className={style.bento.className}
          gridClassName={style.bento.gridClassName}
          itemClassName={style.bento.itemClassName}
          valueClassName={style.bento.valueClassName}
          descriptionClassName={style.bento.descriptionClassName}
          gradientColors={style.bento.gradientColors}
        />
      </div>
    </section>
  );
};

Tokenomics.displayName = 'Tokenomics';

export default memo(Tokenomics);
