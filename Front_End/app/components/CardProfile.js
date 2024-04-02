// profile image with text

//can be horizontal or vertical
//image size can be changed
//can have border
//image size can be changed

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CardProfile({
  backgroundColor,
  image,
  name,
  imageWidth,
  imageHeight,
  imageRadius,
  cardWidth,
  cardHeight,
  flexDirection,
  cardRadius,
  cardBorderColor,
  cardBorderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ backgroundColor: backgroundColor }}
    >
      <View
        style={[
          styles.card,
          {
            width: cardWidth,
            height: cardHeight,
            flexDirection: flexDirection,
            borderWidth: cardBorderWidth,
            borderColor: cardBorderColor,
            borderRadius: cardRadius,
          },
        ]}
      >
        <Image
          source={image}
          style={[
            styles.image,
            {
              width: imageWidth,
              height: imageHeight,
              borderRadius: imageRadius,
            },
          ]}
        />

        <Text
          style={[
            styles.text,
            {
              fontFamily: fontFamily,
              fontSize: fontSize,
              fontWeight: fontWeight,
            },
          ]}
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginRight: 4,
  },
  image: {
    margin: 10,
  },
  text: {
    color: colors.white,
    textTransform: " capitalize",
    fontFamily: "nunitoSans-regular",
    marginBottom: 10,
    fontSize: 14,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default CardProfile;

//to be used in screen as:
{
  /* <CardProfile
onPress={() => console.log("tapped")}
flexDirection={"column"}
cardWidth={97}
image={require("./assets/person-1.jpg")}
imageHeight={77}
imageWidth={77}
borderRadius={77 / 2}
name="Jane Doe"
fontSize={14}
/> */
}
