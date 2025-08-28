import { BentoItem } from '@/components/bento/threeDBento/constants';
import { InfoRevealBentoItem } from "@/components/bento/infoRevealBento/InfoRevealBento";
import { SimpleHowToBuyItem } from "@/components/bento/SimpleHowToBuyBento";
import { BaseSection, BaseTextConfig } from '../shared/types';

export interface BentoConfig {
    items?: BentoItem[];
    className?: string;
    gridClassName?: string;
    itemClassName?: string;
    imageContainerClassName?: string;
    imageClassName?: string;
    textContainerClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    enableAnimation?: boolean;
}

export interface HowToBuyStyle {
    section: BaseSection;
    title: BaseTextConfig;
    bento: BentoConfig;
}

export interface BentoConfig2D {
  items: InfoRevealBentoItem[];
  enableHoverAnimation?: boolean;
  showImages?: boolean;
  className?: string;
  gridClassName?: string;
  itemClassName?: string;
}

export interface SimpleBentoConfig2D {
  items: SimpleHowToBuyItem[];
  className?: string;
  gridClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface HowToBuyStyle2D {
  section: BaseSection;
  title: BaseTextConfig;
  bento?: BentoConfig2D;
  simpleBento?: SimpleBentoConfig2D;
  componentType: "reveal" | "simple";
}