import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";

import membersApi from "../../api/members";
import { getFromAsyncStorage } from "../../auth/asyncStorage";
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
      console.log("user on home:", response.data.user);
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
      isBuddy: true,
    });
  };

  const renderItemCache = {
    DisplayBuddies: (item) => (
      <View style={styles.buddiesContainer}>
        <Text style={styles.buddiesText}>Buddies</Text>
        <DisplayBuddies
          style={{ marginBottom: 40 }}
          buddies={buddies}
          item={item}
          onPressAddBuddy={() => navigation.jumpTo("Buddy")}
          onPress={(item) => handlePressBuddy(item)}
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
    { type: "DisplayBuddies" },
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
        userProfileImage={{ uri: user?.profile_image_url }}
        onPressMenue={() => navigation.navigate("menu")}
        onPressMessage={() => console.log("Message image pressed")}
      />
      <FlatList
        data={data}
        initialNumToRender={data && data.length > 0 ? data.length : undefined}
        keyExtractor={(item) => item.type}
        // renderItem function,
        // which renders the component(each item) based on the type
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  buddiesContainer: {
    marginBottom: 15,
  },
  buddiesWorkoutContainer: {
    marginTop: 46,
  },
  buttonSeeAll: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
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
