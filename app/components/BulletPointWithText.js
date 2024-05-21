import React from "react";
import { View, Text } from "react-native";

const BulletPointWithText = ({
  bulletColor,
  width,
  height,
  marginRight,
  fontFamily,
  textColor,
  title,
  fontSize,
  textTransform,
  marginLeft = 0,
}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: width,
          height: height,
          borderRadius: width / 2,
          backgroundColor: bulletColor,
          marginRight: marginRight,
          marginLeft: marginLeft,
        }}
      />
      <Text
        style={{
          fontSize: fontSize,
          textTransform: textTransform,
          color: textColor,
          fontFamily: fontFamily,
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  );
};

export default BulletPointWithText;

// //to be used in screen as:

// <BulletPointWithText
// bulletColor={colors.orangePrimary}
// width={5}
// height={5}
// borderRadius={5 / 2}
// marginRight={4}
// title="spinning"
// textColor={colors.white}
// fontFamily="nunitoSans-bold"
// textTransform={"uppercase"}
// fontSize={16}
// />
