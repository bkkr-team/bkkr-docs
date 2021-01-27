import { Color } from "../../interface";
import { AnimationBuilder } from "../../utils/animation/animation-interface";
import { SafeString } from "../../utils/sanitization";

export interface ToastOptions {
    header?: string;
    message?: string | SafeString;
    cssClass?: string | string[];
    duration?: number;
    buttons?: (ToastButton | string)[];
    position?: 'top' | 'bottom' | 'middle';
    translucent?: boolean;
    animated?: boolean;
  
    color?: Color;
    keyboardClose?: boolean;
    id?: string;
  
    enterAnimation?: AnimationBuilder;
    leaveAnimation?: AnimationBuilder;
  }
  
  export interface ToastButton {
    text?: string;
    icon?: string;
    side?: 'start' | 'end';
    role?: 'cancel' | string;
    cssClass?: string | string[];
    handler?: () => boolean | void | Promise<boolean | void>;
  }