import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Dots from "react-native-dots-pagination";

import styles from "../constants/BaseStyle";

import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import MultipleChoiceQuestion from "../components/OnboardingQuiz/MultipleChoiceQuestion";

export default function HomeScreen() {
  const [quizStep, setQuizStep] = useState(0);

  return (
    <View style={styles.container}>
      {renderStep(quizStep)}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 8,
        }}
      >
        {quizStep > 0 && (
          <Dots
            length={7}
            active={quizStep - 1}
            passiveColor="#AADDEF"
            activeColor="#005781"
          />
        )}
        {quizStep > 1 && (
          /* TODO: use react-native-icons / react-native-vector-icons for button icon rendering */
          <Button title="Previous" onPress={() => setQuizStep(quizStep - 1)} />
        )}
        <Button
          title={quizStep == 0 ? "Begin Onboarding Quiz" : "Next"}
          onPress={() => setQuizStep(quizStep + 1)}
        />
      </View>
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
