import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Line from "../../components/Line";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import TopNav from "../../components/TopNav";
import AppButton from "../../components/AppButton";
import GalleryBuddies from "../../components/GalleryBuddies";
import AppButtonBorder from "../../components/AppButtonBorder";
import {
  UserNextWorkoutPlanning,
  GalleryBuddiesWorkout,
  GalleryPeopleYouMightKnow,
  CardMeetTheMemberOfTheMonth,
  GalleryEducationalContent,
} from "../../components/home";

export default function MainHomeScreen() {
  return (
    <Screen style={styles.container}>
      <TopNav
        // showProfilePic={true}
        // userImage={require("../../../assets/person2.jpg")}
        showSearchBar={true}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        // renderItem function,
        // which renders the component(each item) based on the type
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
  GalleryBuddiesComponent: (item) => (
    <View style={styles.buddiesContainer}>
      <GalleryBuddies
        style={{ paddingLeft: 16, marginBottom: 40 }}
        item={item}
      />
    </View>
  ),
  LineComponent: (item) => <Line marginBottom={40} item={item} />,
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
  { type: "GalleryBuddiesComponent" },
  { type: "LineComponent" },
  { type: "UserNextWorkoutPlanningComponent" },
  { type: "GalleryBuddiesWorkoutComponent" },
  { type: "GalleryPeopleYouMightKnowComponent" },
  { type: "CardMeetTheMemberOfTheMonthComponent" },
  { type: "GalleryEducationalContentComponent" },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  buddiesContainer: {
    marginTop: 32,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
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

//USING SCROLLVIEW
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// import React from "react";

// import Line from "../../components/Line";
// import colors from "../../config/colors";
// import Screen from "../../components/Screen";
// import TopNav from "../../components/TopNav";
// import AppButton from "../../components/AppButton";
// import GalleryBuddies from "../../components/GalleryBuddies";
// import AppButtonBorder from "../../components/AppButtonBorder";
// import {
//   UserNextWorkoutPlanning,
//   GalleryBuddiesWorkout,
//   GalleryPeopleYouMightKnow,
//   CardMeetTheMemberOfTheMonth,
//   GalleryEducationalContent,
// } from "../../components/home";
// export default function MainHomeScreen() {
//   return (
//     <>
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
//     </>
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

//another approach
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import React from "react";

// import Line from "../../components/Line";
// import colors from "../../config/colors";
// import Screen from "../../components/Screen";
// import TopNav from "../../components/TopNav";
// import AppButton from "../../components/AppButton";
// import GalleryBuddies from "../../components/GalleryBuddies";
// import AppButtonBorder from "../../components/AppButtonBorder";
// import {
//   UserNextWorkoutPlanning,
//   GalleryBuddiesWorkout,
//   GalleryPeopleYouMightKnow,
//   CardMeetTheMemberOfTheMonth,
//   GalleryEducationalContent,
// } from "../../components/home";

// export default function MainHomeScreen() {
//   // Header component for ListHeaderComponent
//   const renderHeader = () => {
//     return (
//       <>
//         <GalleryBuddies style={{ paddingLeft: 16, marginBottom: 40 }} />
//         <Line marginBottom={40} />
//         <Text style={styles.welcomText}>WELCOME REZA</Text>
//         <UserNextWorkoutPlanning />
//         <View style={styles.buddiesWorkoutContainer}>
//           <Text style={styles.titleText}>upcoming buddies workout</Text>
//           <Text style={styles.subTitleText}>
//             Discover your buddies' latest workout routines, Join in for Fun and
//             Progress!
//           </Text>
//           <GalleryBuddiesWorkout />
//         </View>
//         <View>
//           <Text style={styles.titleText}>people you might know</Text>
//           <GalleryPeopleYouMightKnow />
//         </View>
//         <View>
//           <Text style={styles.titleText}>whats new</Text>
//           <Text style={styles.subTitleText}>
//             Checkout the lates news on MATE-UP
//           </Text>
//           <CardMeetTheMemberOfTheMonth />
//           <GalleryEducationalContent />
//         </View>
//         <View style={{ alignItems: "center", marginBottom: 200 }}>
//           <AppButton title={"see all"} width={222} height={45} />
//         </View>
//       </>
//     );
//   };

//   return (
//     <Screen style={styles.container}>
//       <FlatList
//         ListHeaderComponent={renderHeader} // Use the header component as ListHeaderComponent
//         ListHeaderComponentStyle={{ marginBottom: 40 }} // Apply margin bottom to the header
//         data={[]} // Empty data array if not needed
//         renderItem={({ item }) => null} // Placeholder renderItem function
//         keyExtractor={(item, index) => index.toString()} // Provide a unique key extractor
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.fixButtonPosition}>
//         <AppButtonBorder
//           image={require("../../../assets/icons/calendar.png")}
//           title="calendar"
//         />
//       </View>
//     </Screen>
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
//     bottom: 0, // Corrected typo in "bottom"
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
