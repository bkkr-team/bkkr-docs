import { ComponentProps, ComponentRef, FrameworkDelegate } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';

export interface DrawerOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  delegate?: FrameworkDelegate;
  animated?: boolean;
  indicator?: boolean;
  swipeToClose?: boolean;
  card?: boolean;

  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}