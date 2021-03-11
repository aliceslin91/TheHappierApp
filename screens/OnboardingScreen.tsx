import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Dots from "react-native-dots-pagination";

import styles from "../constants/BaseStyle";

import GRButton from "../components/GRButton";
import InstructionComponent from "../components/OnboardingQuiz/InstructionComponent";
import MultipleChoiceQuestion from "../components/OnboardingQuiz/MultipleChoiceQuestion";
import ScaledQuestion from "../components/OnboardingQuiz/ScaledQuestion";
import Results from "../components/OnboardingQuiz/Results";
import Navigation from "../navigation";

export default function OnboardingScreen({ navigation }) {
  const numberOfQuestions = 8;
  const [quizStep, setQuizStep] = useState(0);
  const [quizChoice, setQuizChoice] = useState(-1);

  const increaseQuizStep = function () {
    setQuizStep(quizStep + 1);
    // TODO: save the question + choice
    setQuizChoice(-1);
  };

  const decreaseQuizStep = function () {
    setQuizStep(quizStep - 1);
  };

  const renderQuizContent = function () {
    switch (quizStep) {
      case 0:
        return <InstructionComponent onProceed={increaseQuizStep} />;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return (
          <MultipleChoiceQuestion
            onPress={setQuizChoice}
            question={quizStep}
            selectedChoice={quizChoice}
          />
        );
      case 7:
        return <ScaledQuestion question={quizStep} />;
      case 8:
        return <Results onProceed={() => navigation.navigate("Root")} />;
      default:
        return (
          <Text style={{ flex: 1 }}>Default here - should be unreachable</Text>
        );
    }
  };

  return (
    <View style={[styles.container, { padding: 16 }]}>
      <ScrollView>{renderQuizContent()}</ScrollView>

      {/* question nav */}
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
                disabled={quizChoice === -1}
                isIconButton={true}
                isPointingRight={true}
                onPress={increaseQuizStep}
              />
            )}
          </View>
        </View>
      )}
    </View>
  );
}
