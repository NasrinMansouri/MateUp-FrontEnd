// also can be use for meet  at user members

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import CardCoachClubMember from "./CardCoachClubMember";

export default function GalleryCoachesClubMembers({
  coachesClubMember,
  onPressClubCoaches,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coaches at your club</Text>
      <FlatList
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={coachesClubMember}
        keyExtractor={(coachesClubMember) => coachesClubMember.id.toString()}
        renderItem={({ item }) => (
          <CardCoachClubMember
            name={item.name}
            image={item.image}
            titles={item.titles}
            onPress={() => navigation.navigate("CoachProfile", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
  /* <GalleryMatchClubMembers coachesClubMember ={coachesClubMemberData} /> */
}

//dummy data for testing
// const coachesClubMemberData = [
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
