// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const GroupAvatar = ({ buddies }) => {
//   console.log("buddies", buddies);
//   //   if (!buddies) {
//   //     return null; // Render nothing if buddies is undefined
//   //   }
//   // Function to render the avatar images
//   const renderAvatars = () => {
//     const MAX_AVATARS = 4; // Maximum number of avatars to display before showing "+X"
//     const avatarMargin = -18; // Margin between avatars
//     const avatarSize = 50; // Size of each avatar
//     const overflowCount = buddies.length - MAX_AVATARS; // Number of overflow avatars

//     // If there are more buddies than the maximum, display "+X" avatar
//     if (buddies.length > MAX_AVATARS) {
//       return (
//         <>
//           {buddies.slice(0, MAX_AVATARS).map((buddy, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.avatar,
//                 { marginLeft: index > 0 ? avatarMargin : 0 },
//               ]}
//             >
//               {/* Render avatar image here */}
//               {/* For example: */}
//               {/* <Image source={{ uri: buddy.avatar }} style={styles.avatarImage} /> */}
//               <Image source={buddies[id].image} style={styles.avatarImage} />
//             </View>
//           ))}
//           <View style={styles.overflowAvatar}>
//             <Text style={styles.overflowText}>+{overflowCount}</Text>
//           </View>
//         </>
//       );
//     } else {
//       // Render all buddies if their count is less than or equal to the maximum
//       return buddies.map((buddy, id) => (
//         <View
//           key={id}
//           style={[styles.avatar, { marginLeft: index > 0 ? avatarMargin : 0 }]}
//         >
//           {/* Render avatar image here */}
//           {/* For example: */}
//           {/* <Image source={{ uri: buddy.avatar }} style={styles.avatarImage} /> */}
//           <Image source={buddies[id].image} style={styles.avatarImage} />
//         </View>
//       ));
//     }
//   };

//   return <View style={styles.container}>{renderAvatars()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: {
//     borderRadius: 25, // Half of avatar size for circular avatar
//     width: 50,
//     height: 50,
//     overflow: "hidden", // Clip the avatar image if it exceeds the border radius
//   },
//   overflowAvatar: {
//     borderRadius: 25, // Half of avatar size for circular avatar
//     width: 50,
//     height: 50,
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: -18, // To align with the margin of the last avatar
//   },
//   overflowText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   avatarImage: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default GroupAvatar;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const GroupAvatar = ({ buddies }) => {
  console.log("buddies", buddies);

  // Function to render the avatar images
  const renderAvatars = () => {
    const MAX_AVATARS = 4; // Maximum number of avatars to display before showing "+X"
    const avatarMargin = -18; // Margin between avatars

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
    borderRadius: 25, // Half of avatar size for circular avatar
    width: 50,
    height: 50,
    overflow: "hidden", // Clip the avatar image if it exceeds the border radius
  },
  overflowAvatar: {
    borderRadius: 25, // Half of avatar size for circular avatar
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -18, // To align with the margin of the last avatar
  },
  overflowText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});

export default GroupAvatar;
