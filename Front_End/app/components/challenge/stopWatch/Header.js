import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../../config/colors";

const Header = ({
  activeButton,
  handleFinish,
  handleModalOpen,
  // handleModalClose,
}) => {
  const navigation = useNavigation();
  // const handleModalClose = () => {
  //   setModalVisible(false);
  // };

  return (
    <View style={styles.headerContainer}>
      {/* <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity> */}
      {activeButton === "pause" && (
        <TouchableOpacity
          style={styles.finishButtonContainer}
          onPress={() => {
            handleFinish();
            handleModalOpen();
          }}
        >
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
    marginLeft: 16,
  },
  finishButton: {
    color: colors.orangePrimary,
    fontSize: 16,
    fontFamily: "montserrat-black",
    marginRight: 16,
  },
});

export default Header;
