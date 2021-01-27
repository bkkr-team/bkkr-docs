import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { SpinnerConfig, SpinnerTypes } from './spinner.interface';
import { Color } from '../../interface';
import { setClassList } from '../../utils/style';
import { SPINNERS } from './spinner.config';

@Component({
  tag: 'bkkr-spinner',
  styleUrl: 'spinner.host.scss',
  shadow: true
})

export class Spinner implements ComponentInterface {

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * Duration of the spinner animation in milliseconds. The default varies based on the spinner.
   */
  @Prop() duration?: number;

  /**
   * The type of the SVG spinner to use. If a type is not provided, the platform's default
   * spinner will be used.
   */
  @Prop() type?: SpinnerTypes;

  private getName(): SpinnerTypes {
    const spinnerType = this.type;
    if (spinnerType) {
      return spinnerType;
    }
    return 'lines';
  }

  render() {
    const self = this;
    const spinnerType = self.getName();
    const spinner = SPINNERS[spinnerType] || SPINNERS['lines'];
    const duration = (typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur);
    const svgs: any[] = [];

    if (spinner.circles !== undefined) {
      for (let i = 0; i < spinner.circles; i++) {
        svgs.push(buildCircle(spinner, duration, i, spinner.circles));
      }

    } else if (spinner.lines !== undefined) {
      for (let i = 0; i < spinner.lines; i++) {
        svgs.push(buildLine(spinner, duration, i, spinner.lines));
      }
    }

    return (
      <Host
        class={setClassList(self.color, {
          [`spinner-${spinnerType}`]: true
        })}
        role="progressbar"
        style={spinner.elmDuration ? { animationDuration: duration + 'ms' } : {}}
      >
        {svgs}
      </Host>
    );
  }
}

const buildCircle = (spinner: SpinnerConfig, duration: number, index: number, total: number) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';

  return (
    <svg viewBox={data.viewBox || '0 0 64 64'} style={data.style}>
      <circle
        transform={data.transform || 'translate(32,32)'}
        cx={data.cx}
        cy={data.cy}
        r={data.r}
        style={spinner.elmDuration ? { animationDuration: duration + 'ms' } : {}}
      />
    </svg>
  );
};

const buildLine = (spinner: SpinnerConfig, duration: number, index: number, total: number) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';

  return (
    <svg viewBox={data.viewBox || '0 0 64 64'} style={data.style}>
      <line transform="translate(32,32)" y1={data.y1} y2={data.y2}></line>
    </svg>
  );
};