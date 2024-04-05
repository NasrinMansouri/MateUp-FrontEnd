import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import colors from "../../config/colors";

const StopwatchApp = () => {
  // State variables to track stopwatch status and time
  const [isRunning, setIsRunning] = useState(false); // Tracks whether the stopwatch is running or not
  const [seconds, setSeconds] = useState(0); // Tracks seconds
  const [minutes, setMinutes] = useState(0); // Tracks minutes
  const [hours, setHours] = useState(0); // Tracks hours

  // useEffect hook to handle stopwatch logic
  useEffect(() => {
    let interval = null;

    // Check if stopwatch is running, and start the interval if true
    if (isRunning) {
      interval = setInterval(() => {
        // Increment seconds
        setSeconds((prevSeconds) => prevSeconds + 1);

        // Check if seconds reached 59, reset seconds and increment minutes
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }

        // Check if minutes and seconds both reached 59, reset both and increment hours
        if (minutes === 59 && seconds === 59) {
          setSeconds(0);
          setMinutes(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000); // Interval of 1000ms (1 second)
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval); // Clear interval if stopwatch is not running
    }

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount or when interval is no longer needed
  }, [isRunning, seconds, minutes, hours]); // Dependency array to watch for changes in isRunning, seconds, minutes, and hours

  // Function to start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
  };

  // Function to stop the stopwatch
  const stopStopwatch = () => {
    setIsRunning(false);
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={startStopwatch} style={styles.button} />
        <Button title="Stop" onPress={stopStopwatch} />
        <Button title="Reset" onPress={resetStopwatch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    fontFamily: "montserrat-black",
    color: colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.green,
  },
});

export default StopwatchApp;
