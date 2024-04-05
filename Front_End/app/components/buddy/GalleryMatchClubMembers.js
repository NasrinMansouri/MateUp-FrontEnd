// also can be use for meet trainer at user members

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CardMatchClubMembers from "./CardMatchClubMembers";

export default function GalleryMatchClubMembers({ UserClubMembers }) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={UserClubMembers}
      keyExtractor={(UserClubMembers) => UserClubMembers.id.toString()}
      renderItem={({ item }) => (
        <CardMatchClubMembers
          name={item.name}
          image={item.image}
          titles={item.titles}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   marginLeft: 16,
  // },
});

//to be use in screen as:
{
  /* <GalleryMatchClubMembers UserClubMembers ={UserClubMembersData} /> */
}

//dummy data for testing
// const UserClubMembersData = [
//   {
//     id: 1,
//     name: "John Doeeeeeeeeeeeeeeeeee",
//     image: require("./assets/person-1.jpg"),
//     titles: ["strength training", "running"],
//   },
//   {
//     id: 2,
//     name: "ray pather ",
//     image: require("./assets/person-1.jpg"),
//     titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//   },
//   {
//     id: 3,
//     name: "ray pather ",
//     image: require("./assets/person-1.jpg"),
//     titles: ["strength training", "running", "swimming", "yoga", "boxing"],
//   },
//   {
//     id: 3,
//     name: "ray pather ",
//     image: require("./assets/person-1.jpg"),
//     titles: ["strength training"],
//   },
// ];
