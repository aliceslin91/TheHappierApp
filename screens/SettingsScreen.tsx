import * as React from "react";
import { Text, View } from "react-native";

// import NotificationDemo from "../components/NotificationDemo";
import GRButton from "../components/GRButton";
import styles from "../constants/BaseStyle";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.separator} />
      <Text style={styles.paragraph}>Another placeholder screen</Text>
      <GRButton
        isIconButton={false}
        title="Retake onboarding quiz"
        onPress={() => navigation.navigate("Onboarding")}
      />
      {/* <NotificationDemo /> */}
    </View>
  );
}
