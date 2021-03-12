import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

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
    <TouchableOpacity disabled={disabled} onPress={onPress}>
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
          opacity: disabled ? 0.3 : 1,
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
