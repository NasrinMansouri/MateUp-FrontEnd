// also can be use for meet trainer at user members

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import CardMatchClubMembers from "./CardMatchClubMembers";

export default function GalleryMatchClubMembers({ UserClubMembers }) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>meet your club members</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={UserClubMembers}
        keyExtractor={(Members) => Members.id.toString()}
        renderItem={({ item }) => (
          <CardMatchClubMembers
            name={item.name}
            image={item.image}
            titles={item.titles}
            onPress={() => navigation.navigate("MemberProfile", item)}
            onPressProfile={() => navigation.navigate("MemberProfile", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    paddingTop: 16,

    paddingLeft: 16,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 36,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
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
