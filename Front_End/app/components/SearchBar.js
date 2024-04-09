// SearchBar.js
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function SearchBar({ onPressSearch, marginTop }) {
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    onPressSearch(searchQuery); // Pass the search query to the parent component
  };

  const handleInputFocus = () => {
    onPressSearch(searchQuery); // Open modal when input is focused
  };

  return (
    <TouchableOpacity
      onPress={handleSearch}
      style={styles.container}
      activeOpacity={0.9}
    >
      <View style={[styles.searchContainer, { marginTop: marginTop }]}>
        <Ionicons
          name="search"
          size={24}
          color="white"
          style={styles.iconSearch}
        />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          onFocus={handleInputFocus} // Open modal when input is focused
          ref={ref}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add your styles here
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blackBc,
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
    // Add your styles here
  },
});
