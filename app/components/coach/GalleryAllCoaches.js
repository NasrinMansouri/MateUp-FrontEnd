import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import CardAllCoaches from "./CardAllCoaches";
import colors from "../../config/colors";

export default function GalleryAllCoaches({
  meetAllCoaches,
  onPressAllCoaches,
  onPress,
  // loading,
}) {
  const navigation = useNavigation();

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color={colors.orangeSecondary} />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meet All Coaches</Text>
      <FlatList
        data={meetAllCoaches}
        initialNumToRender={meetAllCoaches.length}
        keyExtractor={(trainers) => trainers.id.toString()}
        renderItem={({ item }) => (
          <CardAllCoaches
            name={item.user.name}
            image={item.user.profile_image_url}
            location={item.home_club_address}
            titles={item.expertise}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 30,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
});

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
