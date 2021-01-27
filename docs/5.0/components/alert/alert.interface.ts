import { JSXBase } from '@stencil/core/internal';
import { TextFieldTypes } from '../../interface';
import { AnimationBuilder } from '../../utils/animation/animation-interface';
import { SafeString } from '../../utils/sanitization';

export interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string | SafeString;
  cssClass?: string | string[];
  inputs?: AlertInput[];
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;

  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

export interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: AlertInputAttributes | AlertTextareaAttributes;
  tabindex?: number;
}

export interface AlertTextareaAttributes extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export interface AlertInputAttributes extends JSXBase.InputHTMLAttributes<HTMLInputElement> {}

export interface AlertButton {
  text: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | {[key: string]: any};
}