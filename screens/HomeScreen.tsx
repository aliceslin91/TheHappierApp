import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import styles from "../constants/BaseStyle";

import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import MultipleChoiceQuestion from "../components/OnboardingQuiz/MultipleChoiceQuestion";
// import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  const [quizStep, setQuizStep] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Happier App</Text>
      <View style={styles.separator} />
      {renderStep(quizStep)}
      {quizStep > 0 && (
        <Button
          title="Previous Question"
          onPress={() => setQuizStep(quizStep - 1)}
        />
      )}
      {/* need a gap/styling */}
      {/* next button - render when not on the last step*/}
      <Button
        title={quizStep == 0 ? "Begin Onboarding Quiz" : "Next Question"}
        onPress={() => setQuizStep(quizStep + 1)}
      />
    </View>
  );
}

function renderStep(quizStep: number) {
  switch (quizStep) {
    case 0:
      return <InstructionComponent />;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return <MultipleChoiceQuestion question={quizStep} />;
    case 7:
      return <Text>[TODO!] Disagree/Neutral/Agree</Text>;
    default:
      return <Text>[TODO!] You are a ...</Text>;
  }
}
