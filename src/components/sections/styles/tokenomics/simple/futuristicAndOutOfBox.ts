import { TokenomicsStyle } from "../types";
import { futuristicTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getFuturisticColors } from "../../shared/themeConfig";
import { getGradientTextConfig, getStandardSpotlight, getFuturisticCardStyle } from "../../shared/styleHelpers";

export function getFuturisticTokenomicsStyle(
  colorTemplate: ColorTemplate = 1
): TokenomicsStyle {
  const colors = getFuturisticColors(colorTemplate);

  return {
    section: {
      className: theme.spacing.sectionPadding,
      backgroundColor: colors.primary,
      spotlight: getStandardSpotlight(colorTemplate),
    },
    title: {
      className: `${theme.heading.sizes.hero} leading-none tracking-tight ${theme.text.headingClass} ${theme.heading.className}`,
      ...getGradientTextConfig(),
    },
    description: {
      className: `mt-4 ${theme.description.className} max-w-3xl text-off-white`,
    },
    bento: {
      items: [],
      className: "",
      gridClassName: "gap-3 md:gap-6",
      itemClassName: `${getFuturisticCardStyle(colorTemplate)} gap-16! md:gap-20!`,
      valueClassName: `${theme.tokenomics.value.large} font-semibold ${theme.heading.className}`,
      ...getGradientTextConfig(),
      descriptionClassName: `${theme.tokenomics.description.small} font-medium ${theme.description.className} text-off-white`,
    },
  };
}

export const futuristicTokenomicsStyle = getFuturisticTokenomicsStyle(1);
