// import React, { useRef } from "react";
// import {
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Text,
// } from "react-native";
// import { useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import colors from "../config/colors";
// import SearchBar from "./SearchBar";

// // Dummy data for user search
// const dummyUsers = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Jane Smith" },
//   { id: 3, name: "Alice Johnson" },
// ];

// export default function TopNav({
//   userImage,
//   showSearchBar,
//   showProfilePic,
//   onPressSearch,
//   onPressProfile,
//   onPressNotification,
//   onPressMessage,
// }) {
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (query) => {
//     const results = dummyUsers.filter((user) =>
//       user.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchResults(results);
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <View>
//         {showSearchBar && <SearchBar onPressSearch={handleSearch} />}
//         {showProfilePic && (
//           <TouchableOpacity onPress={onPressProfile} activeOpacity={0.9}>
//             <Image source={userImage} style={styles.userImage} />
//           </TouchableOpacity>
//         )}
//       </View>
//       <View style={styles.iconsContainer}>
//         <TouchableOpacity activeOpacity={0.9} onPress={onPressNotification}>
//           <MaterialIcons
//             name="notifications-none"
//             size={24}
//             color="white"
//             style={styles.iconNotification}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.9} onPress={onPressMessage}>
//           <MaterialCommunityIcons
//             name="email-outline"
//             size={24}
//             color="white"
//           />
//         </TouchableOpacity>
//       </View>
//       {/* Display search results */}
//       <View style={styles.searchResultsContainer}>
//         {searchResults.map((user) => (
//           <TouchableOpacity key={user.id} style={styles.searchResultItem}>
//             <Text style={styles.searchResultText}>{user.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: colors.blackBc,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 30,
//     marginRight: 16,
//     paddingBottom: 10,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: colors.blackBc,
//     // borderRadius: 5,
//     padding: 10,
//   },
//   input: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontFamily: "nunitoSans-regular",
//     color: colors.white,
//     width: "60%",
//   },
//   iconSearch: {
//     // marginLeft: 16,
//   },
//   userImage: {
//     width: 24,
//     height: 24,
//     borderRadius: 24 / 2,
//     marginLeft: 16,
//   },
//   iconsContainer: {
//     flexDirection: "row",
//     gap: 22,
//   },
//   // new
//   searchResultsContainer: {
//     marginTop: 10,
//   },
//   searchResultItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.gray,
//   },
//   searchResultText: {
//     color: colors.white,
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Modal,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchBar from "./SearchBar";

// Dummy data for user search
const dummyUsers = [
  { id: 1, userImage: require("../../assets/person-1.jpg"), name: "John Doe" },
  {
    id: 2,
    userImage: require("../../assets/person-1.jpg"),
    name: "Jane Smith",
  },
  {
    id: 3,
    userImage: require("../../assets/person-1.jpg"),
    name: "Alice Johnson",
  },
  {
    id: 4,
    userImage: require("../../assets/person-1.jpg"),
    name: "Bob Williams",
  },
  {
    id: 5,
    userImage: require("../../assets/person-1.jpg"),
    name: "Emily Brown",
  },
  {
    id: 6,
    userImage: require("../../assets/person-1.jpg"),
    name: "Michael Davis",
  },
  {
    id: 7,
    userImage: require("../../assets/person-1.jpg"),
    name: "Sarah Thompson",
  },
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
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const handleSearch = (query) => {
    const results = dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setModalVisible(true); // Open modal when search is performed
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        {/* Search Bar */}
        {showSearchBar && <SearchBar onPressSearch={handleSearch} />}
        {/* Profile Picture */}
        {showProfilePic && (
          <View style={styles.userImageContainer}>
            <TouchableOpacity onPress={onPressProfile} activeOpacity={0.9}>
              <Image source={userImage} style={styles.userImage} />
            </TouchableOpacity>
          </View>
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
      {/* Modal for search results */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)} // Close the modal when clicked
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {/* Search Bar inside the modal */}
            <SearchBar onPressSearch={handleSearch} marginTop={80} />
            {/* Display search results */}
            <View style={styles.searchResultsContainer}>
              {searchResults.map((user) => (
                <TouchableOpacity
                  key={user.id}
                  style={styles.searchResultItem}
                  onPress={() => console.log(user)}
                >
                  <Image source={user.userImage} style={styles.userImage} />
                  <Text style={styles.searchResultText}>{user.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
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
    // backgroundColor: colors.white,
    // paddingLeft: 16,
  },
  userImageContainer: {
    marginLeft: 16,
  },
  userImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginLeft: 32,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 22,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  modalContent: {
    backgroundColor: colors.blackBc,
    padding: 20,
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 60,
    right: 30,
    zIndex: 1,
  },
  closeButtonText: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 16,
  },
  searchResultsContainer: {
    marginTop: 30,
  },
  searchResultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchResultText: {
    color: colors.white,
    fontSize: 16,
  },
  userImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginLeft: 0,
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
