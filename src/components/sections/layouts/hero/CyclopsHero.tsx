"use client";

import Image from "next/image";
import { memo } from "react";
import TextRenderer from "@/components/text/TextRenderer";
import SlideButton from "@/components/buttons/SlideButton";
import SimpleNavbar from "@/components/navigation/SimpleNavbar";
import SideGlowGradientBackground from "@/components/background/SideGlowGradientBackground";
import dynamic from "next/dynamic";
import { CyclopsHeroStyle } from "../../styles/hero/types";
import { getFunAndTrendyCyclopsHeroStyle } from "../../styles/hero/cyclops/funAndTrendy";
import { getFuturisticCyclopsHeroStyle } from "../../styles/hero/cyclops/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";

const SparklesCore = dynamic(
  () =>
    import("@/components/sparkles/Sparkles").then((mod) => ({
      default: mod.SparklesCore,
    })),
  {
    ssr: false,
  }
);

interface CyclopsHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  onMenuClick?: () => void;
  onContactClick?: () => void;
}

const CyclopsHero = ({
  title = "Welcome to the Future",
  subtitle = "Experience the next generation of web development",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onMenuClick,
  onContactClick,
}: CyclopsHeroProps) => {
  const theme = useSiteTheme();
  const style: CyclopsHeroStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyCyclopsHeroStyle,
    futuristicAndOutOfBox: getFuturisticCyclopsHeroStyle
  });
  return (
    <>
      <SimpleNavbar
        logoSrc={style.navbar.logoSrc}
        leftButtonText="Menu"
        rightButtonText="Contact"
        buttonBgColor={style.navbar.buttonBgColor}
        buttonHoverBgColor={style.navbar.buttonHoverBgColor}
        buttonTextColor={style.navbar.buttonTextColor}
        buttonHoverTextColor={style.navbar.buttonHoverTextColor}
        buttonClassName={style.navbar.buttonClassName}
        buttonContentClassName={style.navbar.buttonContentClassName}
        className={style.navbar.className}
        logoClassName={style.navbar.logoClassName}
        onLeftButtonClick={onMenuClick}
        onRightButtonClick={onContactClick}
      />
      <section
        className={`w-full h-svh relative overflow-hidden ${style.section.className}`}
      >
        {/* Background Effects */}
        {style.section.sideGlowGradient ? (
          <>
            <SideGlowGradientBackground
              radialColor={style.section.sideGlowGradient.radialColor}
              linearColor={style.section.sideGlowGradient.linearColor}
              radialOpacity={style.section.sideGlowGradient.radialOpacity}
              linearOpacity={style.section.sideGlowGradient.linearOpacity}
            />
            {style.section.sparkles && (
              <div className="absolute inset-3 md:inset-8 rounded-xl opacity-40">
                <SparklesCore
                  {...style.section.sparkles}
                  className="absolute inset-0"
                  background="transparent"
                />
              </div>
            )}
          </>
        ) : style.section.customGradient ? (
          <div
            className="absolute inset-3 md:inset-8 rounded-xl overflow-hidden"
            style={{ background: style.section.customGradient }}
          >
            {style.section.sparkles && (
              <div className="absolute inset-0 opacity-40">
                <SparklesCore
                  {...style.section.sparkles}
                  className="absolute inset-0"
                  background="transparent"
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className={`absolute inset-0 opacity-30 ${style.section.backgroundPattern} bg-repeat`}
          />
        )}

        {/* Main Content Container */}
        <div
          className={`h-svh w-full gap-10 md:gap-6 px-[var(--width-10)] relative`}
        >
          <div className={`relative z-10 w-full max-w-[var(--width-100)] gap-10 md:gap-0 h-full ${style.section.contentAlignment} flex flex-col-reverse md:flex-row`} >
            {/* Text Section - Left Side */}
            <div
              className={`relative z-10 w-full md:w-1/2 flex flex-col gap-6 md:gap-8 ${style.layout.textSectionClassName}`}
            >
              <TextRenderer config={{...style.heading, text: title}} as="h1" />
              <h2
                className={`${style.subheading.className} text-center mx-auto md:mx-0 md:text-start`}
              >
                {subtitle}
              </h2>

              {/* Action Buttons */}
              <div
                className={`flex mx-auto md:mx-0 ${style.buttons.containerClassName}`}
              >
                <SlideButton
                  text={primaryButtonText}
                  onClick={onPrimaryButtonClick || style.buttons.primary.onClick}
                  className={style.buttons.primary.className}
                  bgColor={style.buttons.primary.bgColor}
                  textColor={style.buttons.primary.textColor}
                  hoverTextColor={style.buttons.primary.hoverTextColor}
                  hoverBgColor={style.buttons.primary.hoverBgColor}
                  contentClassName={style.buttons.primary.textClassName}
                />
                <SlideButton
                  text={secondaryButtonText}
                  onClick={
                    onSecondaryButtonClick || style.buttons.secondary.onClick
                  }
                  className={style.buttons.secondary.className}
                  bgColor={style.buttons.secondary.bgColor}
                  textColor={style.buttons.secondary.textColor}
                  hoverTextColor={style.buttons.secondary.hoverTextColor}
                  hoverBgColor={style.buttons.secondary.hoverBgColor}
                  contentClassName={style.buttons.secondary.textClassName}
                />
              </div>
            </div>

            {/* Character Image Section - Right Side */}
            <div
              className={`relative w-full md:w-1/2 z-10 h-fit flex items-center justify-center mx-auto ${style.layout.imageSectionClassName}`}
            >
              <div className={style.characterImage.containerClassName}>
                <Image
                  src={style.characterImage.src}
                  width={style.characterImage.width || 500}
                  height={style.characterImage.height || 500}
                  alt={style.characterImage.alt}
                  className={style.characterImage.className}
                />
              </div>
            </div>
          </div>

          {/* Background Image (if any) */}
          {style.section.backgroundImage && (
            <div className="w-[250%] md:w-full absolute z-0 bottom-0 left-1/2 -translate-x-1/2">
              <Image
                src={style.section.backgroundImage}
                width={1000}
                height={1000}
                alt="Background decoration"
                className="w-full h-auto [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%,)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%)]"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

CyclopsHero.displayName = "CyclopsHero";

export default memo(CyclopsHero);
