import { StyleSheet, Text, View, Animated, TextInput } from "react-native";
import React from "react";
import Svg, { G, Circle } from "react-native-svg";

import colors from "../../config/colors";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function DonutChart({
  percentage = 10,
  radius = 150,
  strokeWidth = 12,
  duration = 500,
  color = "#FC6423",
  colorOuterStroke = colors.green,
  delay = 0,
  textColor = colors.white,
  max = 100,
}) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);

    animatedValue.addListener((v) => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        const valueText = Math.round(v.value);
        const displayText = valueText !== 0 ? `${valueText}%` : "0";
        inputRef.current.setNativeProps({
          text: displayText,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy={"50%"}
            stroke={color}
            r={radius - strokeWidth / 2}
            strokeWidth={strokeWidth}
            fill={colors.orangeSecondary}
            strokeOpacity={0}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy={"50%"}
            stroke={colorOuterStroke}
            r={radius + strokeWidth / 2}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TextInput
        ref={inputRef}
        editable={false}
        defaultValue={`${Math.round(percentage)}%`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 4, color: textColor ?? color },
          { fontWeight: "900", textAlign: "center" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View, Animated, TextInput } from "react-native";
// import React from "react";
// import Svg, { G, Circle } from "react-native-svg";

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);
// const AnimatedInput = Animated.createAnimatedComponent(TextInput);

// export default function DonutChart({
//   percentage = 65,
//   radius = 100,
//   strokeWidth = 12,
//   duration = 500,
//   color = "#FC6423",
//   delay = 0,
//   textColor,
//   max = 100,
// }) {
//   const animatedValue = React.useRef(new Animated.Value(0)).current;
//   const circleRef = React.useRef();
//   const inputRef = React.useRef();
//   const halfCircle = radius + strokeWidth;
//   const circleCircumference = 2 * Math.PI * radius;
//   const animation = (toValue) => {
//     return Animated.timing(animatedValue, {
//       toValue,
//       duration,
//       delay,
//       useNativeDriver: true,
//     }).start();
//   };

//   React.useEffect(() => {
//     animation(percentage);

//     animatedValue.addListener((v) => {
//       if (circleRef?.current) {
//         const maxPerc = (100 * v.value) / max;
//         const strokeDashoffset =
//           circleCircumference - (circleCircumference * maxPerc) / 100;
//         circleRef.current.setNativeProps({
//           strokeDashoffset,
//         });
//       }

//       if (inputRef?.current) {
//         inputRef.current.setNativeProps({
//           text: `${Math.round(v.value)}`,
//         });
//       }
//     });

//     return () => {
//       animatedValue.removeAllListeners();
//     };
//   }, [max, percentage]);
//   return (
//     <View>
//       <Svg
//         width={radius * 2}
//         height={radius * 2}
//         viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
//       >
//         <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
//           <Circle
//             cx="50%"
//             cy={"50%"}
//             stroke={color}
//             r={radius}
//             strokeWidth={strokeWidth}
//             fill="transparent" //color inside the circle
//             strokeOpacity={0.2}
//           />
//           <AnimatedCircle
//             ref={circleRef}
//             cx="50%"
//             cy={"50%"}
//             stroke={color}
//             r={radius}
//             strokeWidth={strokeWidth}
//             fill="transparent" //color inside the circle
//             strokeDasharray={circleCircumference}
//             strokeDashoffset={circleCircumference}
//             strokeLinecap="round"
//           />
//         </G>
//       </Svg>
//       <AnimatedInput
//         ref={inputRef}
//         editable={false}
//         underlineColorAndroid={"transparent"}
//         defaultValue="0"
//         style={[
//           StyleSheet.absoluteFillObject,
//           { fontSize: radius / 2, color: textColor ?? color },
//           { fontWeight: "900", textAlign: "center" },
//         ]}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
