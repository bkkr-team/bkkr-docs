import { Animation } from '../../../utils/animation/animation-interface';
import { createAnimation } from "../../../utils/animation/animation";

/**
 * Loading Enter Animation
 */
export const enterAnimation = (baseEl: ShadowRoot, position: string): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const hostEl = baseEl.host || baseEl;
  const wrapperEl = baseEl.querySelector('.loading-wrapper') as HTMLElement;

  const bottom = `calc(-10px - var(--safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--safe-area-top, 0px))`;

  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translate3d(-50%, -200%, 0)', `translate3d(-50%, ${top}, 0)`);
      break;
    case 'middle':
      const topPosition = '50%';
      /* const topPosition = Math.floor(
        hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      ); */
      wrapperEl.style.top = `${topPosition}`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translate3d(-50%, 200%, 0)', `translate3d(-50%, ${bottom}, 0)`);
      break;
  }
  return baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.155,1.105,.295,1.12)')
    .duration(400)
    .addAnimation(wrapperAnimation);
};