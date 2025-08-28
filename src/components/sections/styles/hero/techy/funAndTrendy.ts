import { TechyHeroStyle } from "../types";
import { funAndTrendyTheme as theme } from "../../shared/themes";
import { ColorTemplate, getFunAndTrendyColors } from "../../shared/themeConfig";
import { getButtonConfig, getRetroTextConfig } from "../../shared/styleHelpers";


export function getFunAndTrendyTechyHeroStyle(
  colorTemplate: ColorTemplate = 1
): TechyHeroStyle {
  const colors = getFunAndTrendyColors(colorTemplate);

  const buttonBase = {
    className: "w-full sm:w-auto px-10",
  };

  const animationProps = {
    variant: "trigger" as const,
  };

  return {
    navbar: {
      logoSrc: "/images/logowhite.svg",
      className: `mx-auto w-full! px-6 sm:px-[var(--width-10)]! bg-white! backdrop-blur-3xl shadow-[4px_4px_0px_rgba(0,0,0)] text-black left-1/2! top-4! -translate-x-1/2 ${theme.fonts.body.className} px-8 rounded-xl! py-4 ${theme.borders.button}`,
      ...getButtonConfig('funAndTrendy', 'primary', colorTemplate),
      buttonTextColor: "text-white",
    },
    section: {
      className: colors.primary,
      height: "h-svh md:h-screen",
      backgroundPattern: theme.backgrounds.texture,
    },
    heading: {
      className: `font-bold! md:text-7xl text-4xl mt-4 mx-auto tracking-tight uppercase ${theme.fonts.heading.className}`,
    },
    subheading: {
      className: `${theme.description.className} my-4 leading-5 md:leading-8 md:max-w-[var(--width-40)] mx-auto`,
    },
    radialGradient: {
      color: colors.patternGradient,
    },
    tag: {
      labelClassName: `font-bold! uppercase`,
      className: `mx-auto py-2 font-bold! rounded-full bg-white shadow-[2px_2px_0px_rgba(0,0,0)] px-4 text-black ${theme.borders.button}`,
    },
    title: {
      className: `font-bold! md:text-7xl text-4xl mt-4 mx-auto tracking-tight uppercase ${theme.fonts.heading.className} ${theme.text.white}`,
      ...getRetroTextConfig(),
    },
    description: {
      className: `${theme.description.className} my-4 leading-5 md:leading-8 md:max-w-[var(--width-40)] mx-auto ${theme.text.white}`,
      animationProps,
    },
    buttons: {
      primary: {
        ...buttonBase,
        ...getButtonConfig('funAndTrendy', 'primary', colorTemplate),
        className: `text-white ${theme.buttons.primary.className}`,
        buttonTextColor: "text-white",
      },
      secondary: {
        ...buttonBase,
        ...getButtonConfig('funAndTrendy', 'secondary', colorTemplate),
        className: `text-black ${theme.buttons.secondary.className}`,
        buttonTextColor: "text-black",
        buttonBgColor: "bg-white",
      },
    },
  };
}

export const funAndTrendyTechyHeroStyle = getFunAndTrendyTechyHeroStyle(1);