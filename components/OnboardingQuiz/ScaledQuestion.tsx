import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "../../constants/BaseStyle";

export default function ScaledQuestion({
  question,
  onPress,
  scaledAnswers,
}: {
  question: number;
  onPress: any;
  scaledAnswers: any; // TODO
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontSize: 12 }]}>{question + 1} of 7</Text>
      {questionBank.map((q, i) => {
        return (
          <View key={i}>
            <Text style={[styles.header, { lineHeight: 24 }]}>{q}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => onPress({ questionIndex: i, choice: 0 })}
              >
                <View style={styles.contentContainer}>
                  <Text
                    style={
                      scaledAnswers[i] === 0
                        ? styles.paragraphSelected
                        : styles.paragraph
                    }
                  >
                    Tend to Disagree
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress({ questionIndex: i, choice: 1 })}
              >
                <View style={styles.contentContainer}>
                  <Text
                    style={
                      scaledAnswers[i] === 1
                        ? styles.paragraphSelected
                        : styles.paragraph
                    }
                  >
                    Neutral
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress({ questionIndex: i, choice: 2 })}
              >
                <View style={styles.contentContainer}>
                  <Text
                    style={
                      scaledAnswers[i] === 2
                        ? styles.paragraphSelected
                        : styles.paragraph
                    }
                  >
                    Tend to Agree
                  </Text>
                </View>
              </TouchableOpacity>
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
