import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

const AnimatedImage = ({ source, style }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(loopAnimation);
    };

    loopAnimation();

    return () => {
      // Clean up animation when component unmounts
      scaleValue.stopAnimation();
    };
  }, [scaleValue]);

  return (
    <Animated.Image
      style={[style, { transform: [{ scale: scaleValue }] }]}
      source={source}
    />
  );
};

export default AnimatedImage;
