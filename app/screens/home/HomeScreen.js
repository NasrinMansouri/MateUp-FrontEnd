import { StyleSheet, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import membersApi from "../../api/members";

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

  useEffect(() => {
    loadBuddies();
  }, []);
  const loadBuddies = async () => {
    const response = await membersApi.getBuddies();
    console.log("buddies", response.data.buddies)
    setBuddies(response.data.buddies);
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
        userProfileImage={require("../../../assets/person3.jpg")}
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
            onPress={(item) => handlePress(item)}
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
