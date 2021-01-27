import { Animation } from '../../../utils/animation/animation-interface';
import { createAnimation } from '../../../utils/animation/animation';

/**
 * Drawer Enter Animation for the Card presentation style
 */
export const enterAnimation = (
    baseEl: HTMLElement,
    presentingEl?: HTMLElement,
  ): Animation => {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('bkkr-backdrop')!)
    .fromTo('opacity', 0, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.drawer-wrapper, .drawer-shadow')!)
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');

  const baseAnimation = createAnimation()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(500)
    .addAnimation(wrapperAnimation);

  if (presentingEl) {
    const presentingAnimation = createAnimation()
      .beforeStyles({
        'transform': 'translateY(0)',
        'transform-origin': 'top center',
        'overflow': 'hidden'
      });

      presentingAnimation
        .addElement(presentingEl)

      baseAnimation.addAnimation(presentingAnimation);
  }

  baseAnimation.addAnimation(backdropAnimation);

  return baseAnimation;
};