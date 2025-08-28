'use client';

import React from 'react';
import YearTimelineComponent, { type YearTimelineItem } from '@/components/timeline/YearTimeline';
import { getFunAndTrendyYearTimelineStyle } from "../../styles/roadmap/yearTimeline/funAndTrendy";
import { getFuturisticYearTimelineStyle } from "../../styles/roadmap/yearTimeline/futuristicAndOutOfBox";
import { useSiteTheme } from "../../ThemeProvider";

interface YearRoadmapTimelineProps {
  items: YearTimelineItem[];
  className?: string;
}

const YearRoadmapTimeline = ({ 
  items, 
  className = "" 
}: YearRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style = theme.styleVariant === 'funAndTrendy'
    ? getFunAndTrendyYearTimelineStyle(theme.colorTemplate)
    : getFuturisticYearTimelineStyle(theme.colorTemplate);
  return (
    <YearTimelineComponent 
      items={items}
      {...style}
      className={className}
    />
  );
};

YearRoadmapTimeline.displayName = 'YearRoadmapTimeline';

export default React.memo(YearRoadmapTimeline);