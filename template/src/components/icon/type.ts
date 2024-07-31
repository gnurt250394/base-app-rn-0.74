import {Colors} from '@theme';
import {ImagesTypes} from '@assets/images';

export interface IconProps {
  /**
   * Size of Icon
   * @default 24
   */
  size?: number;

  /**
   * Overwrite tint color with theme
   */
  colorTheme?: Colors;

  /**
   * Icon type
   * @default undefined
   */
  icon: ImagesTypes;
}
