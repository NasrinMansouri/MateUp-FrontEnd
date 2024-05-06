import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import {
  GalleryAllCoaches,
  GalleryCoachesClubMembers,
} from "../../../components/coach";

const coachesClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training"],
  },
];

const coachesData = [
  {
    id: 1,
    name: "John Doee",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "aaron",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

export default function MeetTtrainer({
  onPressClubCoaches,
  onPressAllCoaches,
}) {
  return (
    <View>
      <ScrollView style={styles.container}>
        <GalleryCoachesClubMembers
          coachesClubMember={coachesClubMembersData}
          onPressClubCoaches={onPressClubCoaches}
        />
        <GalleryAllCoaches
          meetAllCoaches={coachesData}
          onPressAllCoaches={onPressAllCoaches}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
