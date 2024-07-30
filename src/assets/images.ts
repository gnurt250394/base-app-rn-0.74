/**
 * @author GNURT
 * @flow
 */

const images = {
  appicon_dev: require('@images/appicon-dev.png'),
  appicon: require('@images/appicon.png'),
  bg: require('@images/bg.png'),
  chevron_left: require('@images/chevron_left.png'),
  chevron_right: require('@images/chevron_right.png'),
  default: require('@images/default.png'),
  done: require('@images/done.png'),
  splash: require('@images/splash.png'),
};
export default images;

export type ImagesTypes = keyof typeof images;