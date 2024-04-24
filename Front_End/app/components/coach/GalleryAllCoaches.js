import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import CardAllCoaches from "./CardAllCoaches";

export default function GalleryAllCoaches({ meetAllCoaches }) {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={meetAllCoaches}
        keyExtractor={(meetAllCoaches) => meetAllCoaches.id.toString()}
        renderItem={({ item }) => (
          <CardAllCoaches
            name={item.name}
            image={item.image}
            location={item.location}
            titles={item.titles}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

// to be use in screen as:
{
  /* <GalleryAllCoaches meetAllCoaches={coachesData} /> */
}

// dummy data for testing
// const coachesData = [
//   {
//     id: 1,
//     name: "John Doee",
//     image: require("./assets/person-1.jpg"),
//     location: "los angeles street" + " 123",
//     titles: ["strength training", "running"],
//   },
//   {
//     id: 2,
//     name: "ray pather ",
//     image: require("./assets/person2.jpg"),
//     location: "los angeles street" + " 123",
//     titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//   },
//   {
//     id: 3,
//     name: "aaron",
//     image: require("./assets/person-1.jpg"),
//     location: "los angeles street" + " 123",
//     titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//   },
//   {
//     id: 4,
//     name: "ray pather ",
//     image: require("./assets/person-1.jpg"),
//     location: "los angeles street" + " 123",
//     titles: ["strength training"],
//   },
// ];
