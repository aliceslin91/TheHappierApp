import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import styles from "../constants/BaseStyle";

export default function GRHeader({}: {}) {
  const date = new Date();
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: Colors.accentBackground,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Not yet implemented");
        }}
      >
        <Ionicons size={30} name="menu" color={Colors.iconDefault} />
      </TouchableOpacity>
      <Text
        style={[
          styles.header,
          { color: Colors.accentText, fontWeight: "normal" },
        ]}
      >
        {date.toDateString()}
      </Text>
    </View>
  );
}
