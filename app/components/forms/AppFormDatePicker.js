// import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
// import React, { useState, useEffect } from "react";
// import { useFormikContext } from "formik";
// import DateTimePicker from "@react-native-community/datetimepicker";

// import colors from "../../config/colors";
// import AppTextInput from "../AppTextInput";
// import AppButton from "../AppButtonBorder";
// import ErrorMessage from "./ErrorMessage";

// export default function AppFormDatePicker({ name, title, placeholder }) {
//   const [date, setDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);
//   const [startDate, setStartDate] = useState("");

//   const toggleDatePicker = () => {
//     setShowPicker(!showPicker);
//   };

//   const onChange = ({ type }, selectedDate) => {
//     if (type === "set") {
//       const currentDate = selectedDate;
//       setDate(currentDate);

//       if (Platform.OS === "android") {
//         toggleDatePicker();
//         setStartDate(currentDate.toDateString());
//       }
//     } else {
//       toggleDatePicker();
//     }
//   };
//   const { errors, setFieldTouched, touched, values } = useFormikContext();

//   const confirmIOSDate = () => {
//     setStartDate(date.toDateString());
//     toggleDatePicker();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       {!showPicker && (
//         <Pressable onPress={toggleDatePicker}>
//           <AppTextInput
//             placeholder={placeholder}
//             value={startDate}
//             onChangeText={setStartDate}
//             editable={false}
//             onPressIn={toggleDatePicker}
//             onBlur={() => setFieldTouched(name)}
//           />
//         </Pressable>
//       )}

//       {showPicker && (
//         <DateTimePicker
//           mode="date"
//           display="spinner"
//           value={date}
//           onChange={onChange}
//           style={styles.datePicker}
//           textColor={colors.white}
//         />
//       )}
//       {showPicker && Platform.OS === "ios" && (
//         <View style={styles.btnContainer}>
//           <AppButton
//             onPress={toggleDatePicker}
//             title="cancel"
//             height={12}
//             width={13}
//           />
//           <AppButton onPress={confirmIOSDate} title="Confirm" height={12} />
//         </View>
//       )}
//       <ErrorMessage error={errors[name]} visible={touched[name]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   btnContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 18,
//     marginTop: 30,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//     marginBottom: 5,
//     textTransform: "uppercase",
//   },
// });

import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../config/colors";
import AppTextInput from "../AppTextInput";
import AppButton from "../AppButtonBorder";
import ErrorMessage from "./ErrorMessage";

export default function AppFormDatePicker({ name, title, placeholder }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [startDate, setStartDate] = useState("");

  const { setFieldValue, errors, setFieldTouched, touched } =
    useFormikContext();

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setStartDate(currentDate.toDateString());
        setFieldValue(name, currentDate.toISOString()); // Set the form field value
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setStartDate(date.toDateString());
    toggleDatePicker();
    setFieldValue(name, date.toISOString()); // Set the form field value
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showPicker && Platform.OS === "ios" && (
        <View style={styles.btnContainer}>
          <AppButton
            onPress={toggleDatePicker}
            title="cancel"
            height={26}
            width={120}
            borderRadius={4}
          />
          <AppButton
            onPress={confirmIOSDate}
            title="Confirm"
            height={26}
            width={120}
            borderRadius={4}
          />
        </View>
      )}
      {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
          <AppTextInput
            placeholder={placeholder}
            value={startDate}
            onChangeText={setStartDate}
            editable={false}
            onPressIn={toggleDatePicker}
            onBlur={() => setFieldTouched(name)}
          />
        </Pressable>
      )}

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.datePicker}
          textColor={colors.white}
        />
      )}

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    marginTop: 30,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginBottom: 5,
    textTransform: "uppercase",
  },
});
