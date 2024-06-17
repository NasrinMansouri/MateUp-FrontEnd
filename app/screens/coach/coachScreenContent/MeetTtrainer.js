import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  GalleryAllCoaches,
  GalleryCoachesClubMembers,
} from "../../../components/coach";
import coaches from "../../../api/coaches";
import colors from "../../../config/colors";
import FilterModalCoach from "../../../components/coach/FilterModalCoach";
import AppButtonBorder from "../../../components/AppButtonBorder";

export default function MeetTrainer({ onPressClubCoaches, onPressAllCoaches }) {
  const [trainers, setTrainers] = useState([]);
  const [coachesClubMembers, setCoachesClubMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTrainers();
    loadCoachesClubMembers();
  }, []);

  // get all the trainers
  const loadTrainers = async () => {
    try {
      const response = await coaches.getMeetAllCoaches();
      console.log("Get all trainers", response);
      setTrainers(response.data.trainers);
    } catch (error) {
      console.error("Error loading trainers:", error);
    }
  };

  // get coaches at your club
  const loadCoachesClubMembers = async () => {
    const response = await coaches.getCoachesClubMembers();
    console.log("Get all trainers on club on coaches", response);
    setCoachesClubMembers(response);
  };

  const navigation = useNavigation();

  // handle press for each trainer
  const handlePress = (item) => {
    console.log("Clicked memberId:", item.id);
    navigation.navigate("CoachProfile", {
      trainerId: item.id,
    });
  };

  const renderItemCache = {
    GalleryCoachesClubMembers: (item) => (
      <GalleryCoachesClubMembers
        coachesClubMember={coachesClubMembers}
        onPress={(item) => handlePress(item)}
      />
    ),
    GalleryAllCoaches: (item) => (
      <GalleryAllCoaches
        meetAllCoaches={trainers}
        onPress={(item) => handlePress(item)}
      />
    ),
  };

  // Define array of data, which contains objects with a type property
  const data = [
    { type: "GalleryCoachesClubMembers" },
    { type: "GalleryAllCoaches" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        initialNumToRender={data && data.length > 0 ? data.length : undefined}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.modal}>
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
            <FilterModalCoach setModalVisible={setModalVisible} />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    marginBottom: 10,
    bottom: 0,
  },
  modal: {
    backgroundColor: colors.black,
  },
  modalView: {
    backgroundColor: colors.white, //to change modal background
    marginTop: 40,
  },
});

const coachesClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training"],
  },
];

const meetAllCoachesData = [
  {
    id: 1,
    name: "John Doee",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "aaron",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];
