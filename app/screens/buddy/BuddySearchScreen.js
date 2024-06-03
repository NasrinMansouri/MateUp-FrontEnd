import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
// import searchApi from "../api/search";
import ListItemSeparator from "../../components/lists/ListItemSeperator";
import Screen from "../../components/Screen";

const searchedResults = [
  {
    id: 1,
    name: "Moe",
    image: require("../../../assets/person2.jpg"),
  },
  {
    id: 2,
    name: "elena",
    image: require("../../../assets/person-1.jpg"),
  },
  {
    id: 3,
    name: "John",
    image: require("../../../assets/person-1.jpg"),
  },
];

export default function BuddySearchScreen({ navigation }) {
  // State for storing user's search input
  const [searchInput, setSearchInput] = useState("");
  // State for storing filtered search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input change
  const handleSearch = (text) => {
    setSearchInput(text); // Update searchInput state
    const filtered = searchedResults.filter((item) =>
      // Filter search results based on user's search input and make it case insensitive
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filtered); // Update searchResults state
    // Update searchResults even when search query is empty
    if (text === "") {
      setSearchResults([]); //clear searchResults when search query is empty
    }
  };

  // to connect to back end

  // Function to handle search input change
  // const handleSearch = (text) => {
  //   setSearchInput(text); // Update searchInput state
  // };

  // //for backend connection
  // useEffect(() => {
  //   loadSearchResults();
  // }, [searchInput]);

  // const loadSearchResults = async () => {
  //   if (searchInput.trim() !== "") {        //The trim() method removes whitespace from both sides of a string.
  //     try {
  //       // Calling API function to fetch members based on search input
  //       const response = await membersApi.getSearch(searchInput);
  //       // Update searchResults state with the fetched data
  //       setSearchResults(response.data.members);
  //     } catch (error) {
  //       console.error("Error fetching search results:", error);
  //     }
  //   } else {
  //     setSearchResults([]); // Clear searchResults when search query is empty
  //   }
  // };

  return (
    <Screen style={styles.container}>
      <View style={styles.containerBackSearch}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.white} />
        </TouchableWithoutFeedback>
        <TextInput
          style={styles.inputModal}
          placeholder="Search here..."
          placeholderTextColor={colors.grayLight50}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          autoFocus
          onChangeText={(text) => handleSearch(text)} // Call handleSearch function on text change
          // onChangeText={handleChangeText}
          keyboardAppearance="dark"
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchResults}
        keyExtractor={(result) => result.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              {searchInput ? "No results found!" : ""}
            </Text>
          </View>
        }
        renderItem={(
          { item } //render each item in FlatList
        ) => (
          <TouchableWithoutFeedback
            //  onPress={() => console.log(item)}
            onPress={() => {
              console.log("buddy id from search", item.id);
              navigation.navigate("MemberProfile", {
                memberId: item.id,
                challengeId: item.id,
              });
            }}
            // onPress={() => onPress(item)}
          >
            <View style={styles.resultContainer}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
    paddingTop: 20,
  },
  inputModal: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: colors.orangeSecondary,
    color: colors.white,
  },
  containerBackSearch: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 60,
    marginRight: 16,
    marginLeft: 10,
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    gap: 10,
  },
  name: {
    fontSize: 16,
    color: colors.white,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  noResultsContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  noResultsText: {
    fontSize: 20,
    color: colors.white,
  },
});
