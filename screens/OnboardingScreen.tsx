import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Dots from "react-native-dots-pagination";

import styles from "../constants/BaseStyle";

import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import MultipleChoiceQuestion from "../components/OnboardingQuiz/MultipleChoiceQuestion";
import ScaledQuestion from "../components/OnboardingQuiz/ScaledQuestion";

export default function OnboardingScreen({ navigation }) {
  const [quizStep, setQuizStep] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>{renderStep(quizStep)}</ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 8,
        }}
      >
        {quizStep > 0 && quizStep <= 7 && (
          <Dots
            length={7}
            active={quizStep - 1}
            passiveColor="#AADDEF" // TODO: hardcoded
            activeColor="#005781"
          />
        )}
        {quizStep > 1 && quizStep <= 7 && (
          /* TODO: use react-native-icons / react-native-vector-icons for button icon rendering */
          <Button title="Previous" onPress={() => setQuizStep(quizStep - 1)} />
        )}
        {quizStep <= 7 && (
          /* TODO: simplify logic */
          <Button
            title={quizStep == 0 ? "Begin Onboarding Quiz" : "Next"}
            onPress={() => setQuizStep(quizStep + 1)}
          />
        )}
        {quizStep > 7 && (
          <Button
            title="Proceed to the Happier App"
            onPress={() => navigation.navigate("Root")}
          />
        )}
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
      return <ScaledQuestion question={quizStep} />;
    default:
      return <Text style={{ flex: 1 }}>[TODO!] Results go here ...</Text>;
  }
}
