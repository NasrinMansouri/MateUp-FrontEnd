import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function SaveChallengeScreen({ route }) {
  const { formatTime, time, resumeStopwatch, resetStopwatch, saveWorkout } =
    route.params;
  const navigation = useNavigation();

  const handleResume = () => {
    resumeStopwatch();
    navigation.goBack();
  };

  const handleDelete = () => {
    resetStopwatch();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.resumeContainer}
            onPress={handleResume}
          >
            <Text style={styles.resume}>Resume</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <Text style={styles.text1}>Great Job!</Text>
          <Text style={styles.text}>
            Your workout duration is:{" "}
            <Text style={styles.time}>{formatTime(time)}</Text>
          </Text>
          <View>
            <Text style={styles.textInpute}>
              If you want, you can add a note. It's only visible to you!
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
            <AppButton
              title="Delete"
              onPress={handleDelete}
              backgroundColor={colors.blackBc}
              fontSize={14}
              width="100%"
              textColor={colors.danger}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
  modalContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
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
  modalContent: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 60,
    height: "100%",
  },
  text1: {
    fontSize: 20,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginBottom: 30,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 16,
    fontFamily: "nunitoSans-extraBold",
    color: colors.white,
    marginBottom: 30,
  },
  time: {
    color: colors.orangeSecondary,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },
  textInpute: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "nunitoSans-regular",
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
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
