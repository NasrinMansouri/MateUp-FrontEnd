import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import GroupMember from "./GroupMembers";
import AppButton from "../AppButton";

export default function CardAvailableGroup({
  members,
  goal,
  date,
  year,
  start,
  end,
  spots,
}) {
  console.log(members);

  return (
    <View style={styles.container}>
      <View style={styles.memberContainer}>
        <GroupMember members={members} />
      </View>
      <View>
        <Text style={styles.goal}>{goal}</Text>
      </View>
      <View style={styles.dateContainer}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={24}
          color={colors.orangeSecondary}
        />
        <Text style={styles.text}>
          {date}, {year}
        </Text>
      </View>
      <View style={styles.clockContainer}>
        <Octicons name="clock" size={22} color={colors.orangeSecondary} />
        <Text style={styles.text}>
          {start} - {end}
        </Text>
      </View>
      <View style={styles.spotsContainer}>
        <Text style={styles.textSpots}>{spots}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Book"}
          fontSize={14}
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: colors.white,
    marginBottom: 70,
    paddingTop: 40,
  },
  memberContainer: {
    marginLeft: 16,
  },
  goal: {
    fontFamily: "montserrat-black",
    color: colors.black,
    fontSize: 16,
    textTransform: "uppercase",
    marginLeft: 16,
    marginTop: 22,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 16,
    gap: 10,
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 4,
    gap: 10,
  },
  text: {
    fontFamily: "nunitoSans-bold",
    color: colors.black,
    fontSize: 14,
    textTransform: "uppercase",
    marginLeft: 10,
  },
  spotsContainer: {
    marginTop: 16,
  },
  textSpots: {
    fontFamily: "montserrat-black",
    color: colors.orangeSecondary,
    fontSize: 14,
    textTransform: "capitalize",
    marginLeft: 16,
  },
  buttonContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
  },
});
