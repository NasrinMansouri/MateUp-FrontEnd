import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import colors from "../../config/colors";
import CardMatchBasedWorkout from "./CardMatchBasedWorkout";

export default function GalleryMatchBasedWorkout({ matchMemberWorkout }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>matches based on your workour</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
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

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 96,
  },
  container: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
});

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
