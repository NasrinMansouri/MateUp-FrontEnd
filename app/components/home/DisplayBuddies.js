import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import AddBuddyBtn from "./AddBuddyBtn";
import GalleryBuddies from "../buddy/GalleryBuddies";

export default function DisplayBuddies({ onPressAddBuddy, buddies, onPress }) {
  // const buddiesData = [
  //   {
  //     id: 1,
  //     name: "Jon",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 2,
  //     name: "Mary",
  //     image: require("../../../assets/person2.jpg"),
  //   },
  // ];
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <GalleryBuddies buddies={buddies} paddingLeft={6} onPress={onPress} />
      <AddBuddyBtn onPress={onPressAddBuddy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
