import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../config/colors";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return (
        <View style={styles.container}>
          <ActivityIndicator color={colors.orangePrimary} />
          <Text style={styles.error}>loading...</Text>
          {console.log("error:", response.problem, response.data)}
        </View>
      );
    } else {
      setData(response.data);
    }
  };

  return { data, loading, error, request };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  error: {
    color: colors.danger,
    fontFamily: "montserrat-black",
    textAlign: "center",
    fontSize: 16,
  },
});

// import { useState } from "react";

// export default useApi = (apiFunc) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const request = async (...args) => {
//     setLoading(true);
//     const response = await apiFunc(...args);
//     setLoading(false);

//     if (!response.ok) return setError(true);

//     setError(false);
//     setData(response.data);
//   };

//   return { data, error, loading, request };
// };
