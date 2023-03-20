export declare class Avatar {
  image: string;
  alt: string;
  initials: string;
  shape: 'circle' | 'square' | 'rounded';
  name: string;
  size: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
  mode: 'dark' | 'light' | 'error';
  /**
   * Function to get the initials to display inside the avatar
   * @returns initials from either initials prop or from name prop
   */
  getInitials(): string;
  renderAltIcon(): any;
  render(): any;
}
