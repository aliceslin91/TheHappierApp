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
  const numberOfQuestions = 7;
  const [quizStep, setQuizStep] = useState(-1);
  const [quizChoice, setQuizChoice] = useState(-1);
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState(
    Array(numberOfQuestions - 1).fill(-1)
  );
  const [scaledAnswers, setScaledAnswers] = useState(Array(6).fill(-1));
  const [tendency, setTendency] = useState("none");

  const scoreAnswers = function () {
    const tendencies = { upholder: 0, questioner: 0, obliger: 0, rebel: 0 };
    multipleChoiceAnswers.forEach((answer, i) => {
      switch (i) {
        case 0:
          if (answer === 0) {
            tendencies.upholder++;
          } else if (answer === 1) {
            tendencies.questioner++;
          } else if (answer === 2) {
            tendencies.obliger++;
          } else if (answer === 3) {
            tendencies.rebel++;
          }
          break;
        case 1:
          if (answer === 0) {
            tendencies.questioner++;
          } else if (answer === 1) {
            tendencies.obliger++;
          } else if (answer === 2) {
            tendencies.rebel++;
          } else if (answer === 3) {
            tendencies.upholder++;
          }
          break;
        case 2:
          if (answer === 0) {
            tendencies.questioner++;
          } else if (answer === 1) {
            tendencies.rebel++;
          } else if (answer === 2) {
            tendencies.obliger++;
          } else if (answer === 3) {
            tendencies.upholder++;
          }
          break;
        case 3:
        case 4:
          if (answer === 0) {
            tendencies.upholder++;
          } else if (answer === 1) {
            tendencies.questioner++;
          } else if (answer === 2) {
            tendencies.obliger++;
          } else if (answer === 3) {
            tendencies.rebel++;
          }
          break;
        case 5:
          if (answer === 0) {
            tendencies.obliger++;
          } else if (answer === 1) {
            tendencies.upholder++;
          } else if (answer === 2) {
            tendencies.rebel++;
          } else if (answer === 3) {
            tendencies.questioner++;
          }
          break;
      }
    });

    scaledAnswers.forEach((answer, i) => {
      if (answer === 1) {
        switch (i) {
          case 0:
            tendencies.rebel++;
            break;
          case 1:
            tendencies.questioner++;
            break;
          case 2:
            tendencies.obliger++;
            break;
          case 3:
            tendencies.rebel++;
            break;
          case 4:
            tendencies.obliger++;
            break;
          case 5:
            tendencies.rebel++;
            break;
        }
      }
    });

    const finalTendency = Object.keys(tendencies).reduce(
      (a, b) => (tendencies[a] > tendencies[b] ? a : b) // TODO: typing
    );
    setTendency(finalTendency);

    /*
    [DEBUG] scoring:
    console.log(tendencies);
    console.log(finalTendency);
    */

    /*
    ANSWER KEY
      0 - upholder questioner obliger rebel
      1 - q o r u
      2 - q r o u
      3 - u q o r
      4 - u q o r
      5 - o u r q

      scaled - tend to agree
      7 0 -  rebel
      8 1 -  q
      9 2 -  o
      10 3 - r
      11 4 - o
      12 5 - r
      13 - q // not in the online quiz
    */
  };

  const saveMultipleChoiceAnswer = function ({
    questionIndex,
    choice,
  }: {
    questionIndex: number;
    choice: number;
  }) {
    const newMultipleChoiceAnswers = multipleChoiceAnswers;
    newMultipleChoiceAnswers[questionIndex] = choice;
    setMultipleChoiceAnswers(newMultipleChoiceAnswers);
  };

  const saveScaledAnswer = function ({
    questionIndex,
    choice,
  }: {
    questionIndex: number;
    choice: number;
  }) {
    const newScaledAnswers = [...scaledAnswers];
    newScaledAnswers[questionIndex] = choice;
    setScaledAnswers(newScaledAnswers);
  };

  const increaseQuizStep = function () {
    switch (quizStep) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        saveMultipleChoiceAnswer({
          questionIndex: quizStep,
          choice: quizChoice,
        });
        break;
      case 6:
        scoreAnswers();
        break;
    }

    setQuizStep(quizStep + 1);
    setQuizChoice(-1);
  };

  const decreaseQuizStep = function () {
    // It's only ever possible to reach a multiple choice question from pressing Back
    setQuizChoice(multipleChoiceAnswers[quizStep - 1]);
    setQuizStep(quizStep - 1);
  };

  const isNextButtonDisabled = function () {
    // scaled questions
    if (quizStep === 6) {
      return scaledAnswers.includes(-1);
    } else {
      return quizChoice === -1;
    }
  };

  const renderQuizContent = function () {
    switch (quizStep) {
      case -1:
        return <InstructionComponent onProceed={increaseQuizStep} />;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <MultipleChoiceQuestion
            onPress={setQuizChoice}
            question={quizStep}
            selectedChoice={quizChoice}
          />
        );
      case 6:
        return (
          <ScaledQuestion
            scaledAnswers={scaledAnswers}
            onPress={saveScaledAnswer}
            question={quizStep}
          />
        );
      case 7:
        return (
          <Results
            tendency={tendency}
            onProceed={() => navigation.navigate("Root")}
          />
        );
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
      {quizStep >= 0 && quizStep < numberOfQuestions && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: 8,
          }}
        >
          <Dots
            length={numberOfQuestions}
            active={quizStep}
            passiveColor="#AADDEF" // TODO: hardcoded
            activeColor="#005781"
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            {quizStep > 0 && (
              <GRButton
                isIconButton={true}
                isPointingRight={false}
                onPress={decreaseQuizStep}
              />
            )}
            <View style={{ padding: 16 }} />
            {quizStep >= 0 && (
              <GRButton
                disabled={isNextButtonDisabled()}
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
