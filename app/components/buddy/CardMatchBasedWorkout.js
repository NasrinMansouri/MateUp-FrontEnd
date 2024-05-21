import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";
import LocationWithIcon from "../LocationWithIcon";
import ListBulletPointWithText from "../ListBulletPointWithText";

export default function CardMatchBasedWorkout({
  onPress,
  image,
  name,
  location,
  titles,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.profile}>
        <CardProfile
          //   backgroundColor={colors.blackBc}
          flexDirection={"row"}
          cardWidth={140}
          image={image}
          imageHeight={49}
          imageWidth={49}
          imageRadius={49 / 2}
          name={name}
          fontSize={16}
          textTransform={"capitalize"}
          fontFamily={"nunitoSans-bold"}
          textColor={colors.black}
          alignItems={"center"}
          justifyContent={"flex-start"}
        />
      </View>
      <View style={styles.location}>
        <LocationWithIcon
          color={colors.black}
          location={location}
          fontSize={13}
        />
      </View>
      <View style={styles.lists}>
        <ListBulletPointWithText titles={titles} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 225,
    height: 186,
    paddingTop: 14,
    paddingRight: 16,
    borderRadius: 4,
    marginRight: 6,
  },
  profile: {
    marginBottom: 30,
    paddingLeft: 14,
  },
  location: {
    marginBottom: 10,
    paddingLeft: 9,
    paddingRight: 16,
  },
  lists: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

// to be used in screen as:
{
  /* <CardMatchBasedWorkout
image={require("./assets/person-1.jpg")}
name="ray patherrrrrrrrrrrrrrrrrr"
location="los angelesssssssssssssssssssssssss"
titles={[
  "strength traininggggggg",
  "running",
  "swimming",
  "yoga",
  "boxing",
]}
/> */
}
