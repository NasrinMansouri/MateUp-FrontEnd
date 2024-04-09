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
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const handleSearch = (query) => {
    const results = dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        {/* Search Bar */}
        {showSearchBar && (
          <SearchBar onPressSearch={() => setModalVisible(true)} />
        )}
        {/* Profile Picture */}
        {showProfilePic && (
          <TouchableOpacity onPress={onPressProfile} activeOpacity={0.9}>
            <Image source={userImage} style={styles.userImage} />
          </TouchableOpacity>
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
            <SearchBar onPressSearch={handleSearch} />
            {/* Display search results */}
            <View style={styles.searchResultsContainer}>
              {searchResults.map((user) => (
                <TouchableOpacity key={user.id} style={styles.searchResultItem}>
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
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.blackBc,
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  searchResultsContainer: {
    marginTop: 10,
  },
  searchResultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  searchResultText: {
    color: colors.white,
    fontSize: 16,
  },
});
