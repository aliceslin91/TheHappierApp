import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Dots from "react-native-dots-pagination";

import styles from "../constants/BaseStyle";

import GRButton from "../components/GRButton";
import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import MultipleChoiceQuestion from "../components/OnboardingQuiz/MultipleChoiceQuestion";
import ScaledQuestion from "../components/OnboardingQuiz/ScaledQuestion";

export default function OnboardingScreen({ navigation }) {
  const numberOfQuestions = 8;
  const [quizStep, setQuizStep] = useState(0);

  const increaseQuizStep = function () {
    setQuizStep(quizStep + 1);
  };

  const decreaseQuizStep = function () {
    setQuizStep(quizStep - 1);
  };

  return (
    <View style={[styles.container, { padding: 16 }]}>
      <ScrollView>{renderQuizContent(quizStep)}</ScrollView>

      {quizStep == 0 && (
        <GRButton title="Begin Onboarding Quiz" onPress={increaseQuizStep} />
      )}

      {quizStep > 0 && quizStep < numberOfQuestions && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: 8,
          }}
        >
          <Dots
            length={numberOfQuestions - 1}
            active={quizStep - 1}
            passiveColor="#AADDEF" // TODO: hardcoded
            activeColor="#005781"
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            {quizStep > 1 && (
              <GRButton
                isIconButton={true}
                isPointingRight={false}
                onPress={decreaseQuizStep}
              />
            )}
            <View style={{ padding: 16 }} />
            {quizStep > 0 && (
              <GRButton
                isIconButton={true}
                isPointingRight={true}
                onPress={increaseQuizStep}
              />
            )}
          </View>
        </View>
      )}

      {quizStep == numberOfQuestions && (
        <GRButton
          title="Proceed to the Happier App"
          onPress={() => navigation.navigate("Root")}
        />
      )}
    </View>
  );
}

function renderQuizContent(quizStep: number) {
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
    // TODO: a different default
  }
}
