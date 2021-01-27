import { createAnimation } from "../../../utils/animation/animation";
import { Animation } from "../../../utils/animation/animation-interface";

/**
 * Popover Leave Animation
 */
export const leaveAnimation = (baseEl: HTMLElement): Animation => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
  
    backdropAnimation
      .addElement(baseEl.querySelector('bkkr-backdrop')!)
      .fromTo('opacity', 'var(--backdrop-opacity)', 0);
  
    wrapperAnimation
      .addElement(baseEl.querySelector('.popover-wrapper')!)
      .fromTo('opacity', 0.99, 0);
  
    return baseAnimation
      .addElement(baseEl)
      .easing('ease')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };