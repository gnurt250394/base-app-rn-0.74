import {ImageResizeMode, ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {ImagesTypes} from '@assets/images';

export interface LocalImageProps {
  /**
   * Overwrite image style
   * @default undefined
   */
  style?: ImageStyle;

  /**
   * Overwrite wrap image style
   * @default undefined
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Source image(local)
   * @default undefined
   */
  source: ImagesTypes;

  /**
   * Custom resizeMode
   * @default contain
   */
  resizeMode?: ImageResizeMode;
}
