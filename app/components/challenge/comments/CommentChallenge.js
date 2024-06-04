import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";
import AppButton from "../../AppButton";
import { TouchableWithoutFeedback } from "react-native";
import Line from "../../Line";

// export default function CommentChallenge({ comments, postComment }) {
//   const [comment, setComment] = useState("");

//   const handleCommentChange = (text) => {
//     setComment(text);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.commentContainer}>
//         <TextInput
//           placeholder="Add a comment..."
//           multiline
//           maxLength={700}
//           numberOfLines={9}
//           autoCapitalize="none"
//           autoCorrect={false}
//           onChangeText={handleCommentChange}
//           style={styles.textInput}
//           placeholderTextColor={colors.black}
//         />
//         <TouchableWithoutFeedback onPress={postComment}>
//           <Feather name="send" size={24} color="white" />
//         </TouchableWithoutFeedback>
//      { </View>
//       comments.map((comment) => (
//         <View style={styles.commentPost}>
//         <Image
//           style={styles.image}
//           source={require("../../../../assets/person-1.jpg")}
//         />
//         <Text>{comment}</Text>
//       </View>
//       ))}

//     </View>
//   );
// }

export default function CommentChallenge() {
  // state to store the current comment being typed
  const [currentComment, setCurrentComment] = useState("");

  // state to store the list of posted comments
  const [postedComments, setPostedComments] = useState([]);

  // Function to update the current comment state when the user types in the TextInput
  const handleCommentChange = (text) => {
    setCurrentComment(text);
  };

  const handlePostComment = () => {
    // Check if the comment is not just whitespace
    if (currentComment.trim()) {
      // Add the current comment to the list of posted comments
      setPostedComments([...postedComments, currentComment]);
      // Clear the TextInput by resetting the current comment state
      setCurrentComment("");
    }
  };

  const handleDelete = (commentTodelete) => {
    //to only delte the commnet that has been selected from the post
    setPostedComments(
      postedComments.filter((comment) => comment !== commentTodelete)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <TextInput
          placeholder="Add a comment..."
          multiline
          maxLength={700}
          numberOfLines={9}
          autoCapitalize="none"
          autoCorrect={false}
          value={currentComment}
          onChangeText={handleCommentChange}
          style={styles.textInput}
          placeholderTextColor={colors.grayLight100}
        />
        <TouchableWithoutFeedback
          onPress={handlePostComment}
          style={styles.sendContainer}
        >
          <Feather name="send" size={24} color={colors.green} />
        </TouchableWithoutFeedback>
      </View>
      {postedComments.map((comment, index) => (
        <>
          <View key={index} style={styles.commentPost}>
            <Image
              style={styles.image}
              source={require("../../../../assets/person3.jpg")}
            />
            <Text style={styles.text}>{comment}</Text>
            <View style={styles.deleteContainer}>
              <View>
                <TouchableWithoutFeedback
                  //   style={styles.delete}
                  onPress={() => handleDelete(comment)}
                >
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={15}
                    color={colors.danger}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <Line
            marginBottom={10}
            marginTop={10}
            backgroundColor={colors.black}
          />
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    padding: 20,
    borderRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  commentPost: {
    flexDirection: "row",
    // alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.white,
    marginRight: 16,
    flex: 1,
  },
  delete: {
    alignSelf: "flex-end",
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    // width: 30,
  },
});
