import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import {useAnimatedStyle} from 'react-native-reanimated';

import {Icon} from '../icon';
import {useTranslation} from '@hooks';
import {AnimatedView, Text} from '../core';
import {Colors, useStyles} from '@theme';

import {useThrottle} from './hook';
import {secondaryButtonStyleSheet} from './styles';
import {ButtonProps} from './type';

export const SecondaryButton = ({
  t18n,
  text,
  throttleMs,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  leftIcon,
  rightIcon,
  size = 'normal',
  disabled = false,
  ...rest
}: ButtonProps) => {
  // state
  const {
    styles,
    theme: {color},
  } = useStyles(secondaryButtonStyleSheet);

  const t = useTranslation();

  const [
    ,
    handlePress,
    handleLongPress,
    handlePressIn,
    handlePressOut,
    pressed,
  ] = useThrottle({
    throttleMs,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
  });

  // func
  const iconColor: Colors = disabled ? 'neutral200' : 'primary500';

  // style
  const containerStyle = useAnimatedStyle(() => ({
    backgroundColor: disabled
      ? color.neutral100
      : pressed.value
      ? color.primary100
      : color.primary50,
  }));

  // render
  return (
    <TouchableWithoutFeedback
      {...rest}
      disabled={disabled}
      onLongPress={handleLongPress}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <AnimatedView
        // @ts-ignore
        style={[styles[size], containerStyle]}>
        {leftIcon ? <Icon colorTheme={iconColor} icon={leftIcon} /> : null}
        {}
        {/* @ts-ignore */}
        <Text style={[styles[`text_${size}`], styles.textColor(disabled)]}>
          {t18n ? t(t18n) : text}
        </Text>
        {rightIcon ? <Icon colorTheme={iconColor} icon={rightIcon} /> : null}
      </AnimatedView>
    </TouchableWithoutFeedback>
  );
};
