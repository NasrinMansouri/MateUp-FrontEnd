//home page

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import colors from "../config/colors";
import CradProfile from "./CardProfile";
import BulletPointWithText from "./BulletPointWithText";
import AppButton from "./AppButton";

export default function CardBuddiesWorkout({
  image,
  name,
  workout,
  day,
  date,
  begin,
  end,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <CradProfile
        // onPress={() => console.log("tapped")}
        backgroundColor={colors.white}
        flexDirection={"row"}
        cardWidth={160}
        cardHeight={49}
        image={image}
        imageHeight={49}
        imageWidth={49}
        imageRadius={49 / 2}
        name={name}
        fontSize={16}
        justifyContent={" flex-start"}
        textTransform={"capitalize"}
      />
      <BulletPointWithText
        bulletColor={colors.orangePrimary}
        width={5}
        height={5}
        borderRadius={5 / 2}
        marginRight={4}
        title={workout}
        textColor={colors.black}
        fontFamily="nunitoSans-bold"
        textTransform={"uppercase"}
        fontSize={16}
      />
      <View>
        <Text style={styles.text}>
          {" "}
          {day}
          {","} {date}{" "}
        </Text>
        <Text style={styles.text}>
          {" "}
          From {begin} to {end}{" "}
        </Text>
      </View>
      <AppButton title={"Join"} width={217} height={32} onPress={onPress} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 225,
    height: 215,
    padding: 4,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    fontFamily: "nunitoSans-bold",
    fontSize: 14,
    color: colors.gray,
  },
});

//to be used in screen as:

// <CardBuddiesWorkout
// image={require("./assets/person-1.jpg")}
// name="John Doeeeeeeeeeeeeeeeeee"
// workout="Running"
// day="Monday"
// date="April 4"
// begin="8:00 AM"
// end="9:00 AM"
// onPress={() => console.log("tapped")}
// />
