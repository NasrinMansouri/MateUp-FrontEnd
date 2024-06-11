import { StyleSheet, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import membersApi from "../../api/members";

import { getFromAsyncStorage } from "../../auth/asyncStorage";

import useApi from "../../hooks/useApi";


import Line from "../../components/Line";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import TopNav from "../../components/topNavigation/TopNav";
import AppButton from "../../components/AppButton";
import {
  DisplayBuddies,
  UserNextWorkoutPlanning,
  GalleryBuddiesWorkout,
  GalleryPeopleYouMightKnow,
  CardMeetTheMemberOfTheMonth,
  GalleryEducationalContent,
} from "../../components/home";
import {
  GalleryBuddies,
  GalleryConnectAll,
  GalleryMatchBasedWorkout,
  GalleryMatchClubMembers,
} from "../../components/buddy";
import MenueScreen from "./MenueScreen";

export default function HomeScreen({ navigation }) {

  const [buddies, setBuddies] = useState([]);
  const [user, setUser] = useState(null);
  const [memberId, setMemberId] = useState(0);
  const [userId, setUserId] = useState(null);

  // Load memberId from AsyncStorage
  const loadMemberId = async () => {
    try {
      const memberId = await getFromAsyncStorage("memberId");
      setMemberId(memberId);
    } catch (error) {
      console.error("Error loading memberId:", error);
    }
  };

  // Load userId from AsyncStorage
  const loadUserId = async () => {
    try {
      const userId = await getFromAsyncStorage("userId");
      setUserId(userId);
    } catch (error) {
      console.error("Error loading userId:", error);
    }
  };


  useEffect(() => {
    // Load memberId
    loadMemberId();
    // if memberId exists, load buddies
    if (memberId) {
      loadBuddies(memberId);
    }

    // Load userId
    loadUserId();
    // if userId exists, load user
    if (userId) {
      loadUser(userId);
    }
  }, [memberId, userId]);

  // Load buddies
  const loadBuddies = async (memberId) => {
    try {
      const response = await membersApi.getMemberBuddies(memberId);
      setBuddies(response.data.buddies);
    } catch (error) {
      console.error("Error loading buddies:", error);
    }
  };

  // Load user
  const loadUser = async (userId) => {
    try {
      const response = await membersApi.getUser(userId);
      setUser(response.data.user);
      console.log('user on home:', response.data.user);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  // handle press for each buddy
  const handlePressBuddy = (item) => {
    console.log("Clicked memberId:", item.id);
    navigation.navigate("MemberProfile", {
      memberId: item.id,
      challengeId: item.id,
      isBuddy: true
    });
  };

  const renderItemCache = {
    DisplayBuddies: (item) => (
      <View style={styles.buddiesContainer}>
        <DisplayBuddies
          style={{ marginBottom: 40 }}
          item={item}
          onPressAddBuddy={() => navigation.jumpTo("Buddy")}
          onPress={(item) =>
            navigation.navigate("MemberProfile", {
              memberId: item.id,
              challengeId: item.id,
            })
          }
        />
      </View>
    ),
    LineComponent: (item) => (
      <Line marginBottom={0} marginTop={20} item={item} />
    ),
    UserNextWorkoutPlanningComponent: (item) => (
      <UserNextWorkoutPlanning item={item} />
    ),
    GalleryBuddiesWorkoutComponent: (item) => (
      <View style={styles.buddiesWorkoutContainer}>
        <GalleryBuddiesWorkout item={item} />
      </View>
    ),
    GalleryPeopleYouMightKnowComponent: (item) => (
      <GalleryPeopleYouMightKnow
        item={item}
        onPress={(item) =>
          navigation.navigate("MemberProfile", {
            memberId: item.id,
            challengeId: item.id,
          })
        }
      />
    ),
    CardMeetTheMemberOfTheMonthComponent: (item) => (
      <CardMeetTheMemberOfTheMonth item={item} />
    ),
    GalleryEducationalContentComponent: (item) => (
      <View>
        <GalleryEducationalContent item={item} />
        <View style={styles.buttonSeeAll}>
          <AppButton title={"see all"} width={222} height={45} />
        </View>
      </View>
    ),
  };

  //define array of data, which contains objects with a type property
  const data = [
    //{ type: "DisplayBuddies" },
    { type: "LineComponent" },
    { type: "UserNextWorkoutPlanningComponent" },
    { type: "GalleryBuddiesWorkoutComponent" },
    { type: "GalleryPeopleYouMightKnowComponent" },
    { type: "CardMeetTheMemberOfTheMonthComponent" },
    { type: "GalleryEducationalContentComponent" },
  ];
  return (
    <Screen style={styles.container}>
      <TopNav
        showMenue={true}
        // onPressMenue={handleModal}
        userProfileImage={user?.profile_image_url}
        onPressMenue={() => navigation.navigate("menu")}
        // onPressNotification={() => navigation.navigate("Notification")}
        onPressMessage={() => console.log("Message image pressed")}
      // showSearchBar={true}
      />
      <GalleryBuddies
        paddingLeft={6}
        buddies={buddies}
        // for new connection to backend
        // buddies={getBuddiesApi.data.buddies}
        // loading={getBuddiesApi.loading}
        // error={getBuddiesApi.error}
        onPress={(item) => handlePressBuddy(item)}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        // renderItem function,
        // which renders the component(each item) based on the type
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
      {/* <MenueScreen
        onPressProfile={() => navigation.navigate("UserProfile")}
        modalVisible={modalVisible} handleModalClose={handleModal}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  buddiesContainer: {
    // marginTop: 8,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
  },
  buttonSeeAll: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
});
