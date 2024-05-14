import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

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
  const renderItemCache = {
    DisplayBuddies: (item) => (
      <View style={styles.buddiesContainer}>
        <DisplayBuddies
          style={{ marginBottom: 40 }}
          item={item}
          onPressAddBuddy={() => navigation.jumpTo("Buddy")}
        />
      </View>
    ),
    LineComponent: (item) => (
      <Line marginBottom={40} marginTop={20} item={item} />
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
        showUserProfile={true}
        userProfileImage={require("../../../assets/person2.jpg")}
        onPressProfile={() => console.log("Profile image pressed")}
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  buddiesContainer: {
    marginTop: 20,
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
