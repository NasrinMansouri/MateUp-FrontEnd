import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import GroupAvatar from "./GroupAvatar";
import AppButton from "../AppButton";

import BulletPointWithText from "../BulletPointWithText";

export default function CardChallengBuddiesJoined({
  image,
  challengeName,
  duration,
  beginingDate,
  endingDate,
  year,
  onPress,
  Buddies,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.imagecontainer}>
        <Image source={image} style={styles.image} />
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
        <Text style={styles.duration}>{duration}</Text>
        <View>
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={24}
            color={colors.orangeSecondary}
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
        <AppButton title="Join" width="100%" height={45} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

//to be use in screen as
{
  /* <CardChallengBuddiesJoined
image={require("./assets/person2.jpg")}
challengeName="Weekly Challenge"
duration={7}
beginingDate="2024-04-01"
endingDate="2024-04-07"
year={2024}
Buddies={[
  { id: 1, image: require("./assets/person2.jpg") },
  { id: 2, image: require("./assets/person-1.jpg") },
  { id: 3, image: require("./assets/person2.jpg") },
  { id: 4, image: require("./assets/person2.jpg") },
]}
/> */
}
