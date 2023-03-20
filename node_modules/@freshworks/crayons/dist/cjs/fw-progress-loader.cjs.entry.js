'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const progressLoaderUtil = require('./progress-loader-util-464063d5.js');
require('./_commonjsHelpers-537d719a.js');

const ProgressLoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Specify a selector to change the parent container. Default is `body`
     * Selector is accessed internally via document.querySelector method
     */
    this.parent = 'body';
    /**
     * Changes the minimum percentage used upon starting. Default is `0.08`
     */
    this.minimum = 0.08;
    /**
     * Adjust animation settings using easing (a CSS easing string). Default is `ease`
     */
    this.easing = 'ease';
    /**
     * Add speed (in ms). Default is `200`
     */
    this.speed = 200;
    /**
     * Turn on/off the automatic incrementing behavior by setting this to false. Default is `true`
     */
    this.trickle = true;
    /**
     * Adjust how often to trickle/increment, in ms. Default is `200`
     */
    this.trickleSpeed = 200;
    /**
     * Use Custom markup. To keep the progress bar working, keep an element with class='bar' in there
     */
    this.template = '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1"></div>';
    /**
     * Show progress loader. Default `false`
     */
    this.show = false;
  }
  /**
   * Method to start showing the progress loader
   */
  async start() {
    try {
      this.show = true;
      this.progressObj.start();
    }
    catch (err) {
      console.error('Error in start method', err);
    }
  }
  /**
   * Method to end the progress. This hides the progress loader
   */
  async done() {
    try {
      this.show = false;
      this.progressObj.done();
    }
    catch (err) {
      console.error('Error in done method', err);
    }
  }
  /**
   * Increments the progress status by a random amount.
   */
  async inc() {
    try {
      this.progressObj.inc();
    }
    catch (err) {
      console.error('Error in inc method', err);
    }
  }
  /**
   * Sets the progress loader status, where `n` is a number from `0.0` to `1.0`.
   */
  async set(n) {
    try {
      this.progressObj.set(n);
    }
    catch (err) {
      console.error('Error in set method', err);
    }
  }
  showChanged(show) {
    if (show) {
      this.progressObj.start();
    }
    else {
      this.progressObj.done();
    }
  }
  disconnectedCallback() {
    this.progressObj.done();
  }
  componentWillLoad() {
    this.progressObj = progressLoaderUtil.createProgressLoaderContainer(progressLoaderUtil.getPropOptions(this));
    if (this.show)
      this.progressObj.start();
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  static get watchers() { return {
    "show": ["showChanged"]
  }; }
};

exports.fw_progress_loader = ProgressLoader;
