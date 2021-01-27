import { Animation } from '../../../utils/animation/animation-interface';
import { createAnimation } from "../../../utils/animation/animation";

/**
 * Loading Leave Animation
 */
export const leaveAnimation = (baseEl: ShadowRoot, position: string): Animation => {
    const baseAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
  
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.loading-wrapper') as HTMLElement;
  
    const bottom = `calc(-10px - var(--safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--safe-area-top, 0px))`;
  
    wrapperAnimation.addElement(wrapperEl);
  
    switch (position) {
      case 'top':
        wrapperAnimation.fromTo('transform', `translate3d(-50%, ${top}, 0)`, 'translate3d(-50%, -200%, 0)');
        break;
      case 'middle':
        wrapperAnimation.fromTo('opacity', 0.99, 0);
        break;
      default:
        wrapperAnimation.fromTo('transform', `translate3d(-50%, ${bottom}, 0)`, 'translate3d(-50%, 200%, 0)');
        break;
    }
    return baseAnimation
      .addElement(hostEl)
      .easing('cubic-bezier(.36,.66,.04,1)')
      .duration(300)
      .addAnimation(wrapperAnimation);
  };