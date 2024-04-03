import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CardMatchClubMembers from "./CardMatchClubMembers";

export default function GalleryMatchClubMembers({ meetClubMembers }) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={meetClubMembers}
      keyExtractor={(meetClubMembers) => meetClubMembers.id.toString()}
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

const styles = StyleSheet.create({});

//to be use in screen as:
{
  /* <GalleryMatchClubMembers meetClubMembers={meetClubMembersData} /> */
}

//dummy data for testing
// const meetClubMembersData = [
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
