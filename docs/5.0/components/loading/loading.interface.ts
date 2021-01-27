import { Color } from "../../interface";
import { AnimationBuilder } from "../../utils/animation/animation-interface";

export interface ToastOptions {
  cssClass?: string | string[];
  position?: 'top' | 'bottom' | 'middle';
  animated?: boolean;

  color?: Color;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
