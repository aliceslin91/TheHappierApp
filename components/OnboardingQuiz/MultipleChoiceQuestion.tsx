import React from "react";
import { Text, TouchableOpacity, View, Touchable } from "react-native";

import styles from "../../constants/BaseStyle";

export default function MultipleChoiceQuestion({
  question,
  selectedChoice,
  onPress,
}: {
  question: number;
  selectedChoice: number;
  onPress: any; // TODO: typing
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontSize: 12 }]}>{question} of 7</Text>
      <Text style={styles.header}>{questionBank[question - 1]}</Text>

      {answerBank[question - 1].map((answer, i) => {
        return (
          <TouchableOpacity onPress={() => onPress(i)}>
            <View key={i} style={styles.contentContainer}>
              <Text
                key={i}
                style={[
                  styles.paragraph,
                  selectedChoice === i ? { fontWeight: "bold" } : {},
                ]}
              >
                {answer}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const questionBank = [
  "Have you kept a New Year’s resolution where you weren’t accountable to anyone—a resolution like drinking more water or keeping a journal?",
  "Which statement best describes your view about your commitments to yourself?",
  "At times, we feel frustrated by ourselves. Are you most likely to feel frustrated because…",
  "When you’ve formed a healthy habit in the past, what helped you stick to it?",
  "If people complain about your behavior, you’d be least surprised to hear them say…",
  "Which description suits you best?",
];

const answerBank = [
  [
    "Sure. I’m good at keeping New Year’s resolutions, even ones that no one knows about but me.",
    "Sure, I’m good at keeping resolutions, but I make them whenever the time seems right. I wouldn’t wait for the New Year; January 1 is an arbitrary date.",
    "I’ve had trouble with that kind of resolution, so I’m not inclined to make one, whether at the New Year or any time. When I’m only helping myself, I often struggle.",
    "No. I hate to bind myself in any way.",
  ],
  [
    "I make a commitment to myself only if I'm convinced that it really makes good sense to do it.",
    "If someone else is holding me accountable for my commitments, I’ll meet them—but if no one knows except me, I struggle.",
    "I bind myself as little as possible.",
    "I take my commitments to myself as seriously as my commitments to other people.",
  ],
  [
    "My constant need for more information exhausts me.",
    "As soon as someone expects me to do something, I don’t want to do it.",
    "I can take time for other people, but I can’t take time for myself.",
    "I can’t take a break from my usual habits, or violate the rules, even when I want to.",
  ],
  [
    "I'm pretty good at sticking to habits, even when no one else cares.",
    "Doing a lot of research and customization about why and how I might keep that habit.",
    "I could stick to a good habit only when I was answerable to someone else.",
    "Usually I don’t choose to bind myself in advance to a particular course of action.",
  ],
  [
    "You stick to your good habits, ones that matter only to you, even when it’s inconvenient for someone else.",
    "You ask too many questions.",
    "You’re good at taking the time when others ask you to do something, but you’re not good at taking time for yourself.",
    "You only do what you want to do, when you want to do it.",
  ],
  [
    "Disciplined—sometimes, even when it doesn’t make sense.",
    "Asks necessary questions.",
    "Puts others—clients, family, neighbors, coworkers—first.",
    "Refuses to be bossed by others.",
  ],
];
