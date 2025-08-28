"use client";
import React, { memo } from 'react';
import Image from 'next/image';
import StaggerButton from '../buttons/staggerButton/StaggerButton';
import SlideButton from '../buttons/SlideButton';

/**
 * MinimalNavbar Component
 * 
 * The button components (StaggerButton/SlideButton) can be replaced with any button component from @/components/buttons/
 * 
 * @example Replace with different button:
 * Instead of StaggerButton or SlideButton, you can use:
 * - ArrowButton from '@/components/buttons/ArrowButton'
 * - BubbleButton from '@/components/buttons/BubbleButton'
 * - DirectionalHoverButton from '@/components/buttons/directionalHoverButton/DirectionalHoverButton'
 * - ExpandingButton from '@/components/buttons/ExpandingButton'
 * - MagneticButton from '@/components/buttons/magneticButton/MagneticButton'
 * - MovingBorderButton from '@/components/buttons/movingBorderButton/MovingBorderButton'
 * - PushableButton from '@/components/buttons/PushableButton'
 * - RotatingIconButton from '@/components/buttons/rotatingIconButton/RotatingIconButton'
 * - ShiftButton from '@/components/buttons/shiftButton/ShiftButton'
 * - UnderlineButton from '@/components/buttons/UnderlineButton'
 */
interface MinimalNavbarProps {
    logoSrc?: string;
    logoWidth?: number;
    logoHeight?: number;
    logoClassName?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
    buttonType?: string,
    buttonClassName?: string;
    buttonContentClassName?: string;
    buttonBgColor?: string;
    buttonHoverBgColor?: string;
    buttonTextColor?: string;
    buttonHoverTextColor?: string;

}

const MinimalNavbar = memo<MinimalNavbarProps>(function MinimalNavbar({
    logoSrc = "/images/logo.svg",
    logoWidth = 120,
    logoHeight = 40,
    logoClassName = "",
    buttonText = "Join Now",
    onButtonClick = () => { },
    className = "",
    buttonType,
    buttonClassName = "",
    buttonContentClassName = "",
    buttonBgColor = "bg-white",
    buttonHoverBgColor = "hover:bg-gray-200",
    buttonTextColor = "text-black",
    buttonHoverTextColor = "hover:text-gray-800",
}) {
    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`
                fixed z-[100] flex items-center justify-between
                top-6 left-[var(--width-10)] right-[var(--width-10)]
                transition-all duration-500 ease-in-out
                ${className}
            `}
        >
            <Image
                src={logoSrc}
                width={logoWidth}
                height={logoHeight}
                className={`h-[var(--text-xl)] w-auto ${logoClassName}`}
                alt="Company Logo"
                priority
            />

            {buttonType === 'slide' ? (
                <SlideButton
                    text={buttonText}
                    onClick={onButtonClick}
                    className={buttonClassName}
                    contentClassName={buttonContentClassName}
                    bgColor={buttonBgColor}
                    hoverBgColor={buttonHoverBgColor}
                    textColor={buttonTextColor}
                    hoverTextColor={buttonHoverTextColor}
                />
            ) : (
                <StaggerButton
                    text={buttonText}
                    onClick={onButtonClick}
                    className="relative px-6 h-10 z-100"
                    bgClassName="rounded-full"
                    aria-label={buttonText}
                />
            )}

        </nav>
    );
});

export default MinimalNavbar;