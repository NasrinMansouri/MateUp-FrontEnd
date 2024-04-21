import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardMatchBasedWorkout from "./CardMatchBasedWorkout";
import { FlatList } from "react-native";

export default function GalleryMatchBasedWorkout({ matchMemberWorkout }) {
  return (
    <View>
      <FlatList
        style={styles.container}
        horizontal
        data={matchMemberWorkout}
        keyExtractor={(matchMemberWorkout) => matchMemberWorkout.id.toString()}
        renderItem={({ item }) => (
          <CardMatchBasedWorkout
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

//to be use in screen as:
{
  /* <GalleryMatchBasedWorkout matchMemberWorkout={matchClubMembersData} /> */
}

//dummy data for testing
// const matchClubMembersData = [
//     {
//       id: 1,
//       name: "John Doeeeeeeeeeeeeeeeeee",
//       image: require("./assets/person-1.jpg"),
//       location: "los angeles street" + " 123",
//       titles: ["strength training", "running"],
//     },
//     {
//       id: 2,
//       name: "ray pather ",
//       image: require("./assets/person-1.jpg"),
//       location: "los angeles street" + " 123",
//       titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//     },
//     {
//       id: 3,
//       name: "ray pather ",
//       image: require("./assets/person-1.jpg"),
//       location: "los angeles street" + " 123",
//       titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//     },
//     {
//       id: 4,
//       name: "ray pather ",
//       image: require("./assets/person-1.jpg"),
//       location: "los angeles street" + " 123",
//       titles: ["strength training"],
//     },
//   ];
