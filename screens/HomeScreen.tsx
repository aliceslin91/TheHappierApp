import React from "react";
import { Text, View } from "react-native";

import styles from "../constants/BaseStyle";

export default function HomeScreen() {
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.header}>Placeholder screen</Text>
    </View>
  );
}
