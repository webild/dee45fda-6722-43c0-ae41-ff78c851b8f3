"use client";

import { memo } from "react";
import { Rocket } from "lucide-react";
import BgRadialGradient from "@/components/background/BgRadialGradient";
import TaggedTextbox from "@/components/textbox/TaggedTextbox";
import { TechyHeroStyle } from "../../styles/hero/types";
import { getFunAndTrendyTechyHeroStyle } from "../../styles/hero/techy/funAndTrendy";
import { getFuturisticTechyHeroStyle } from "../../styles/hero/techy/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import TextRenderer from "../../../text/TextRenderer";
import SlideButton from "@/components/buttons/SlideButton";

interface TechyHeroProps {
  title?: string;
  description?: string;
  tagLabel?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const TechyHero = ({ 
  title = "Next-Gen DeFi Platform",
  description = "Experience the future of decentralized finance with cutting-edge technology and unmatched security.",
  tagLabel = "Now Live",
  primaryButtonText = "Launch App",
  secondaryButtonText = "Read Docs"
}: TechyHeroProps) => {
  const theme = useSiteTheme();
  const style: TechyHeroStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyTechyHeroStyle,
    futuristicAndOutOfBox: getFuturisticTechyHeroStyle
  });
  return (
    <section className={`relative min-h-screen overflow-x-hidden flex justify-center items-center flex-col max-w-[var(--width-100)] px-6 ${style.section.className}`}>
      {style.section.backgroundPattern && (
        <div className={`absolute inset-0 opacity-30 ${style.section.backgroundPattern} bg-repeat`} />
      )}
      <BgRadialGradient
        color={style.radialGradient.color}
      />
      <TaggedTextbox
        tagClassName={style.tag.className}
        label={tagLabel || style.tag.label}
        icon={<Rocket className="h-[var(--text-base)]" />}
        title={<TextRenderer config={{...style.title, text: title}} as="h1" />}
        description={<p className={style.description.className}>
          {description}
        </p>
        }
        className="sm:max-w-[var(--width-90)] relative z-10 gap-1!"
        contentClassName="flex flex-col sm:flex-row gap-4 md:max-w-4xl"
        tagLabelClassName={style.tag.labelClassName}
      >
        <div className="flex gap-4 mt-2 sm:mt-0">
          <SlideButton
            text={primaryButtonText}
            className={`${style.buttons.primary.className}`}
            bgColor={style.buttons.primary.buttonBgColor}
            contentClassName={style.buttons.primary.buttonContentClassName}
            hoverBgColor={style.buttons.primary.buttonHoverBgColor}
            textColor={style.buttons.primary.buttonTextColor}
            hoverTextColor={style.buttons.primary.buttonHoverTextColor}

          />

          <SlideButton
            text={secondaryButtonText}
            className={`${style.buttons.secondary.className}`}
            bgColor={style.buttons.secondary.buttonBgColor}
            contentClassName={style.buttons.secondary.buttonContentClassName}
            hoverBgColor={style.buttons.secondary.buttonHoverBgColor}
            textColor={style.buttons.secondary.buttonTextColor}
            hoverTextColor={style.buttons.secondary.buttonHoverTextColor}
          />

        </div>
      </TaggedTextbox>
    </section>
  );
}

TechyHero.displayName = 'TechyHero';

export default memo(TechyHero);