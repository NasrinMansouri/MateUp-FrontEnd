import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";

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
import MenueScreen from "./MenueScreen";

export default function HomeScreen({ navigation }) {
  const renderItemCache = {
    DisplayBuddies: (item) => (
      <View style={styles.buddiesContainer}>
        <DisplayBuddies
          style={{ marginBottom: 40 }}
          item={item}
          onPressAddBuddy={() => navigation.jumpTo("Buddy")}
          onPress={(item) =>
            navigation.navigate("MemberProfile", { memberId: item.id })
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
      <GalleryPeopleYouMightKnow item={item} />
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
        onPressNotification={() => navigation.navigate("Notification")}
        onPressMessage={() => console.log("Message image pressed")}
        // showSearchBar={true}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        // renderItem function,
        // which renders the component(each item) based on the type
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
      <MenueScreen
      // onPressProfile={() => navigation.navigate("UserProfile")}
      //  modalVisible={modalVisible} handleModalClose={handleModal}
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
