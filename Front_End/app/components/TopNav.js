import React from "react";
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

export default function TopNav({
  userImage,
  showSearchBar,
  showProfilePic,
  onPressSearch,
  onPressProfile,
  onPressNotification,
  onPressMessage,
}) {
  //new for searching
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [filteredUsers, setFilteredUsers] = useState([]);
  //   const handleSearch = () => {
  //     const filtered = users.filter((user) =>
  //       user.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredUsers(filtered);
  //   };

  return (
    <View style={styles.mainContainer}>
      <View>
        {showSearchBar && (
          <TouchableOpacity
            onPress={onPressSearch}
            style={styles.container}
            activeOpacity={0.9}
          >
            <View style={styles.searchContainer}>
              <Ionicons
                name="search"
                size={24}
                color="white"
                style={styles.iconSearch}
              />
              <TextInput
                style={styles.input}
                placeholder="Search here..."
                // value="search query"
                placeholderTextColor="gray"
                //new for searching
                // value={searchQuery}
                // onChangeText={setSearchQuery}
                // onSubmitEditing={handleSearch}
              />
            </View>
          </TouchableOpacity>
        )}
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
