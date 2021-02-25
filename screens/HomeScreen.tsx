import * as React from "react";
import { Button, StyleSheet } from "react-native";

import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Happier App</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Begin Onboarding Quiz" onPress={null} />
      <InstructionComponent />
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
