import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import CardMatchBasedWorkout from "./CardMatchBasedWorkout";

export default function GalleryConnectAll({ connectAllMembers, onPress }) {
  const navigation = useNavigation();
  const location = "Raghenoplein 21 bis, 2800 Mechelen";
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>connect with all members</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={connectAllMembers}
        keyExtractor={(Members) => Members.id.toString()}
        renderItem={({ item }) => (
          <CardMatchBasedWorkout
            name={item.user.name}
            image={item.user.profile_image_url}
            location={location}
            titles={item.workout_types}
            // onPress={() => navigation.navigate("MemberProfile", item)}
            // onPress={onPress}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 96,
    marginBottom: 200,
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
  /* <GalleryMatchBasedWorkout connectAllMembers={matchClubMembersData} /> */
}

//dummy data for testing
// const connectAllMembersData = [
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
