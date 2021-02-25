import React from "react";
import { Button } from "react-native";

import { Text, View } from "../Themed";

export default function InstructionComponent() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Some instructions go here</Text>
      <Button title="Next" onPress={null} />
    </View>
  );
}
