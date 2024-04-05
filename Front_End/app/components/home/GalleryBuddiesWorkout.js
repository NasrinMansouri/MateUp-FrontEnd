//horizontal scrollable list of buddies next
//workout planning in homrpage

import { FlatList, StyleSheet } from "react-native";
import React from "react";

import CardBuddiesWorkout from "./CardBuddiesWorkout";

export default function GalleryBuddiesWorkout({ buddiesWorkout }) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={buddiesWorkout}
      keyExtractor={(buddiesWorkout) => buddiesWorkout.id.toString()}
      renderItem={({ item }) => (
        <CardBuddiesWorkout
          onPress={() => console.log("my buddies workout", item)}
          image={item.image}
          name={item.name}
          workout={item.workout}
          day={item.day}
          date={item.date}
          begin={item.begin}
          end={item.end}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

// to be used in screen as:

// const buddiesWorkoutData = [
//     {
//       id: 1,
//       name: "John Doeeeeeeeeeeeeeeeeee",
//       image: require("./assets/person-1.jpg"),
//       workout: "Running",
//       day: "Monday",
//       date: "April 4",
//       begin: "8:00 AM",
//       end: "9:00 AM",
//     },
//     {
//       id: 2,
//       name: "ray pather ",
//       image: require("./assets/person-1.jpg"),
//       workout: "upper body",
//       day: "Sunday",
//       date: "Dec 4",
//       begin: "8:00 AM",
//       end: "9:00 AM",
//     },
//     {
//       id: 3,
//       name: "ray pather ",
//       image: require("./assets/person-1.jpg"),
//       workout: "jugging",
//       day: "Sunday",
//       date: "Dec 4",
//       begin: "8:00 AM",
//       end: "9:00 AM",
//     },
//   ];

{
  /* <GalleryBuddiesWorkout buddiesWorkout={buddiesWorkoutData} /> */
}
