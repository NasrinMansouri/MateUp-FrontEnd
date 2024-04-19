import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  onPressMessage,
  onPressNotification,
} from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import SearchBar from "./SearchBar";
import colors from "../config/colors";

export default function TopNav({
  showSearchBar,
  UserProfileImage,
  showUserProfile,
  onPressProfile,
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.LeftContainer}>
        {showSearchBar && <SearchBar searchedResults />}
        {showUserProfile && (
          <TouchableWithoutFeedback onPress={onPressProfile}>
            <View style={styles.userImageContainer}>
              <Image source={UserProfileImage} style={styles.userImage} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={styles.iconsContainer}>
        {/* Notification Icon */}
        <TouchableOpacity activeOpacity={0.9} onPress={onPressNotification}>
          <MaterialIcons
            name="notifications-none"
            size={24}
            color="white"
            style={styles.iconNotification}
          />
        </TouchableOpacity>
        {/* Message Icon */}
        <TouchableOpacity activeOpacity={0.9} onPress={onPressMessage}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 16,
    marginLeft: 16,
    paddingBottom: 20,
    paddingTop: 20,
  },
  LeftContainer: {
    flex: 1,
  },

  userImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 22,
    marginLeft: 50,
  },
});

//to navigate to user profile:
// import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// // Inside the functional component

// const navigation = useNavigation(); // Get navigation object

// // Function to handle search result press
// const handleSearchResultPress = (userId) => {
//   // Navigate to the user profile screen with the corresponding user ID
//   navigation.navigate("UserProfile", { userId });
//   // Close the modal
//   setModalVisible(false);
// };
