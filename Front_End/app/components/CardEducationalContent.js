import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import colors from "../config/colors";

export default function CardEducationalContent({
  onPress,
  image,
  title,
  subttle,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground style={styles.container} source={image}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subttle}>{subttle}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: 416,
  },
  textContainer: {
    paddingBottom: 50,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "nunitoSans-bold",
    color: colors.white,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  subttle: {
    fontSize: 20,
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    textTransform: "uppercase",
  },
});

//to be used in screen as:
{
  /* <CardEducationalContent
image={require("./assets/image/educational-1.jpg")}
title="workout buddy"
subttle="Your buddy will thank you for it"
/> */
}
