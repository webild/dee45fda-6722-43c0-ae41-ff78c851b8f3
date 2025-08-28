import { HeroStyle } from '../types';
import { futuristicTheme as theme } from '../../shared/themes';
import { ColorTemplate } from '../../shared/themeConfig';
import { getFuturisticColors } from '../../shared/themeConfig';
import { getButtonConfig, getGradientTextConfig, getSideGlowGradient } from '../../shared/styleHelpers';

export function getFuturisticHeroStyle(colorTemplate: ColorTemplate = 1): HeroStyle {
    const colors = getFuturisticColors(colorTemplate);

    const sideGlowGradient = getSideGlowGradient(colorTemplate);

    return {
        navbar: {
            logoSrc: "/images/logowhite.svg",
            ...getButtonConfig('futuristic', 'primary', colorTemplate),
            className: "top-8",
            logoClassName: "h-8"
        },
        section: {
            className: colors.primary,
            height: "h-svh md:h-screen",
            contentAlignment: "items-center",
            sideGlowGradient: sideGlowGradient,
            textContainerClassName: `${theme.text.white} ${theme.fonts.heading.className}`,
            gapClassName: theme.spacing.gap,
            sparkles: {
                particleColor: '#ffffff',
                particleDensity: 80,
                minSize: 0.5,
                maxSize: 1.5,
                speed: 2
            }
        },
        heading: {
            className: `text-9xl md:text-[clamp(3rem,12.5vw,12.5rem)] !tracking-tight font-extrabold leading-[1.1] mt-[-5%] ${theme.fonts.heading.className}`,
            ...getGradientTextConfig()
        },
        subheading: {
            className: `md:max-w-[55%] leading-[1.2] ${theme.description.className}`
        }
    };
}

export const futuristicandoutofboxStyle = getFuturisticHeroStyle(1);