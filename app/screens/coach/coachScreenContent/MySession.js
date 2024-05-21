import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import CardMySession from "../../../components/coach/CardMySession";

export default function MySession({ sessionDetails }) {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sessionDetailsData}
          keyExtractor={(sessionDetails) => sessionDetails.id.toString()}
          renderItem={({ item }) => (
            <CardMySession
              imageTrainer={item.imageTrainer}
              trainerName={item.trainerName}
              sessionGoal={item.sessionGoal}
              date={item.date}
              start={item.start}
              end={item.end}
              members={item.members}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

const sessionDetailsData = [
  {
    id: 1,
    trainerName: "Jen Smith",
    imageTrainer: require("../../../../assets/person3.jpg"),
    sessionGoal: "Get Strong and get toned",
    date: "Aug 3",
    start: "5 PM",
    end: "7 PM",
    members: [
      {
        id: 1,
        image: require("../../../../assets/person3.jpg"),
      },
      {
        id: 2,
        image: require("../../../../assets/person3.jpg"),
      },
      {
        id: 3,
        image: require("../../../../assets/person3.jpg"),
      },
      {
        id: 4,
        image: require("../../../../assets/person3.jpg"),
      },
      {
        id: 5,
        image: require("../../../../assets/person3.jpg"),
      },
    ],
  },
  {
    id: 2,
    trainerName: "Jen Smith",
    imageTrainer: require("../../../../assets/person3.jpg"),
    sessionGoal: "Get Strong and get toned",
    date: "Aug 3",
    start: "5 PM",
    end: "7 PM",
    members: [
      {
        id: 1,
        image: require("../../../../assets/person3.jpg"),
      },
    ],
  },
];

{
  /* <MySessions sessionDetails={sessionDetails} /> */
}
