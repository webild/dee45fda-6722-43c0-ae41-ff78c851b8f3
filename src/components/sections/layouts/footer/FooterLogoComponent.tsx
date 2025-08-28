"use client";

import React, { memo } from "react";
import Image from "next/image";
import useSvgTextLogo from "@/hooks/useSvgTextLogo";

interface FooterLogoComponentProps {
  logoSrc: string;
  logoAlt?: string;
  logoText?: string;
  className?: string;
  svgClassName?: string;
}

const FooterLogoComponent = memo(function FooterLogoComponent({
  logoSrc,
  logoAlt = "Webild Logo",
  logoText = "Webild",
  className = "",
  svgClassName = "",
}: FooterLogoComponentProps) {
  const { svgRef, textRef, viewBox, aspectRatio } = useSvgTextLogo(
    logoText,
    !!logoSrc
  );

  return (
    <div className={`w-full ${className}`}>
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      ) : (
        <svg
          ref={svgRef}
          viewBox={viewBox}
          className={`w-full ${svgClassName}`}
          style={{ aspectRatio: aspectRatio }}
          preserveAspectRatio="none"
          role="img"
          aria-label={`${logoText} logo`}
        >
          <text
            ref={textRef}
            x="0"
            y="0"
            className="font-bold fill-current"
            style={{
              fontSize: "20px",
              letterSpacing: "-0.02em",
              dominantBaseline: "text-before-edge",
            }}
          >
            {logoText}
          </text>
        </svg>
      )}
    </div>
  );
});

FooterLogoComponent.displayName = 'FooterLogoComponent';

export default FooterLogoComponent;
