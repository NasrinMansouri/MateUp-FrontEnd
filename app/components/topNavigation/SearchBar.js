import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function SearchBar({ onPress }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        color={colors.white}
        style={styles.iconSearch}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

// import {
//   FlatList,
//   Modal,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   Image,
// } from "react-native";
// import React, { useState, useRef } from "react";
// import { Ionicons } from "@expo/vector-icons";

// import colors from "../../config/colors";
// import ListItemSeparator from "../lists/ListItemSeperator";

// const searchedResults = [
//   {
//     id: 1,
//     name: "Moe",
//     image: require("../../../assets/person-1.jpg"),
//   },
//   {
//     id: 2,
//     name: "elena",
//     image: require("../../../assets/person-1.jpg"),
//   },
//   {
//     id: 3,
//     name: "John",
//     image: require("../../../assets/person-1.jpg"),
//   },
// ];

// export default function SearchBar({ onPress }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [ModalVisible, setModalVisible] = useState(false);
//   const [filteredResults, setFilteredResults] = useState([]);

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     const filtered = searchedResults.filter((item) =>
//       item.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredResults(filtered);
//     // Update filteredResults even when search query is empty
//     if (text === "") {
//       setFilteredResults([]);
//     }
//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <Ionicons
//           name="search"
//           size={24}
//           color={colors.white}
//           style={styles.iconSearch}
//           onPress={() => setModalVisible(true)}
//         />
//       </View>

//       <Modal visible={ModalVisible} animationType="slide">
//         <View style={styles.containerModal}>
//           <View style={styles.containerBackSearch}>
//             <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//               <Ionicons name="chevron-back" size={24} color={colors.white} />
//             </TouchableWithoutFeedback>
//             <TextInput
//               style={styles.inputModal}
//               placeholder="Search here..."
//               placeholderTextColor={colors.grayLight50}
//               autoCapitalize="none"
//               autoCorrect={false}
//               keyboardType="default"
//               autoFocus
//               onChangeText={(text) => handleSearch(text)}
//               keyboardAppearance="dark"
//             />
//           </View>
//           <FlatList
//             showsVerticalScrollIndicator={false}
//             data={filteredResults}
//             keyExtractor={(item) => item.id.toString()}
//             ItemSeparatorComponent={ListItemSeparator}
//             ListEmptyComponent={
//               <View style={styles.noResultsContainer}>
//                 <Text style={styles.noResultsText}>
//                   {searchQuery ? "No results found!" : ""}
//                 </Text>
//               </View>
//             }
//             renderItem={({ item }) => (
//               <TouchableWithoutFeedback onPress={() => console.log(item)}>
//                 <View style={styles.resultContainer}>
//                   <Image style={styles.image} source={item.image} />
//                   <Text style={styles.name}>{item.name}</Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             )}
//           />
//         </View>
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   input: {
//     padding: 10,
//     flex: 1,
//   },
//   containerModal: {
//     backgroundColor: colors.blackBc, //this change the background color
//     flex: 1,
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: "black",
//   },

//   inputModal: {
//     flex: 1,
//     height: 40,
//     marginLeft: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 4,
//     borderColor: colors.orangeSecondary,
//     color: colors.white,
//   },
//   containerBackSearch: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 60,
//     marginRight: 16,
//     marginLeft: 10,
//   },
//   resultContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     margin: 16,
//     gap: 10,
//   },
//   name: {
//     fontSize: 16,
//     color: colors.white,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   noResultsContainer: {
//     alignItems: "center",
//     marginTop: 30,
//   },
//   noResultsText: {
//     fontSize: 20,
//     color: colors.white,
//   },
// });
