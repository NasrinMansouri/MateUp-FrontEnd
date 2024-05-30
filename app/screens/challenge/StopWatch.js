import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Body from "../../components/challenge/stopWatch/Body";
import ControllerStopWatch from "../../components/challenge/stopWatch/ControllerStopWatch";
import HeaderStopWatch from "../../components/challenge/stopWatch/HeaderStopWatch";
import ModalContent from "../../components/challenge/stopWatch/ModalContent";
import { useNavigation } from "@react-navigation/native";

const StopWatchChallenge = ({ saveWorkout }) => {
  const [time, setTime] = useState(0); // Store the elapsed time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [activeButton, setActiveButton] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);
  const [finishTime, setFinishTime] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment the elapsed time every second
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
    setActiveButton("start");
  };

  const pauseStopWatch = () => {
    setIsRunning(false);
    setActiveButton("pause");
  };

  const resumeStopwatch = () => {
    setIsRunning(true);
    setActiveButton("resume");
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setActiveButton("reset");
  };

  const handleFinish = () => {
    pauseStopWatch();
    console.log("Elapsed time:", time); // Log the elapsed time
    setFinishTime(time);
    setModalVisible(true);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const resumeAndCloseModal = () => {
    resumeStopwatch();
    handleModalClose();
  };

  const deleteAndCloseModal = () => {
    resetStopwatch();
    handleModalClose();
  };

  const handleSave = () => {
    // navigation.navigate("JoinedChallenge");
    // setModalVisible(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <Screen>
      <View style={styles.container}>
        <HeaderStopWatch
          isRunning={isRunning}
          activeButton={activeButton}
          resetStopwatch={resetStopwatch}
        />
        <Body time={time} formatTime={formatTime} />
        <ControllerStopWatch
          isRunning={isRunning}
          activeButton={activeButton}
          startStopwatch={startStopwatch}
          pauseStopWatch={pauseStopWatch}
          handleFinish={handleFinish}
          handleModalOpen={handleModalOpen}
        />
        <ModalContent
          modalVisible={modalVisible}
          formatTime={formatTime}
          time={time}
          finishTime={formatTime(finishTime)}
          resumeAndCloseModal={resumeAndCloseModal}
          deleteAndCloseModal={deleteAndCloseModal}
          saveWorkout={handleSave}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default StopWatchChallenge;