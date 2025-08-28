'use client';

import React from 'react';
import StackTimelineComponent from '@/components/timeline/StackTimeline';
import type { StackTimelineItem } from '@/types/timeline';
import { getFunAndTrendyStackTimelineStyle } from "../../styles/roadmap/stackTimeline/funAndTrendy";
import { getFuturisticStackTimelineStyle } from "../../styles/roadmap/stackTimeline/futuristicAndOutOfBox";
import { useSiteTheme } from "../../ThemeProvider";

interface StackRoadmapTimelineProps {
  items: StackTimelineItem[];
  className?: string;
}

const StackRoadmapTimeline = ({ 
  items, 
  className = "" 
}: StackRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style = theme.styleVariant === 'funAndTrendy'
    ? getFunAndTrendyStackTimelineStyle(theme.colorTemplate)
    : getFuturisticStackTimelineStyle(theme.colorTemplate);
  return (
    <StackTimelineComponent 
      items={items}
      {...style}
      className={className}
    />
  );
};

StackRoadmapTimeline.displayName = 'StackRoadmapTimeline';

export default React.memo(StackRoadmapTimeline);