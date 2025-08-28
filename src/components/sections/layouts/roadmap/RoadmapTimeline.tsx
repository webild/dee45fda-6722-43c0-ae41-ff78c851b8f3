'use client';

import React from 'react';
import TimelineComponent from '@/components/timeline/Timeline';
import { getFunAndTrendyTimelineStyle } from "../../styles/roadmap/timeline/funAndTrendy";
import { getFuturisticTimelineStyle } from "../../styles/roadmap/timeline/futuristicAndOutOfBox";
import { useSiteTheme } from "../../ThemeProvider";

interface TimelineItem {
  title: string;
  description: string;
  video?: string;
  image?: string;
}

interface RoadmapTimelineProps {
  items: TimelineItem[];
  title?: string;
  className?: string;
}

const RoadmapTimeline = ({ 
  items, 
  title = "Timeline", 
  className = "" 
}: RoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style = theme.styleVariant === 'funAndTrendy'
    ? getFunAndTrendyTimelineStyle(theme.colorTemplate)
    : getFuturisticTimelineStyle(theme.colorTemplate);
  
  const titleConfig = {
    ...style,
    text: title,
    className: style.sectionTitleClassName
  };

  return (
    <TimelineComponent 
      items={items}
      {...style}
      title={title}
      titleConfig={titleConfig}
      className={className}
    />
  );
};

RoadmapTimeline.displayName = 'RoadmapTimeline';

export default React.memo(RoadmapTimeline);