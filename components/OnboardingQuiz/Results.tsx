import React from "react";
import { Text, View } from "react-native";

import styles from "../../constants/BaseStyle";

import GRButton from "../../components/GRButton";

export default function Results({
  onProceed,
}: {
  onProceed: any; // TODO: typing
}) {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingVertical: 36,
        },
      ]}
    >
      <Text style={[styles.header, { fontSize: 12 }]}>Your tendency:</Text>
      <Text style={styles.header}>Obliger</Text>
      <Text style={styles.paragraph}>
        Obligers meet outer expectations, but struggle to meet inner
        expectations. They’re motivated by external accountability; they wake up
        and think, “What must I do today?”
      </Text>
      <Text style={styles.paragraph}>
        {" "}
        Obligers excel at meeting external demands and deadlines and go to great
        lengths to meet their responsibilities, so they make terrific
        colleagues, leaders, family members, and friends.
      </Text>
      <Text style={styles.paragraph}>
        {" "}
        Others rely on them, but because Obligers resist inner expectations, it
        can be difficult for them to meet their aims for themselves, in the
        absence of external accountability—to work on a Ph.D. thesis, to attend
        networking events, to get their car serviced.
      </Text>

      <View style={{ height: 36 }} />
      <GRButton title="Proceed to Happier App" onPress={onProceed} />

      <Text style={[styles.paragraph, { fontStyle: "italic" }]}>
        “I do what I have to do. I don’t want to let others down, but I may let
        myself down.”
      </Text>
    </View>
  );
}
