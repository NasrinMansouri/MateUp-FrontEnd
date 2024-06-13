//horizontal scrollable list of buddies next
//workout planning in homrpage

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import CardBuddiesWorkout from "./CardBuddiesWorkout";
import colors from "../../config/colors";

export default function GalleryBuddiesWorkout({ buddiesWorkout }) {
  const buddiesWorkoutData = [
    {
      id: 1,
      name: "John Kane",
      image: require("../../../assets/person-1.jpg"),
      workout: "Running",
      day: "Monday",
      date: "April 4",
      begin: "8:00 AM",
      end: "9:00 AM",
    },
    {
      id: 2,
      name: "roya pather ",
      image: require("../../../assets/person2.jpg"),
      workout: "upper body",
      day: "Sunday",
      date: "Dec 4",
      begin: "8:00 AM",
      end: "9:00 AM",
    },
    {
      id: 3,
      name: "Mary Jane",
      image: require("../../../assets/person3.jpg"),
      workout: "jugging",
      day: "Sunday",
      date: "Dec 4",
      begin: "8:00 AM",
      end: "9:00 AM",
    },
  ];
  return (
    <View>
      <Text style={styles.titleText}>upcoming buddies workout</Text>
      <Text style={styles.subTitleText}>
        Discover your buddies' latest workout routines, Join in for Fun and
        Progress!
      </Text>
      <View>
        <FlatList
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={buddiesWorkoutData}
          initialNumToRender={
            buddiesWorkoutData && buddiesWorkoutData.length > 0
              ? buddiesWorkoutData.length
              : undefined
          }
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
              marginRight={4}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 46,
  },
  titleText: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    // marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
  subTitleText: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
  },
});

// to be used in screen as:

{
  /* <GalleryBuddiesWorkout  /> */
}
