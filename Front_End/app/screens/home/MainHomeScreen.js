import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Line from "../../components/Line";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import TopNav from "../../components/TopNav";
import AppButton from "../../components/AppButton";
import GalleryBuddies from "../../components/GalleryBuddies";
import AppButtonBorder from "../../components/AppButtonBorder";
import UserNextWorkoutPlanning from "../../components/home/UserNextWorkoutPlanning";
import GalleryBuddiesWorkout from "../../components/home/GalleryBuddiesWorkout";
import GalleryPeopleYouMightKnow from "../../components/home/GalleryPeopleYouMightKnow";
import CardMeetTheMemberOfTheMonth from "../../components/home/CardMeetTheMemberOfTheMonth";
import GalleryEducationalContent from "../../components/home/GalleryEducationalContent";

export default function MainHomeScreen() {
  return (
    <Screen style={styles.container}>
      <TopNav
        // showProfilePic={true}
        // userImage={require("../../../assets/person2.jpg")}
        showSearchBar={true}
        onPressSearch={handleSearch}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.fixButtonPosition}>
        <AppButtonBorder
          image={require("../../../assets/icons/calendar.png")}
          title="calendar"
        />
      </View>
    </Screen>
  );
}

const renderItemCache = {
  GalleryBuddies: (item) => (
    <View style={styles.buddiesContainer}>
      <GalleryBuddies
        style={{ paddingLeft: 16, marginBottom: 40 }}
        item={item}
      />
    </View>
  ),
  Line: (item) => <Line marginBottom={40} item={item} />,
  Text: ({ content, name }) => (
    <Text style={styles.welcomeText}>
      {content} {name}
    </Text>
  ),
  UserNextWorkoutPlanning: (item) => <UserNextWorkoutPlanning item={item} />,
  GalleryBuddiesWorkout: (item) => (
    <View style={styles.buddiesWorkoutContainer}>
      <Text style={styles.titleText}>upcoming buddies workout</Text>
      <Text style={styles.subTitleText}>
        Discover your buddies' latest workout routines, Join in for Fun and
        Progress!
      </Text>
      <GalleryBuddiesWorkout item={item} />
    </View>
  ),
  GalleryPeopleYouMightKnow: (item) => (
    <View>
      <Text style={styles.titleText}>people you might know</Text>
      <GalleryPeopleYouMightKnow item={item} />
    </View>
  ),
  CardMeetTheMemberOfTheMonth: (item) => (
    <View>
      <Text style={styles.titleText}>whats new</Text>
      <Text style={styles.subTitleText}>
        Checkout the lates news on MATE-UP
      </Text>
      <CardMeetTheMemberOfTheMonth item={item} />
    </View>
  ),
  GalleryEducationalContent: (item) => (
    <View>
      <GalleryEducationalContent item={item} />
      <View style={styles.buttonSeeAll}>
        <AppButton title={"see all"} width={222} height={45} />
      </View>
    </View>
  ),
};

const data = [
  { type: "GalleryBuddies" },
  { type: "Line" },
  { type: "Text", content: "WELCOME", name: "SARAH" },
  { type: "UserNextWorkoutPlanning" },
  { type: "GalleryBuddiesWorkout" },
  { type: "GalleryPeopleYouMightKnow" },
  { type: "CardMeetTheMemberOfTheMonth" },
  { type: "GalleryEducationalContent" },
];

// Define the onPressSearch function for searchbar
const handleSearch = (searchQuery) => {
  console.log("Search query:", searchQuery);
  // Perform search logic here
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  buddiesContainer: {
    marginTop: 32,
  },
  welcomeText: {
    fontFamily: "montserrat-black",
    fontSize: 48,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
  },
  titleText: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
  subTitleText: {
    fontFamily: "nunitoSans-regular",
    fontSize: 14,
    color: colors.white,
    marginBottom: 32,
    paddingLeft: 16,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
  },
  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    top: "75%",
    bottom: 0,
  },
  buttonSeeAll: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
});

// export default function MainHomeScreen() {
//   return (
//     <View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <Screen style={styles.container}>
//           <GalleryBuddies style={{ paddingLeft: 16, marginBottom: 40 }} />
//           <Line marginBottom={40} />
//           <Text style={styles.welcomText}>WELCOME REZA</Text>
//           <UserNextWorkoutPlanning />
//           <View style={styles.buddiesWorkoutContainer}>
//             <Text style={styles.titleText}>upcoming buddies workout</Text>
//             <Text style={styles.subTitleText}>
//               Discover your buddies' latest workout routines, Join in for Fun
//               and Progress!
//             </Text>
//             <GalleryBuddiesWorkout />
//           </View>
//           <View>
//             <Text style={styles.titleText}>people you might know</Text>
//             <GalleryPeopleYouMightKnow />
//           </View>
//           <View>
//             <Text style={styles.titleText}>whats new</Text>
//             <Text style={styles.subTitleText}>
//               Checkout the lates news on MATE-UP
//             </Text>
//             <CardMeetTheMemberOfTheMonth />
//             <GalleryEducationalContent />
//           </View>
//           <View style={{ alignItems: "center", marginBottom: 200 }}>
//             <AppButton title={"see all"} width={222} height={45} />
//           </View>
//         </Screen>
//       </ScrollView>
//       <View style={styles.fixButtonPosition}>
//         <AppButtonBorder
//           image={require("../../../assets/icons/calendar.png")}
//           title="calendar"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.blackBc,
//     flex: 1,
//   },
//   welcomText: {
//     fontFamily: "montserrat-black",
//     fontSize: 48,
//     color: colors.white,
//     marginBottom: 10,
//     paddingLeft: 16,
//   },
//   fixButtonPosition: {
//     position: "absolute",
//     zIndex: 1,
//     right: 16,
//     top: "75%",
//     buttom: 0,
//   },
//   buddiesWorkoutContainer: {
//     marginTop: 96,
//   },
//   titleText: {
//     fontFamily: "montserrat-black",
//     fontSize: 26,
//     color: colors.orangePrimary,
//     marginBottom: 10,
//     textTransform: "uppercase",
//     paddingLeft: 16,
//   },
//   subTitleText: {
//     fontFamily: "nunitoSans-regular",
//     fontSize: 14,
//     color: colors.white,
//     marginBottom: 32,
//     paddingLeft: 16,
//   },
// });
