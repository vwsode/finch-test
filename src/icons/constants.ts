import { MagicWand } from './MagicWand';
import { IconBaseProps, IconVariant } from './types';

export const iconComponentsMap: Record<IconVariant, React.FC<IconBaseProps>> = {
  'magic-wand': MagicWand,
};
