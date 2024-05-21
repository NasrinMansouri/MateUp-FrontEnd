import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import BulletPointWithText from "../BulletPointWithText";
import GroupAvatar from "../challenge/GroupAvatar";

export default function CardMySession({
  imageTrainer,
  trainerName,
  sessionGoal,
  date,
  start,
  end,
  members,
}) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            resizeMode="cover"
            style={styles.imageTrainer}
            source={imageTrainer}
          />
        </View>
        <Text style={styles.trainerName}>{trainerName}</Text>
        <View style={styles.goalContainer}>
          <BulletPointWithText
            bulletColor={colors.orangePrimary}
            width={5}
            height={5}
            borderRadius={5 / 2}
            marginRight={4}
            title={sessionGoal}
            textColor={colors.white}
            fontFamily="nunitoSans-bold"
            textTransform={"uppercase"}
            fontSize={16}
          />
        </View>
        <View>
          <View style={styles.dateContainer}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={24}
              color={colors.orangeSecondary}
            />
            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.clockContainer}>
            <Octicons name="clock" size={22} color={colors.orangeSecondary} />
            <Text style={styles.text}>
              {start} - {end}
            </Text>
          </View>
        </View>
        <GroupAvatar buddies={members} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    marginRight: 16,
    marginLeft: 16,
    // borderWidth: 1,
    // borderRadius: 4,
    // borderColor: colors.green,
    padding: 10,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    height: 200,
  },
  imageTrainer: {
    width: 100,
    height: 100,
    // resizeMode: "contain",
    // borderRadius: 78 / 2,
  },
  trainerName: {
    fontFamily: "montserrat-black",
    fontSize: 20,
    color: colors.white,
  },
  goalContainer: {
    marginTop: 30,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
  },
});

// const sessionMembersData = [
//   {
//     id: 1,
//     image: require("./assets/person3.jpg"),
//   },
//   {
//     id: 2,
//     image: require("./assets/person4.jpg"),
//   },
// ];

{
  /* <CardMySession
          imageTrainer={require("./assets/person2.jpg")}
          sessionGoal={"Get Strong and get toned"}
          date={"Aug 3"}
          start={"5 PM"}
          end={"7 PM"}
          sessionMembers={sessionMembersData}
        /> */
}
