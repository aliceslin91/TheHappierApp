import React from "react";
import { Text, View } from "react-native";

import styles from "../../constants/BaseStyle";

import GRButton from "../../components/GRButton";

export default function InstructionComponent({
  onProceed,
}: {
  onProceed: any;
}) {
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: 24,
          paddingVertical: 36,
        },
      ]}
    >
      <Text style={styles.header}>Welcome to the Happier App!</Text>
      <Text style={styles.paragraph}>
        Consider the following scenarios. Obviously, you might not find yourself
        in these situations, and you might not react exactly as suggested;
        choose the answer that sounds like the kind of thing you'd most likely
        say, do, or think. Choose the answer that seems most generally true for
        you; try not to search for exceptions to the rule or focus on one
        specific area of your life.
      </Text>
      <View style={{ height: 48 }} />
      <GRButton title="Begin Onboarding Quiz" onPress={onProceed} />
    </View>
  );
}
