import { Animation } from '../../../utils/animation/animation-interface';
import { createAnimation } from '../../../utils/animation/animation';

/**
 * Drawer Leave Animation
 */
export const leaveAnimation = (
  baseEl: HTMLElement,
  presentingEl?: HTMLElement,
  duration = 500
): Animation => {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('bkkr-backdrop')!)
    .fromTo('opacity', 'var(--backdrop-opacity)', 0);

  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.drawer-wrapper, .drawer-shadow')!)
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');

  const baseAnimation = createAnimation()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(duration)
    .addAnimation(wrapperAnimation);

  if (presentingEl) {
    const presentingAnimation = createAnimation()
      .beforeClearStyles(['transform'])
      .afterClearStyles(['transform'])
      .onFinish(currentStep => {
        // only reset background color if this is the last card-style drawer
        if (currentStep !== 1) { return; }

        presentingEl.style.setProperty('overflow', '');
      });

      baseAnimation.addAnimation(presentingAnimation);
  }

  baseAnimation.addAnimation(backdropAnimation);

  return baseAnimation;
};