import React, { memo } from "react";
import RegularAccordion from "@/components/accordions/RegularAccordion";
import TextRenderer from "@/components/text/TextRenderer";
import { FAQStyle, AccordionItem } from "../../styles/faq/types";
import { getFunAndTrendyRegularFAQStyle } from "../../styles/faq/regular/funAndTrendy";
import { getFuturisticRegularFAQStyle } from "../../styles/faq/regular/futuristicAndOutOfBox";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import { cls } from "@/lib/utils";

interface RegularFAQProps {
  items: AccordionItem[];
}

const RegularFAQ = memo(function RegularFAQ({ 
  items 
}: RegularFAQProps) {
  const theme = useSiteTheme();
  const style: FAQStyle = getThemeStyle(
    theme,
    {
      funAndTrendy: getFunAndTrendyRegularFAQStyle,
      futuristicAndOutOfBox: getFuturisticRegularFAQStyle
    }
  );
  return (
    <section
      className={cls(
        "min-h-screen flex items-center justify-center",
        style.section.className,
        style.section.backgroundColor
      )}
    >
      {/* Gradient Overlay */}
      {style.gradient?.show && (
        <div
          className={cls(
            "absolute pointer-events-none",
            style.gradient.inset || "inset-0",
            style.gradient.rounded || "rounded-none",
            style.gradient.className
          )}
          style={{
            background: `
                            radial-gradient(circle at center, ${
                              style.gradient.radialColor || "transparent"
                            } ${
              style.gradient.radialOpacity || "0%"
            }, transparent 100%),
                            linear-gradient(180deg, transparent 0%, ${
                              style.gradient.linearColor || "transparent"
                            } ${style.gradient.linearOpacity || "0%"})
                        `,
          }}
        />
      )}

      <div
        className={cls("relative z-10 w-full", style.section.innerClassName)}
      >
        {/* Title */}
        <div className="text-center mb-8">
          <TextRenderer config={style.title} as="h1" />

          {style.description && (
            <p className={`${style.description.className}`}>
              {style.description.text}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <RegularAccordion
          items={items}
          className={style.accordion.className}
          titleClassName="hidden"
          itemClassName={style.accordion.itemClassName}
          itemTitleClassName={style.accordion.itemTitleClassName}
          itemIconContainerClassName={
            style.accordion.itemIconContainerClassName
          }
          itemIconClassName={style.accordion.itemIconClassName}
          itemContentClassName={style.accordion.itemContentClassName}
        />
      </div>
    </section>
  );
});

export default RegularFAQ;
