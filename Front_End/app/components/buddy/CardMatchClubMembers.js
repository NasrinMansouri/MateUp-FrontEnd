import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";
import BulletPointWithText from "../BulletPointWithText";

export default function CardMatchClubMembers({ name, image, titles }) {
  // Maximum number of workout types to display
  const maxWorkoutTypes = 2;

  // Slice the titles array to include only the first three workout types
  const displayedTitles = titles.slice(0, maxWorkoutTypes);

  // to indicate if ellipsis is needed
  const showEllipsis = titles.length > maxWorkoutTypes;

  //to indicate if last workout is needed
  const showThirdWorkout = titles.length > 2;

  return (
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
          backgroundColor={colors.blackBc}
          flexDirection={"column"}
          fontFamily={"nunitoSans-regular"}
          fontSize={16}
          textTransform={"capitalize"}
          textColor={colors.white}
        />
      </View>
      <View style={styles.bulletPoints}>
        {displayedTitles.map((title, id) => (
          <View key={id} style={styles.workoutContainer}>
            <BulletPointWithText
              bulletColor={colors.orangePrimary}
              width={5}
              height={5}
              borderRadius={5 / 2}
              marginRight={4}
              marginBottom={4}
              textColor={colors.white}
              fontFamily="nunitoSans-extraBold"
              textTransform={"uppercase"}
              fontSize={12}
              title={title}
            />
          </View>
        ))}
        {showThirdWorkout && (
          <View style={styles.lastWorkoutContainer}>
            <BulletPointWithText
              bulletColor={colors.orangePrimary}
              width={5}
              height={5}
              borderRadius={5 / 2}
              marginRight={4}
              marginBottom={4}
              textColor={colors.white}
              fontFamily="nunitoSans-extraBold"
              textTransform={"uppercase"}
              fontSize={12}
              title={titles[maxWorkoutTypes]} // Display the third workout title
            />
            {showEllipsis && <Text style={styles.ellipsis}>more</Text>}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 220,
    marginRight: 16,
  },
  profile: {
    marginBottom: 18,
    alignItems: "center",
  },
  bulletPoints: {
    flexDirection: "column", // Ensure workout types are displayed horizontally
  },
  workoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ellipsisContainer: {
    flexDirection: "row", // Ensure ellipsis is laid out horizontally
    alignItems: "center",
  },
  lastWorkoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ellipsis: {
    fontSize: 13,
    fontFamily: "nunitoSans-extraBold",
    color: colors.gray,
    marginLeft: 4, // Add some space between the last workout type and the ellipsis
  },
});

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

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// import CardProfile from "../CardProfile";
// import colors from "../../config/colors";
// import BulletPointWithText from "../BulletPointWithText";

// export default function CardMeetYourClubMembers({ name, image, data }) {
//   // Extracting only workout types from the data array
//   const workoutTypes = data.map((item) => item.workoutType);

//   return (
//     <View style={styles.container}>
//       <CardProfile
//         name={name}
//         image={image}
//         imageWidth={116}
//         imageHeight={116}
//         imageRadius={116 / 2}
//         cardWidth={142}
//         cardHeight={140}
//         backgroundColor={colors.blackBc}
//         flexDirection={"column"}
//         fontFamily={"nunitoSans-regular"}
//         fontSize={16}
//         textTransform={"capitalize"}
//       />
//       {workoutTypes.map((workoutType, id) => (
//         <BulletPointWithText
//           key={id}
//           bulletColor={colors.orangePrimary}
//           width={5}
//           height={5}
//           borderRadius={5 / 2}
//           marginRight={4}
//           textColor={colors.white}
//           fontFamily="nunitoSans-extraBold"
//           textTransform={"uppercase"}
//           fontSize={12}
//           title={workoutType}
//         />
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 142,
//     height: 200,
//   },
// });
