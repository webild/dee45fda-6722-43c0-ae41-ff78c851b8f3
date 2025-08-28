"use client";
import React, { memo, useCallback } from 'react';
import Image from 'next/image';
import { useLenis } from 'lenis/react';
import StaggerButton from '../buttons/staggerButton/StaggerButton';
import UnderlineButton from '../buttons/UnderlineButton';
import { useScrollDetection } from './floatingNavbar/useScrollDetection';
import { NavItem } from '@/types/navigation';

/**
 * SimpleFloatingNavbar Component
 * 
 * The button components (StaggerButton/UnderlineButton) can be replaced with any button component from @/components/buttons/
 * 
 * @example Replace with different button:
 * Instead of StaggerButton or UnderlineButton, you can use:
 * - ArrowButton from '@/components/buttons/ArrowButton'
 * - BubbleButton from '@/components/buttons/BubbleButton'
 * - DirectionalHoverButton from '@/components/buttons/directionalHoverButton/DirectionalHoverButton'
 * - ExpandingButton from '@/components/buttons/ExpandingButton'
 * - MagneticButton from '@/components/buttons/magneticButton/MagneticButton'
 * - MovingBorderButton from '@/components/buttons/movingBorderButton/MovingBorderButton'
 * - PushableButton from '@/components/buttons/PushableButton'
 * - RotatingIconButton from '@/components/buttons/rotatingIconButton/RotatingIconButton'
 * - ShiftButton from '@/components/buttons/shiftButton/ShiftButton'
 * - SlideButton from '@/components/buttons/SlideButton'
 */
interface SimpleFloatingNavbarProps {
    navItems: NavItem[];
    logoSrc?: string;
    logoWidth?: number;
    logoHeight?: number;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}

const SimpleFloatingNavbar = memo<SimpleFloatingNavbarProps>(function SimpleFloatingNavbar({
    navItems,
    logoSrc = "/images/logo.svg",
    logoWidth = 120,
    logoHeight = 40,
    buttonText = "Join Now",
    onButtonClick = () => {},
    className = ""
}) {
    const lenis = useLenis();
    const isScrolled = useScrollDetection(50);

    const handleNavClick = useCallback((id: string) => {
        if (id && lenis) {
            lenis.scrollTo(`#${id}`);
        }
    }, [lenis]);

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`
                fixed z-[100] flex items-center justify-between
                top-6 left-[var(--width-10)] w-80
                bg-white shadow
                rounded-full
                p-3
                pl-6
                h-fit
                transition-all duration-500 ease-in-out
                ${isScrolled ? '' : ''}
                ${className}
            `}
        >
            <Image
                src={logoSrc}
                width={logoWidth}
                height={logoHeight}
                className="h-[var(--text-xl)] w-auto"
                alt="Company Logo"
                priority
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 items-center">
                {navItems.map((item, index) => (
                    <UnderlineButton
                        key={index}
                        text={item.name}
                        onClick={() => handleNavClick(item.id)}
                        className="!text-base"
                        aria-label={`Navigate to ${item.name}`}
                    />
                ))}
            </div>
            
            <StaggerButton
                text={buttonText}
                onClick={onButtonClick}
                className="relative !text-white px-6 h-10 z-[100]"
                bgClassName="rounded-full !bg-black"
                aria-label={buttonText}
            />
        </nav>
    );
});

export default SimpleFloatingNavbar;