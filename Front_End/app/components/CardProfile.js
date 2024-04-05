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
  textColor,
  onPress,
  alignItems = "center",
  justifyContent = "center",
  textTransform = "capitalize",
  marginRight = 4,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
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
            alignItems: alignItems,
            justifyContent: justifyContent,
            marginRight: marginRight,
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

        {name && (
          <Text
            style={[
              styles.text,
              {
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontWeight,
                color: textColor,
                textTransform: textTransform,
              },
            ]}
            numberOfLines={1}
          >
            {name}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    // alignItems: "center",
    // justifyContent: "center",
    // marginRight: 4,
  },

  text: {
    // textTransform: " capitalize",
    fontFamily: "nunitoSans-regular",
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default CardProfile;

//to be used in screen as:
{
  /* <CardProfile
onPress={() => console.log("tapped")}
backgroundColor={colors.blackBc}
flexDirection={"column"}
cardWidth={97}
image={require("./assets/person-1.jpg")}
imageHeight={77}
imageWidth={77}
imageRadius={77 / 2}
name="Jane Doe"
fontSize={14}
/> */
}
