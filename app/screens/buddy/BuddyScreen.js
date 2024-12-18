import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Modal, Text } from "react-native";

import Screen from "../../components/Screen";
import AppButtonBorder from "../../components/AppButtonBorder";
import Line from "../../components/Line";
import membersApi from "../../api/members";
import useApi from "../../hooks/useApi";
import TopNav from "../../components/topNavigation/TopNav";
import colors from "../../config/colors";
import {
  GalleryBuddies,
  GalleryConnectAll,
  GalleryMatchBasedWorkout,
  GalleryMatchClubMembers,
} from "../../components/buddy";
import FilterModal from "../../components/buddy/FilterModal";
import { getUserToken } from "../../auth/userToken";

export default function BuddyScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  // const [notificationSeen, setNotificationSeen] = useState(false);

  // new for connecting to backend using my custom api hook

  // const getBuddiesApi = useApi(membersApi.getBuddies);
  // const getUserClubMembersApi = useApi(membersApi.getUserClubMembers);
  // const getMatchClubMembersApi = useApi(membersApi.getMatchClubMembers);
  // const getConnectAllMembersApi = useApi(membersApi.getConnectAllMembers);
  // useEffect(() => {
  //   getBuddiesApi.request();
  //   getUserClubMembersApi.request();
  //   getMatchClubMembersApi.request();
  //   getConnectAllMembersApi.request();
  // }, []);

  //for backend connection
  const [buddies, setBuddies] = useState([]);
  const [UserClubMembers, setUserClubMembers] = useState([]);
  const [matchClubMembers, setMatchClubMembers] = useState([]);
  const [connectAllMembers, setConnectAllMembers] = useState([]);

  useEffect(() => {
    loadBuddies();
    loadUserClubMembers();
    loadMatchClubMembers();
    loadConnectAllMembers();
  }, []);

  const token = getUserToken();
  console.log(token);

  const loadBuddies = async () => {
    const response = await membersApi.getBuddies();
    console.log("Buddies on buddy screen", response.data.buddies);
    setBuddies(response.data.buddies);
  };

  const loadUserClubMembers = async () => {
    const response = await membersApi.getUserClubMembers();
    console.log("UserClubMembers on buddy screen", response);
    setUserClubMembers(response.data.members);
  };

  const loadMatchClubMembers = async () => {
    const response = await membersApi.getMatchClubMembers();
    console.log("MatchClubMembers on buddy screen", response);
    setMatchClubMembers(response.data.members);
  };
  const loadConnectAllMembers = async () => {
    try {
      const response = await membersApi.getConnectAllMembers();
      console.log("ConnectAllMembers on buddy screen", response);
      setConnectAllMembers(response.data.members);
    } catch (error) {
      console.error("Error loading Connect All Members:", error);
    }
  };

  // handle press for each buddy
  const handlePress = (item) => {
    console.log("Clicked memberId:", item.id);
    navigation.navigate("MemberProfile", {
      memberId: item.id,
      challengeId: item.id,
    });
  };

  const handlePressBuddy = (item) => {
    console.log("Clicked memberId:", item.id);
    navigation.navigate("MemberProfile", {
      memberId: item.id,
      challengeId: item.id,
      isBuddy: true,
    });
  };

  return (
    <Screen style={styles.container}>
      <TopNav
        showSearchBar={true}
        onPressSearch={() => navigation.navigate("SearchBuddy")}
        onPressMessage={() => console.log("message")}
      />
      <ScrollView style={styles.container}>
        <View style={styles.buddyContainer}>
          <Text style={styles.buddiesText}>Buddies</Text>
          <GalleryBuddies
            paddingLeft={6}
            buddies={buddies}
            // for new connection to backend
            // buddies={getBuddiesApi.data.buddies}
            // loading={getBuddiesApi.loading}
            // error={getBuddiesApi.error}
            onPress={(item) => handlePressBuddy(item)}
          />
        </View>
        <Line marginBottom={20} marginTop={20} />
        <GalleryMatchClubMembers
          UserClubMembers={UserClubMembers}
          // for new connection to backend
          // UserClubMembers={getUserClubMembersApi.data.members}
          // loading={getUserClubMembersApi.loading}
          // error={getUserClubMembersApi.error}
          onPress={(item) => handlePress(item)}
        />
        <GalleryMatchBasedWorkout
          matchMemberWorkout={matchClubMembers}
          // for new connection to backend
          // matchMemberWorkout={getMatchClubMembersApi.data.members}
          // loading={getMatchClubMembersApi.loading}
          // error={getMatchClubMembersApi.error}
          onPress={(item) => handlePress(item)}
        />
        <GalleryConnectAll
          connectAllMembers={connectAllMembers}
          // for new connection to backend
          // connectAllMembers={getConnectAllMembersApi.data.members}
          // loading={getConnectAllMembersApi.loading}
          // error={getConnectAllMembersApi.error}
          onPress={(item) => handlePress(item)}
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
      <View style={styles.modal}>
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
  modal: {
    backgroundColor: colors.black,
  },
  buddiesText: {
    color: colors.orangePrimary,
    fontFamily: "montserrat-black",
    fontSize: 14,
    textTransform: "uppercase",
    marginLeft: 16,
    marginBottom: 10,
  },
});
