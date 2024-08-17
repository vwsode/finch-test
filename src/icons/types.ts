export type IconVariant = 'magic-wand';

export type IconSize = 20;

export type IconBaseProps = {
  /**
   * The size of the icon.
   */
  size: IconSize;
};

export type IconProps = {
  /**
   * The variant of the icon.
   */
  type: IconVariant;
  /**
   * The fill color of the icon.
   */
  fill?: string;
  /**
   * 
   */
  className?: string;
} & IconBaseProps;
