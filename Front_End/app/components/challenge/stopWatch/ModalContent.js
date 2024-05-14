import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import colors from "../../../config/colors";
import AppButton from "../../AppButton";

const ModalContent = ({
  modalVisible,
  formatTime,
  time,
  resumeAndCloseModal,
  saveWorkout,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.resumeContainer}
            onPress={resumeAndCloseModal}
          >
            <Text style={styles.resume}>Resume</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={saveWorkout} style={styles.saveContainer}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.modalContent}>
          <Text style={styles.text}>Great Job!</Text>
          <Text style={styles.text}>
            Your workout duration is :{" "}
            <Text style={{ color: colors.orangePrimary }}>
              {formatTime(time)}
            </Text>
          </Text>

          <View>
            <Text style={styles.textInpute}>
              if you want you can add a note, it's only visible for you!
            </Text>
            <TextInput
              style={styles.textInputeContainer}
              placeholder="Add a note here..."
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.saveBtn}>
            <AppButton
              title="Save"
              onPress={saveWorkout}
              backgroundColor={colors.orangeSecondary}
              fontSize={14}
              width="100%"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },

  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "flex-start",
    marginTop: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  resume: {
    color: colors.green,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },

  save: {
    color: colors.orangePrimary,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },

  modalContent: {
    // backgroundColor: colors.gray,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 60,
    height: "100%",
  },
  text: {
    fontSize: 16,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginBottom: 30,
  },
  textInpute: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },
  textInputeContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: colors.white,
  },
  saveBtn: {
    position: "absolute",
    bottom: 0,
    marginBottom: 200,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default ModalContent;
