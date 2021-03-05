import React, { useState } from "react";
import { Text, View } from "react-native";

import styles from "../../constants/BaseStyle";

// TODO: make scrollable
export default function ScaledQuestion({ question }: { question: number }) {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontSize: 12 }]}>{question} of 7</Text>
      {questionBank.map((q, i) => {
        return (
          <View key={i}>
            <Text style={styles.header}>{q}</Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>Tend to Disagree</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>Neutral</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>Tend to Agree</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const questionBank = [
  "People get frustrated with me, because if they ask me to do something, I’m less likely to do it (even if they’re a boss or client).",
  "I do what I think makes the most sense, according to my judgment, even if that means ignoring the rules or other people’s expectations.",
  "Commitments to others should never be broken, but commitments to myself can be broken.",
  "Sometimes I won't do something I want to do, because someone wants me to do it.",
  "I’ve sometimes described myself as a people-pleaser.",
  "I don’t mind breaking rules or violating convention--I often enjoy it.",
];
