import * as React from "react";
import { StyleSheet } from "react-native";

// import NotificationDemo from "../components/NotificationDemo";
import GRButton from "../components/GRButton";
import { Text, View } from "../components/Themed";
import styles from "../constants/BaseStyle";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.header}>Settings</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Another placeholder screen</Text>
      <GRButton
        isIconButton={false}
        title="Retake onboarding quiz"
        onPress={() => navigation.navigate("Onboarding")}
      />
      {/* <NotificationDemo /> */}
    </View>
  );
}
