import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import ListItemSeparator from "../lists/ListItemSeperator";

const searchedResults = [
  {
    id: 1,
    name: "Moe",
    image: require("../../../assets/person-1.jpg"),
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

export default function SearchBar({ onPress }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [ModalVisible, setModalVisible] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = searchedResults.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filtered);
    // Update filteredResults even when search query is empty
    if (text === "") {
      setFilteredResults([]);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Ionicons
          name="search"
          size={24}
          color={colors.white}
          style={styles.iconSearch}
          onPress={() => setModalVisible(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={colors.white}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          onFocus={() => setModalVisible(true)}
        />
      </View>

      {/*  TODO: modal back ground color */}
      <View style={styles.modalContainer}>
        <Modal
          visible={ModalVisible}
          animationType="slide"
          style={styles.modal}
        >
          <View style={styles.containerBackSearch}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <Ionicons name="chevron-back" size={24} color={colors.black} />
            </TouchableWithoutFeedback>
            <TextInput
              style={styles.inputModal}
              placeholder="Search here..."
              placeholderTextColor={colors.black}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              autoFocus
              onChangeText={(text) => handleSearch(text)}
              keyboardAppearance="dark"
            />
          </View>
          <FlatList
            data={filteredResults}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            ListEmptyComponent={
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>
                  {searchQuery ? "No results found!" : ""}
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => console.log(item)}>
                <View style={styles.resultContainer}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    // borderBottomColor: colors.grayLight100,
    // borderBottomWidth: 1,
    flex: 1,
  },
  modal: {
    flex: 1,
  },
  inputModal: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  containerBackSearch: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginRight: 16,
    marginLeft: 16,
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
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
  },
});
