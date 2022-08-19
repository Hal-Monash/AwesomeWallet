import React from "react";
import * as Animatable from "react-native-animatable";

const TransitionText = ({ animationStyle, ...rest }) => {
  return (
    <Animatable.Text
      animation={animationStyle}
      duration={100}
      delay={1}
      easing="ease-in"
      useNativeDriver
      {...rest}
    />
  );
};

export default TransitionText;
