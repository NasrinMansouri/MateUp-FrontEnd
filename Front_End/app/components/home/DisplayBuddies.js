import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import GalleryBuddies from "../buddy/GalleryBuddies";
import AddBuddyBtn from "./AddBuddyBtn";

export default function DisplayBuddies() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <GalleryBuddies />
      <AddBuddyBtn onPress={() => console.log("add buddy btn pressed")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
