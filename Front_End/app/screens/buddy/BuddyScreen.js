// TODO: modal fills like floating, is not fix!

import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

import Screen from "../../components/Screen";
import AppButtonBorder from "../../components/AppButtonBorder";
import Line from "../../components/Line";
import TopNav from "../../components/topNavigation/TopNav";
import colors from "../../config/colors";
import {
  GalleryBuddies,
  GalleryConnectAll,
  GalleryMatchBasedWorkout,
  GalleryMatchClubMembers,
} from "../../components/buddy";
import FilterModal from "../../components/buddy/FilterModal";

const UserClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../assets/person2.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    titles: ["strength training"],
  },
];
const matchClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

const connectAllMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

const dataWorkout = [
  {
    Key: "1",
    value: "Strength Training",
    disabled: true,
  },
  {
    Key: "2",
    value: "Running",
  },
  {
    Key: "3",
    value: "Yoga",
  },
];

const dataLocation = [
  {
    Key: "1",
    value: "Los Angeles",
  },
  {
    Key: "2",
    value: "New York",
  },
];
const buddiesData = [
  {
    id: 1,
    name: "MMMMMMMMMMMMMMMM ",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 2,
    name: "Coucheeeeeeee ",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 3,
    name: "Couchhhhhhhhh ",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 4,
    name: "NNNNNN NNNNN ",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 5,
    name: "Couch ",
    image: require("../../../assets/person-1.jpg"),
  },
];

export default function BuddyScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Screen style={styles.container}>
      <TopNav showSearchBar={true} />
      <ScrollView style={styles.container}>
        <View style={styles.buddyContainer}>
          <GalleryBuddies buddies={buddiesData} />
        </View>
        <Line marginBottom={40} marginTop={20} />
        <GalleryMatchClubMembers UserClubMembers={UserClubMembersData} />
        <GalleryMatchBasedWorkout matchMemberWorkout={matchClubMembersData} />
        <GalleryConnectAll connectAllMembers={connectAllMembersData} />
      </ScrollView>
      <View style={styles.fixButtonPosition}>
        <AppButtonBorder
          onPress={() => setModalVisible(true)}
          title="Filter"
          materialCommunityIcons={true}
          iconName="filter-variant"
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <FilterModal setModalVisible={setModalVisible} />
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    marginBottom: 100,
    bottom: 0,
  },
  buddyContainer: {
    marginTop: 20,
  },
  modalView: {
    backgroundColor: colors.white, //to change modal background
    marginTop: 40,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 16,
    marginRight: 16,
  },
});
