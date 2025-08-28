'use client';

import React from 'react';
import ProcessTimelineComponent from '@/components/timeline/ProcessTimeline';
import type { ProcessTimelineItem } from '@/types/timeline';
import { getFunAndTrendyProcessTimelineStyle } from "../../styles/roadmap/processTimeline/funAndTrendy";
import { getFuturisticProcessTimelineStyle } from "../../styles/roadmap/processTimeline/futuristicAndOutOfBox";
import { useSiteTheme } from "../../ThemeProvider";

interface ProcessRoadmapTimelineProps {
  items: ProcessTimelineItem[];
  className?: string;
}

const ProcessRoadmapTimeline = ({ 
  items, 
  className = "" 
}: ProcessRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style = theme.styleVariant === 'funAndTrendy'
    ? getFunAndTrendyProcessTimelineStyle(theme.colorTemplate)
    : getFuturisticProcessTimelineStyle(theme.colorTemplate);
  return (
    <ProcessTimelineComponent 
      items={items}
      {...style}
      className={className}
    />
  );
};

ProcessRoadmapTimeline.displayName = 'ProcessRoadmapTimeline';

export default React.memo(ProcessRoadmapTimeline);