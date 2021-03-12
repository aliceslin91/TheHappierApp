import * as React from "react";
import { StyleSheet } from "react-native";

// import NotificationDemo from "../components/NotificationDemo";
import GRButton from "../components/GRButton";
import { Text, View } from "../components/Themed";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
