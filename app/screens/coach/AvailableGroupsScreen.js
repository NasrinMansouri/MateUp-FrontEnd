import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import Line from "../../components/Line";
import CardAvailableGroup from "../../components/coach/CardAvailableGroup";

export default function AvailableGroupsScreen() {
  const availableGroups = [
    {
      id: 1,
      members: [
        {
          id: 1,
          image: require("../../../assets/person3.jpg"),
        },
        {
          id: 2,
          image: require("../../../assets/person3.jpg"),
        },
      ],
      goal: "Get Strong and get toned",
      date: "Aug 3",
      year: "2024",
      start: "5 PM",
      end: "7 PM",
      spots: "1 spot is still available",
    },
    {
      id: 2,
      members: [
        {
          id: 1,
          image: require("../../../assets/person3.jpg"),
        },
      ],
      goal: "Get Strong and get toned",
      date: "Aug 3",
      year: "2024",
      start: "5 PM",
      end: "7 PM",
      spots: "2 spot is still available",
    },
  ];

  return (
    <Screen style={styles.mainContainer}>
      {/* <TopNav /> */}
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Available Groups to Join</Text>
          </View>
          <Line marginTop={0} marginBottom={22} />
          {availableGroups.map((group, id) => (
            <CardAvailableGroup
              key={id}
              members={group.members}
              goal={group.goal}
              date={group.date}
              year={group.year}
              start={group.start}
              end={group.end}
              spots={group.spots}
            />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontFamily: "montserrat-black",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    color: colors.black,
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
  },
  header: {
    // backgroundColor: colors.blackBc,
  },
});
