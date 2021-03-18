import React from "react";
import { Text, View } from "react-native";

import styles from "../constants/BaseStyle";
import appSettings from "../app.json";

export default function HomeScreen() {
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.header}>Placeholder screen</Text>
      <Text style={styles.paragraph}>
        Version {appSettings.expo.version} build{" "}
        {appSettings.expo.ios.buildNumber}
      </Text>
    </View>
  );
}
