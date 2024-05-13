import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";
import ListBulletPointWithText from "../ListBulletPointWithText";

export default function CardCoachClubMember({ name, image, titles, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.MainContainer}
    >
      <View style={styles.container}>
        <View style={styles.profile}>
          <CardProfile
            name={name}
            image={image}
            imageWidth={116}
            imageHeight={116}
            imageRadius={116 / 2}
            cardWidth={142}
            cardHeight={140}
            flexDirection={"column"}
            fontFamily={"nunitoSans-regular"}
            fontSize={16}
            textTransform={"capitalize"}
            textColor={colors.white}
          />
        </View>
        <ListBulletPointWithText titles={titles} textColor={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    width: 170,
    height: 220,
    marginRight: 8,
    backgroundColor: colors.blackBc,
  },
  container: {
    paddingLeft: 16,
  },
  profile: {
    marginBottom: 18,
  },
});

//to be used in screen as:
{
  /* <CardCoachClubMember
  name={"Jen"}
  image={require("./assets/person2.jpg")}
  titles={["strength training", "running", "swimming", "yoga", "boxing"]}
/>; */
}

// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";

// import CardProfile from "../CardProfile";
// import colors from "../../config/colors";
// import BulletPointWithText from "../BulletPointWithText";

// export default function TrainerClubMembers({ name, image, titles, onPress }) {
//   // Maximum number of workout types to display
//   const maxWorkoutTypes = 2;

//   // Slice the titles array to include only the first three workout types
//   const displayedTitles = titles.slice(0, maxWorkoutTypes);

//   // to indicate if ellipsis is needed
//   const showEllipsis = titles.length > maxWorkoutTypes;

//   //to indicate if last workout is needed
//   const showThirdWorkout = titles.length > 2;

//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
//       <View style={styles.container}>
//         <View style={styles.profile}>
//           <CardProfile
//             name={name}
//             image={image}
//             imageWidth={116}
//             imageHeight={116}
//             imageRadius={116 / 2}
//             cardWidth={142}
//             cardHeight={140}
//             backgroundColor={colors.blackBc}
//             flexDirection={"column"}
//             fontFamily={"nunitoSans-regular"}
//             fontSize={16}
//             textTransform={"capitalize"}
//             textColor={colors.white}
//           />
//         </View>
//         <View style={styles.bulletPoints}>
//           {displayedTitles.map((title, id) => (
//             <View key={id} style={styles.workoutContainer}>
//               <BulletPointWithText
//                 bulletColor={colors.orangePrimary}
//                 width={5}
//                 height={5}
//                 borderRadius={5 / 2}
//                 marginRight={4}
//                 marginBottom={4}
//                 textColor={colors.white}
//                 fontFamily="nunitoSans-extraBold"
//                 textTransform={"uppercase"}
//                 fontSize={12}
//                 title={title}
//               />
//             </View>
//           ))}
//           {showThirdWorkout && (
//             <View style={styles.lastWorkoutContainer}>
//               <BulletPointWithText
//                 bulletColor={colors.orangePrimary}
//                 width={5}
//                 height={5}
//                 borderRadius={5 / 2}
//                 marginRight={4}
//                 marginBottom={4}
//                 textColor={colors.white}
//                 fontFamily="nunitoSans-extraBold"
//                 textTransform={"uppercase"}
//                 fontSize={12}
//                 title={titles[maxWorkoutTypes]} // Display the third workout title
//               />
//               {showEllipsis && <Text style={styles.ellipsis}>more</Text>}
//             </View>
//           )}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 170,
//     height: 220,
//     marginRight: 8,
//   },
//   profile: {
//     marginBottom: 18,
//     // alignItems: "center",
//   },
//   bulletPoints: {
//     flexDirection: "column", // Ensure workout types are displayed horizontally
//   },
//   workoutContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   // ellipsisContainer: {
//   //   flexDirection: "row", // Ensure ellipsis is laid out horizontally
//   //   alignItems: "center",
//   // },
//   lastWorkoutContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   ellipsis: {
//     fontSize: 13,
//     fontFamily: "nunitoSans-extraBold",
//     color: colors.gray,
//     marginLeft: 4, // Add some space between the last workout type and the ellipsis
//   },
// });

//to be used in screen as:
{
  /* <CardMeetYourClubMembers
name={"Jen"}
image={require("./assets/person2.jpg")}
titles={[
  "strength training",
  "running",
  "swimming",
  "yoga",
  "boxing",
]}
/> */
}
