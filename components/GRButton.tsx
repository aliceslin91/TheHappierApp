import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Colors from "../constants/Colors";

export default function GRButton({
  isIconButton = false,
  isPointingRight = true,
  title,
  onPress,
}: {
  isIconButton?: boolean;
  isPointingRight?: boolean;
  title?: string;
  onPress: any; // TODO: typing
}) {
  if (isIconButton) {
    return <IconButton onPress={onPress} isPointingRight={isPointingRight} />;
  } else {
    return <TextButton title={title} onPress={onPress} />;
  }
}

function IconButton({
  isPointingRight,
  onPress,
}: {
  isPointingRight: boolean;
  onPress: any; // todo
}) {
  const buttonSize = 40; // TODO: for different screen sizes
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: buttonSize,
          height: buttonSize,
          borderRadius: 0.5 * buttonSize,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: Colors.buttonBackground,
          borderWidth: 0.5 * buttonSize,
        }}
      >
        <Icon
          name={isPointingRight ? "chevron-right" : "chevron-left"}
          size={buttonSize - 10}
          color={Colors.buttonForeground}
        />
      </View>
    </TouchableOpacity>
  );
}

function TextButton({
  title,
  onPress,
}: {
  title?: string;
  onPress: any; // TODO: typing
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.buttonBackground,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          padding: 16,
        }}
      >
        <Text
          style={{ color: Colors.buttonText, fontWeight: "bold", fontSize: 16 }}
        >
          {title ? title : "Default button"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
