import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";

const GroupAvatar = ({ buddies }) => {
  // console.log("buddies", buddies);

  // Function to render the avatar images
  const renderAvatars = () => {
    const MAX_AVATARS = 4; // Maximum number of avatars to display before showing "+X"
    const avatarMargin = -10; // Margin between avatars

    // If there are more buddies than the maximum, display "+X" avatar
    if (buddies.length > MAX_AVATARS) {
      const overflowCount = buddies.length - MAX_AVATARS; // Number of overflow avatars
      return (
        <>
          {buddies.slice(0, MAX_AVATARS).map((buddy, id) => (
            <View
              key={id}
              style={[styles.avatar, { marginLeft: id > 0 ? avatarMargin : 0 }]}
            >
              <Image source={buddy.image} style={styles.avatarImage} />
            </View>
          ))}
          <View style={styles.overflowAvatar}>
            <Text style={styles.overflowText}>+{overflowCount}</Text>
          </View>
        </>
      );
    } else {
      // Render all buddies if their count is less than or equal to the maximum
      return buddies.map((buddy, id) => (
        <View
          key={id}
          style={[styles.avatar, { marginLeft: id > 0 ? avatarMargin : 0 }]}
        >
          <Image source={buddy.image} style={styles.avatarImage} />
        </View>
      ));
    }
  };

  return <View style={styles.container}>{renderAvatars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 41 / 2, // Half of avatar size for circular avatar
    width: 41,
    height: 41,
    overflow: "hidden", // Clip the avatar image if it exceeds the border radius
  },
  overflowAvatar: {
    borderRadius: 41 / 2, // Half of avatar size for circular avatar
    width: 41,
    height: 41,
    backgroundColor: colors.grayLight50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -18, // To align with the margin of the last avatar
  },
  overflowText: {
    fontSize: 14,
    fontFamily: "nunitoSans-regular",
    color: colors.black,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});

export default GroupAvatar;

//to be used in profile screen
{
  /* <GroupAvatar buddies={buddies} /> */
}

// dummy data for testing
// export default function App() {
//     const buddies = [
//       { id: 1, image: require("./assets/person-1.jpg") },
//       { id: 2, image: require("./assets/person2.jpg") },
//       { id: 3, image: require("./assets/person2.jpg") },
//       { id: 4, image: require("./assets/person2.jpg") },
//       { id: 5, image: require("./assets/person2.jpg") },
//       { id: 6, image: require("./assets/person2.jpg") },
//       { id: 7, image: require("./assets/person2.jpg") },
//       // Add more buddies as needed
//     ];
