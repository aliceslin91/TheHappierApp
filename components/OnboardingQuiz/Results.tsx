import React from "react";
import { Text, View } from "react-native";

import styles from "../../constants/BaseStyle";

import GRButton from "../../components/GRButton";

export default function Results({
  tendency,
  onProceed,
}: {
  tendency: string;
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
      <Text style={[styles.header, { alignSelf: "center" }]}>
        {header[tendency]}
      </Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}>{paragraph1[tendency]}</Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}>{paragraph2[tendency]}</Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}>{paragraph3[tendency]}</Text>

      <View style={{ height: 36 }} />
      <GRButton title="Proceed to Happier App" onPress={onProceed} />

      <Text style={[styles.paragraph, { fontStyle: "italic" }]}>
        {tagline[tendency]}
      </Text>
    </View>
  );
}

const header = {
  obliger: "Obliger",
  rebel: "Rebel",
  questioner: "Questioner",
  upholder: "Upholder",
};

const paragraph1 = {
  obliger:
    "Obligers meet outer expectations, but struggle to meet inner expectations. They’re motivated by external accountability; they wake up and think, “What must I do today?”",
  rebel:
    "Rebels resist all expectations, outer and inner alike. They choose to act from a sense of choice, of freedom. Rebels wake up and think, “What do I want to do today?”",
  questioner:
    "Questioners question all expectations, and they respond to an expectation only if they conclude that it makes sense—in essence, they meet only inner expectations. They’re motivated by reason, logic, and fairness. They wake up and think, “What needs to get done today, and why?”",
  upholder:
    "Upholders respond readily to outer and inner expectations. They wake up and think: “What’s on the schedule and the to-do list for today?” They want to know what’s expected of them, and to meet those expectations. They avoid making mistakes or letting people down—including themselves.",
};

const paragraph2 = {
  obliger:
    "Obligers excel at meeting external demands and deadlines and go to great lengths to meet their responsibilities, so they make terrific colleagues, leaders, family members, and friends",
  rebel:
    "Rebels place a high value on authenticity and self-determination, and bring an unshackled spirit to what they do. Rebels work toward their own goals, in their own way, and while they refuse to do what they’re “supposed” to do, they can accomplish their own aims.",
  questioner:
    "They decide for themselves whether a course of action is a good idea, and they resist doing anything that seems to lack purpose.",
  upholder:
    "Others can rely on Upholders, and Upholders can rely on themselves. They’re self-directed and have little trouble meeting commitments, keeping resolutions, or hitting deadlines (they often finish early).",
};

const paragraph3 = {
  obliger:
    "Others rely on them, but because Obligers resist inner expectations, it can be difficult for them to meet their aims for themselves, in the absence of external accountability—to work on a Ph.D. thesis, to attend networking events, to get their car serviced.",
  rebel:
    "It’s important to remember that Rebels can do anything they choose to do, and they seek to live up to their own identity and their values.",
  questioner:
    "Because Questioners want to make well-considered decisions and come to their own conclusions, they tend to be intellectually engaged, and they’re often willing to do exhaustive research.",
  upholder:
    "They generally want to understand the rules, and often they search for the rules beyond the rules—as in the case of art or ethics.",
};

const tagline = {
  obliger:
    "“I do what I have to do. I don’t want to let others down, but I may let myself down.”",
  rebel:
    "“I do what I want, in my own way. If you try to make me do something—even if I try to make myself do something—I’m less likely to do it.”",
  questioner:
    "“I do what I think is best, according to my judgment. If it doesn’t make sense, I won’t do it.”",
  upholder: "“I do what others expect of me—and what I expect from myself.”",
};
