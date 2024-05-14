import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";
import ListBulletPointWithText from "../ListBulletPointWithText";

export default function CardMatchClubMembers({
  name,
  image,
  titles,
  onPress,
  onPressProfile,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}
    >
      <View style={styles.profile}>
        <CardProfile
          onPressProfile={onPressProfile}
          name={name}
          image={image}
          imageWidth={116}
          imageHeight={116}
          imageRadius={116 / 2}
          cardWidth={142}
          cardHeight={140}
          // backgroundColor={colors.blackBc}
          flexDirection={"column"}
          fontFamily={"nunitoSans-regular"}
          fontSize={16}
          textTransform={"capitalize"}
          textColor={colors.white}
        />
      </View>
      <ListBulletPointWithText titles={titles} textColor={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 220,
    marginRight: 8,
    backgroundColor: colors.blackBc,
    paddingTop: 6,
    paddingBottom: 6,
  },
  profile: {
    marginBottom: 18,
  },
});

//to be used in screen as:
{
  /* <CardMatchClubMembers
  name={"Jen"}
  image={require("./assets/person2.jpg")}
  titles={["strength training", "running", "swimming", "yoga", "boxing"]}
/>; */
}
