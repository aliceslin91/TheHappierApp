import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function GRButton({
  disabled = false,
  isIconButton = false,
  isPointingRight = true,
  title,
  onPress,
}: {
  disabled?: boolean;
  isIconButton?: boolean;
  isPointingRight?: boolean;
  title?: string;
  onPress: any; // TODO: typing
}) {
  if (isIconButton) {
    return (
      <IconButton
        disabled={disabled}
        onPress={onPress}
        isPointingRight={isPointingRight}
      />
    );
  } else {
    return <TextButton disabled={disabled} title={title} onPress={onPress} />;
  }
}

function IconButton({
  disabled,
  isPointingRight,
  onPress,
}: {
  disabled: boolean;
  isPointingRight: boolean;
  onPress: any; // todo
}) {
  const buttonSize = 40; // TODO: for different screen sizes
  return (
    <Ionicons.Button
      name={isPointingRight ? "chevron-forward" : "chevron-back"}
      size={buttonSize - 10}
      color={Colors.buttonForeground}
      backgroundColor={Colors.buttonBackground}
      borderRadius={buttonSize}
      iconStyle={{ marginRight: 0, opacity: disabled ? 0.3 : 1 }}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

function TextButton({
  disabled,
  title,
  onPress,
}: {
  disabled: boolean;
  title?: string;
  onPress: any; // TODO: typing
}) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.buttonBackground,
          opacity: disabled ? 0.3 : 1,
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
