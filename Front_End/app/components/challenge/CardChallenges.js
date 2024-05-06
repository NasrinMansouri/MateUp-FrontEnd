import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import GroupAvatar from "./GroupAvatar";
import AppButton from "../AppButton";
import BulletPointWithText from "../BulletPointWithText";

export default function CardChallenges({
  challengeImage,
  challengeName,
  duration,
  beginingDate,
  endingDate,
  year,
  onPressCard,
  onPressBtn,
  Buddies,
  borderWidth = 1,
  cardWidth = 283,
  cardHeight = 333,
  marginRight = 10,
  marginBottom = 0,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth: borderWidth,
          width: cardWidth,
          height: cardHeight,
          marginRight: marginRight,
          marginBottom: marginBottom,
        },
      ]}
      activeOpacity={0.9}
      onPress={onPressCard}
    >
      <View style={styles.imagecontainer}>
        <Image source={challengeImage} style={styles.image} />
      </View>

      <View style={styles.challengeNameContainer}>
        <BulletPointWithText
          title={challengeName}
          bulletColor={colors.orangePrimary}
          width={5}
          height={5}
          borderRadius={5 / 2}
          marginRight={4}
          textColor={colors.white}
          fontFamily="nunitoSans-bold"
          textTransform={"uppercase"}
          fontSize={16}
        />
      </View>
      <View style={styles.challengeBased}>
        <Text style={styles.text}>{duration}</Text>
        <View style={styles.dateIconContainer}>
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={24}
            color={colors.orangePrimary}
          />
          <Text style={styles.date}>
            {beginingDate} TO {endingDate}, {year}
          </Text>
        </View>
      </View>

      {/* conditionally render group avatar, if there is no data for buddies it will not render */}
      {Buddies && Buddies.length > 0 && (
        <View style={styles.groupAvatarContainer}>
          <GroupAvatar buddies={Buddies} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <AppButton title="Join" width="100%" height={45} onPress={onPressBtn} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 283,
    // height: 332,
    borderRadius: 4,
    // borderWidth: 1,
    borderColor: colors.black,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 22,
    justifyContent: "space-between",
  },
  imagecontainer: {
    alignItems: "center",
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
  },
  challengeNameContainer: {
    paddingLeft: 4,
    // marginBottom: 20,
  },
  text: {
    fontFamily: "montserrat-black",
    fontSize: 12,
    color: colors.orangePrimary,
    marginBottom: 6,
    paddingLeft: 4,
  },
  dateIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  date: {
    fontFamily: "montserrat-black",
    fontSize: 12,
    color: colors.grayLight50,
  },
});

//to be use in screen as
{
  /* <CardChallenges
image={require("./assets/person2.jpg")}
challengeName="Weekly Challenge"
duration="7 Hours"
beginingDate="AUG 3"
endingDate="SEP 3"
year={2024}
Buddies={[
  { id: 1, image: require("./assets/person2.jpg") },
  { id: 2, image: require("./assets/person-1.jpg") },
  { id: 3, image: require("./assets/person2.jpg") },
  { id: 4, image: require("./assets/person2.jpg") },
]}
/> */
}

// //without avatar group and for recomend all challenge
// <CardChallengBuddiesJoined
// image={require("./assets/person2.jpg")}
// challengeName="Weekly Challenge"
// duration="7 Hours"
// beginingDate="AUG 3"
// endingDate="SEP 3"
// year={2024}
// borderWidth={0}
// cardHeight={284}
// cardWidth="100%"
// />
