import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import AddBuddyBtn from "./AddBuddyBtn";
import GalleryBuddies from "../buddy/GalleryBuddies";

export default function DisplayBuddies({
  onPressAddBuddy,
  buddies,
  onPressProfile,
}) {
  const buddiesData = [
    {
      id: 1,
      name: "Jon",
      image: require("../../../assets/person-1.jpg"),
    },
    {
      id: 2,
      name: "Mary",
      image: require("../../../assets/person2.jpg"),
    },
  ];
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <GalleryBuddies
        buddies={buddiesData}
        paddingLeft={6}
        onPress={onPressProfile}
      />
      <AddBuddyBtn onPress={onPressAddBuddy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
