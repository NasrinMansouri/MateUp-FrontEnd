// horizontal scrollable list of buddies
// used on top of home page

//name is truncated if too long

import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CardProfile from "./CardProfile";
import colors from "../config/colors";

function GalleryBuddies({ buddies }) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={buddies}
      keyExtractor={(buddies) => buddies.id.toString()}
      renderItem={({ item }) => (
        <CardProfile
          onPress={() => console.log("my buddies", item)}
          name={
            item.name.length > 13 ? item.name.slice(0, 10) + "..." : item.name
          }
          image={item.image}
          flexDirection={"column"}
          cardWidth={97}
          cardHeight={107}
          imageHeight={77}
          imageWidth={77}
          borderRadius={77 / 2}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
  },
});
export default GalleryBuddies;

// to be used in screen as:
//dummy data for testing
// const buddiesData = [
//   {
//     id: 1,
//     name: "Red ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 2,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 3,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 4,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 5,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
// ];

//to be used in screen as:
{
  /* <GalleryBuddies buddies={buddiesData} /> */
}
