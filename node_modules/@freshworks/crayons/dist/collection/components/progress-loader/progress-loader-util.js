import FwProgress from 'multi-nprogress';
const DEFAULT_OPTIONS = {
  parent: 'body',
  minimum: 0.08,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  template: '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1"></div>',
  show: false,
};
export function getPropOptions(opts = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    parent: (_a = opts.parent) !== null && _a !== void 0 ? _a : DEFAULT_OPTIONS.parent,
    minimum: (_b = opts.minimum) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.minimum,
    easing: (_c = opts.easing) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.easing,
    speed: (_d = opts.speed) !== null && _d !== void 0 ? _d : DEFAULT_OPTIONS.speed,
    trickle: (_e = opts.trickle) !== null && _e !== void 0 ? _e : DEFAULT_OPTIONS.trickle,
    trickleSpeed: (_f = opts.trickleSpeed) !== null && _f !== void 0 ? _f : DEFAULT_OPTIONS.trickleSpeed,
    template: (_g = opts.template) !== null && _g !== void 0 ? _g : DEFAULT_OPTIONS.template,
    show: (_h = opts.show) !== null && _h !== void 0 ? _h : DEFAULT_OPTIONS.show,
  };
}
export function createProgressLoaderContainer(options) {
  const customizedOptions = Object.assign(Object.assign({}, getPropOptions(options)), { barSelector: '[role="progressbar"]' });
  const instance = FwProgress().configure(customizedOptions);
  if (!document.querySelector('#fw-progress-bar-style')) {
    const style = document.createElement('style');
    style.id = 'fw-progress-bar-style';
    style.innerHTML = `
            .nprogress .bar {
              background: var(--progress-loader-color,#2c5cc5);
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: var(--progress-loader-height,2px);
            }
            .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
            }
            .nprogress-custom-parent .nprogress .bar {
              position: absolute;
            }
      `;
    document.head.appendChild(style);
  }
  return {
    start: wrapFn(instance.start, customizedOptions),
    done: wrapFn(instance.done, customizedOptions),
    set: wrapFn(instance.set, customizedOptions),
    inc: wrapFn(instance.inc, customizedOptions),
  };
}
function wrapFn(fn, options) {
  return function (...arr) {
    try {
      if (options.parent) {
        if (!document.querySelector(options.parent)) {
          console.error(`Document Selector ${options.parent} not found`);
          return;
        }
      }
      fn.apply(this, arr);
    }
    catch (error) {
      console.error(`Error occurred in calling Progress Loader Functions`, error);
    }
  };
}
