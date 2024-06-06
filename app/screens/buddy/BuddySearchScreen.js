import React, { useEffect, useState } from "react";
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
import membersApi from "../../api/members";
import useApi from "../../hooks/useApi";

export default function BuddySearchScreen({ navigation }) {
  // State for storing user's search input
  const [searchInput, setSearchInput] = useState("");

  // // State for storing filtered search results
  const [searchResults, setSearchResults] = useState([]);

  // State to store all results from the backend
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //to call the backend
  useEffect(() => {
    loadAllResults();
  }, []);

  const loadAllResults = async () => {
    try {
      const response = await membersApi.getSearch();
      // console.log("response from search buddy", response.data.members);
      if (response.ok) {
        // console.log("response from search buddy", response.data.members);
        setAllResults(response.data.members);
        //console.log("all results", allResults);
        setSearchResults(response.data.members); // Initialize searchResults with all data
        // console.log("search results", searchResults);
        setError(null); //clear any previous error
      } else {
        setError(
          `Error loading buddies in search: ${
            response.problem
          }. ${JSON.stringify(response.data.members)}`
        );
      }
    } catch (err) {
      setError(err.message);
      // console.log("error in loadAllResults search buddy", err);
    }
    setLoading(false);
  };

  //console.log("all nowresults", allResults);
  //filtering result works
  const handleSearch = (text) => {
    setSearchInput(text);

    console.log("search query", text);

    if (text === "") {
      setSearchResults(allResults); // Reset to all results when search query is empty
    } else {
      const filteredResults = allResults.filter((item) => {
        return item.user.name.toLowerCase().includes(text.toLowerCase());
      });
      setSearchResults(filteredResults); // Update searchResults with filtered results
      console.log("filtered results", filteredResults);
    }
  };

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
          // onChangeText={(text) => handleSearch(text)} // Call handleSearch function on text change
          onChangeText={handleSearch}
          keyboardAppearance="dark"
        />
      </View>
      {loading ? (
        <Text style={styles.noResultsText}>Loading...</Text>
      ) : error ? (
        // console.log("this is my error in search buddy", error)
        <Text style={styles.noResultsText}>Error: {error}</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchResults}
          // data={getSearchApi.data}
          // loading={getSearchApi.loading}
          // error={getSearchApi.error}
          keyExtractor={(member) => member.id.toString()}
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
                <Image
                  style={styles.image}
                  source={item.user_profile_image_url}
                />
                <Text style={styles.name}>{item.user.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      )}
      {/* {console.log("data from search", getSearchApi.data)} */}
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
