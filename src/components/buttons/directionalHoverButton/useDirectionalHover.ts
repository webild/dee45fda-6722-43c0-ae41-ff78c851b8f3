import { useEffect, RefObject } from 'react';

export const useDirectionalHover = (
    buttonRef: RefObject<HTMLElement | null>,
    circleSelector: string = '.directional-hover-button-circle'
) => {
    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        if (window.innerWidth < 768) return;

        const handleHover = (event: MouseEvent) => {
            const buttonRect = button.getBoundingClientRect();
            const buttonWidth = buttonRect.width;
            const buttonHeight = buttonRect.height;
            const buttonCenterX = buttonRect.left + buttonWidth / 2;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const offsetXFromLeft = ((mouseX - buttonRect.left) / buttonWidth) * 100;
            const offsetYFromTop = ((mouseY - buttonRect.top) / buttonHeight) * 100;

            let offsetXFromCenter = ((mouseX - buttonCenterX) / (buttonWidth / 2)) * 50;
            offsetXFromCenter = Math.abs(offsetXFromCenter);

            const circle = button.querySelector(circleSelector) as HTMLElement;
            if (circle) {
                circle.style.left = `${offsetXFromLeft.toFixed(1)}%`;
                circle.style.top = `${offsetYFromTop.toFixed(1)}%`;
                circle.style.width = `${115 + Number(offsetXFromCenter.toFixed(1)) * 2}%`;
            }
        };

        button.addEventListener('mouseenter', handleHover);
        button.addEventListener('mouseleave', handleHover);

        return () => {
            button.removeEventListener('mouseenter', handleHover);
            button.removeEventListener('mouseleave', handleHover);
        };
    }, [buttonRef, circleSelector]);
};