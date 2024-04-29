import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const GroupMember = ({ members, onPress }) => {
  return (
    <View style={styles.container}>
      {members.slice(0, 3).map((member, id) => (
        <View
          key={id}
          style={[styles.avatar, { marginLeft: id > 0 ? -15 : 0 }]}
        >
          <TouchableOpacity onPress={onPress}>
            <Image source={member.image} style={styles.avatarImage} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    borderRadius: 73 / 2,
    width: 73,
    height: 73,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});

export default GroupMember;
