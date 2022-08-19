import React from "react";
import { Text, TouchableOpacity } from "react-native";

import dummyData from "../constants/dummy";
import { COLORS } from "../constants/theme";
import { SIZES } from "../constants/theme";
import { FONTS } from "../constants/theme";
import icons from "../constants/icons";

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...customLabelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
