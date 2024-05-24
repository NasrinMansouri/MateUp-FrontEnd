// import React, { useEffect, useRef } from "react";
// import { Animated, Easing, StyleSheet } from "react-native";

// const AnimatedImage = ({ source, style }) => {
//   const scaleValue = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const loopAnimation = () => {
//       Animated.sequence([
//         Animated.timing(scaleValue, {
//           toValue: 1.5,
//           duration: 1000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleValue, {
//           toValue: 1,
//           duration: 1000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//       ]).start(loopAnimation);
//     };

//     loopAnimation();

//     return () => {
//       // Clean up animation when component unmounts
//       scaleValue.stopAnimation();
//     };
//   }, [scaleValue]);

//   return (
//     <Animated.Image
//       style={[style, { transform: [{ scale: scaleValue }] }]}
//       source={source}
//     />
//   );
// };

// export default AnimatedImage;

// import React, { useEffect, useRef, useState } from "react";
// import { Animated, Easing, StyleSheet } from "react-native";

// const AnimatedImage = ({ images, style }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const opacityValue = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const loopAnimation = () => {
//       Animated.parallel([
//         // Scaling and fading animation for current image
//         Animated.timing(scaleValue, {
//           toValue: 1.5,
//           duration: 1500,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacityValue, {
//           toValue: 0,
//           duration: 1000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         // Reset scale and opacity values for next image
//         scaleValue.setValue(1);
//         opacityValue.setValue(1);
//       });
//     };

//     loopAnimation();

//     return () => {
//       scaleValue.stopAnimation();
//       opacityValue.stopAnimation();
//     };
//   }, [scaleValue, opacityValue, images.length]);

//   return (
//     <Animated.Image
//       style={[
//         style,
//         {
//           transform: [{ scale: scaleValue }],
//           opacity: opacityValue,
//         },
//       ]}
//       source={images[currentImageIndex]}
//     />
//   );
// };

// export default AnimatedImage;

// import React, { useEffect, useRef, useState } from "react";
// import { Animated, Easing, StyleSheet } from "react-native";

// const AnimatedImage = ({ images, style }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const opacityValue = useRef(new Animated.Value(1)).current; // Add opacity value

//   useEffect(() => {
//     const loopAnimation = () => {
//       Animated.sequence([
//         // Scaling animation
//         Animated.timing(scaleValue, {
//           toValue: 1.5,
//           duration: 1500,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleValue, {
//           toValue: 1,
//           duration: 1500,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         // Opacity animation
//         Animated.timing(opacityValue, {
//           toValue: 0, // Fade out
//           duration: 500, // Duration of 500 milliseconds
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacityValue, {
//           toValue: 1, // Fade in
//           duration: 500, // Duration of 500 milliseconds
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         loopAnimation();
//       });
//     };

//     loopAnimation();

//     return () => {
//       scaleValue.stopAnimation();
//       opacityValue.stopAnimation();
//     };
//   }, [scaleValue, opacityValue, images.length]);

//   return (
//     <Animated.Image
//       style={[
//         style,
//         {
//           transform: [{ scale: scaleValue }], // Apply scaling transformation
//           opacity: opacityValue, // Apply opacity
//         },
//       ]}
//       source={images[currentImageIndex]}
//     />
//   );
// };

// export default AnimatedImage;

import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

const AnimatedImage = ({ images, style }) => {
  // state to keep track of current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // reference to the animated.value for scaling the image
  const scaleValue = useRef(new Animated.Value(1)).current;

  // useEffect hook to start the looping animation,
  // it resets the animation whenever the image array length or the scaleValue changes.
  useEffect(() => {
    const loopAnimation = () => {
      // sequence of animations
      Animated.sequence([
        // Scaling animation
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // back to original size
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true, // useNaviveDriver for better performance
        }),
      ]).start(() => {
        // Change the image when the animation ends
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        loopAnimation();
      });
    };

    loopAnimation();

    return () => {
      // stop the animation when the component unmounts
      scaleValue.stopAnimation();
    };
  }, [scaleValue, images.length]);

  return (
    // Animated.Image component with the current source and transform style
    <Animated.Image
      style={[style, { transform: [{ scale: scaleValue }] }]}
      source={images[currentImageIndex]}
    />
  );
};

export default AnimatedImage;
