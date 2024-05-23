import React, { useState, useEffect } from "react";
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
import membersApi from "../../api/members";
import TopNav from "../../components/topNavigation/TopNav";
import colors from "../../config/colors";
import {
  GalleryBuddies,
  GalleryConnectAll,
  GalleryMatchBasedWorkout,
  GalleryMatchClubMembers,
} from "../../components/buddy";
import FilterModal from "../../components/buddy/FilterModal";

const buddiesData = [
  {
    id: 1,
    name: "Jon",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 2,
    name: "Mary",
    image: require("../../../assets/person2.jpg"),
  },
];

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
];

export default function BuddyScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  //for backend connection
  // const [buddies, setBuddies] = useState([]);
  // const [UserClubMembers, setUserClubMembers] = useState([]);
  // const [matchClubMembers, setMatchClubMembers] = useState([]);
  // const [connectAllMembers, setConnectAllMembers] = useState([]);

  // useEffect(() => {
  //   loadBuddies();
  //   loadUserClubMembers();
  //   loadMatchClubMembers();
  //   loadConnectAllMembers();
  // }, []);

  // const loadBuddies = async () => {
  //   const response = await membersApi.getBuddies();
  //   setBuddies(response.data.members);
  // };

  // const loadUserClubMembers = async () => {
  //   const response = await membersApi.getUserClubMembers();
  //   setUserClubMembers(response.data.members);
  // };

  // const loadMatchClubMembers = async () => {
  //   const response = await membersApi.getMatchClubMembers();
  //   setMatchClubMembers(response.data.members);
  // };

  // const loadConnectAllMembers = async () => {
  //   const response = await membersApi.getConnectAllMembers();
  //   setConnectAllMembers(response.data.members);
  // };

  return (
    <Screen style={styles.container}>
      <TopNav
        showSearchBar={true}
        onPressSearch={() => navigation.navigate("Search")}
        onPressMessage={() => console.log("message")}
        onPressNotification={() =>
          navigation.navigate("Notification", { screen: "buddy" })
        }
      />
      <ScrollView style={styles.container}>
        <View style={styles.buddyContainer}>
          <GalleryBuddies
            paddingLeft={6}
            buddies={buddiesData}
            onPress={(item) =>
              navigation.navigate("MemberProfile", { memberId: item.id })
            }
          />
        </View>
        <Line marginBottom={40} marginTop={20} />
        <GalleryMatchClubMembers
          UserClubMembers={UserClubMembersData}
          onPress={(item) =>
            navigation.navigate("MemberProfile", { memberId: item.id })
          }
        />
        <GalleryMatchBasedWorkout
          matchMemberWorkout={matchClubMembersData}
          onPress={(item) =>
            navigation.navigate("MemberProfile", { memberId: item.id })
          }
        />
        <GalleryConnectAll
          connectAllMembers={connectAllMembersData}
          onPress={(item) =>
            navigation.navigate("MemberProfile", { memberId: item.id })
          }
        />
      </ScrollView>
      <View style={styles.fixButtonPosition}>
        <AppButtonBorder
          onPress={() => setModalVisible(true)}
          title="Filter"
          materialCommunityIcons={true}
          iconName="filter-variant"
        />
      </View>
      <View style={{ backgroundColor: colors.black }}>
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
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
  },
  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    marginBottom: 10,
    bottom: 0,
  },
  buddyContainer: {
    // marginTop: 20,
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
