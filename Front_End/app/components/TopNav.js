import React, { useRef } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchBar from "./SearchBar";

// Dummy data for user search
const dummyUsers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

export default function TopNav({
  userImage,
  showSearchBar,
  showProfilePic,
  onPressSearch,
  onPressProfile,
  onPressNotification,
  onPressMessage,
}) {
  // const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  // const ref = useRef(null);
  // // Function to handle search
  // const handleSearch = () => {
  //   console.log("Search query:", searchQuery);
  //   // Perform any other search-related operations here
  // };
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Simulate searching for users by name
    const results = dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Search results:", results);
    // Additional logic for handling the search results
  };
  // const handleSearch = (query) => {
  //   console.log("Search query from ParentComponent:", query);
  //   // Additional logic for handling the search query
  // };
  return (
    <View style={styles.mainContainer}>
      <View>
        {/* {showSearchBar && (
          <SearchBar onPressSearch={handleSearch} /> // Use the SearchBar component
        )} */}
        {showSearchBar && <SearchBar onPressSearch={handleSearch} />}
        {showProfilePic && (
          <TouchableOpacity onPress={onPressProfile} activeOpacity={0.9}>
            <Image source={userImage} style={styles.userImage} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={onPressNotification}>
          <MaterialIcons
            name="notifications-none"
            size={24}
            color="white"
            style={styles.iconNotification}
          />
        </TouchableOpacity>
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
    backgroundColor: colors.blackBc,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginRight: 16,
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blackBc,
    // borderRadius: 5,
    padding: 10,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "nunitoSans-regular",
    color: colors.white,
    width: "60%",
  },
  iconSearch: {
    // marginLeft: 16,
  },
  userImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginLeft: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 22,
  },
});
