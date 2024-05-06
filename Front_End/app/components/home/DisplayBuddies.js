import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import AddBuddyBtn from "./AddBuddyBtn";
import GalleryBuddies from "../buddy/GalleryBuddies";

export default function DisplayBuddies({ onPressAddBuddy, buddies }) {
  // const buddies = [
  //   {
  //     id: 1,
  //     name: "John",
  //     image: require("../../../assets/person2.jpg"),
  //   },
  //   {
  //     id: 2,
  //     name: "Ray",
  //     image: require("../../../assets/person2.jpg"),
  //   },
  // ];
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <GalleryBuddies buddies={buddies} paddingLeft={6} />
      <AddBuddyBtn onPress={onPressAddBuddy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
