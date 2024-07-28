import React from 'react';
import {ImageProps, TouchableWithoutFeedback} from 'react-native';

import {useAnimatedProps, useAnimatedStyle} from 'react-native-reanimated';

import {AnimatedIcon} from '../icon';
import {useTranslation} from '@hooks';
import {AnimatedText, View} from '../core';
import {useStyles} from '@theme';

import {useThrottle} from './hook';
import {outlineButtonStyleSheet} from './styles';
import {ButtonProps} from './type';

export const OutlineButton = ({
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
  } = useStyles(outlineButtonStyleSheet);

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

  // style
  const textStyle = useAnimatedStyle(() => ({
    color: disabled
      ? color.neutral100
      : pressed.value
      ? color.primary
      : color.primary500,
  }));

  // props
  const iconProps = useAnimatedProps<ImageProps>(() => ({
    tintColor: disabled
      ? color.neutral100
      : pressed.value
      ? color.primary
      : color.primary500,
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
      <View
        // @ts-ignore
        style={[styles[size], styles.buttonColor(disabled)]}>
        {leftIcon ? (
          <AnimatedIcon animatedProps={iconProps} icon={leftIcon} />
        ) : null}
        {}
        {/* @ts-ignore */}
        <AnimatedText style={[styles[`text_${size}`], textStyle]}>
          {t18n ? t(t18n) : text}
        </AnimatedText>
        {rightIcon ? (
          <AnimatedIcon animatedProps={iconProps} icon={rightIcon} />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
