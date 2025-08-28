import { HeroStyle } from '../types';
import { funAndTrendyTheme as theme } from '../../shared/themes';
import { ColorTemplate } from '../../shared/themeConfig';
import { getFunAndTrendyColors } from '../../shared/themeConfig';
import { getButtonConfig, getRetroTextConfig } from '../../shared/styleHelpers';

export function getFunAndTrendyHeroStyle(colorTemplate: ColorTemplate = 1): HeroStyle {
    const colors = getFunAndTrendyColors(colorTemplate);
    
    return {
        navbar: {
            logoSrc: "/sections/images/funandtrendylogo.svg",
            ...getButtonConfig('funAndTrendy', 'primary', colorTemplate),
            buttonClassName: `h-13 px-8 ${theme.borders.button}`,
            buttonContentClassName: `!text-2xl ${theme.text.headingClass} ${theme.fonts.body.className}`,
            className: "top-12",
            logoClassName: "h-18"
        },
        section: {
            className: colors.primary,
            height: "h-svh md:h-[150vh]",
            contentAlignment: "pt-[32.5%] md:pt-0 md:items-center",
            backgroundPattern: theme.backgrounds.texture,
            backgroundImage: theme.backgrounds.heroImage,
            textContainerClassName: `${theme.text.white} ${theme.fonts.heading.className}`,
            gapClassName: theme.spacing.gap
        },
        heading: {
            className: `text-9xl md:text-[clamp(3rem,19vw,19rem)] !tracking-tight ${theme.text.headingClass} leading-[1.2] mt-[-5%] ${theme.text.white} ${theme.heading.className}`,
            ...getRetroTextConfig()
        },
        subheading: {
            className: `md:max-w-[50%] ${theme.description.className}`
        }
    };
}

export const funandtrendyStyle = getFunAndTrendyHeroStyle(1);