import { SafeAreaView, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";

const SidePanel = () => {
  return (
    <SafeAreaView style={styles.ContainerTwo}>
      <View style={styles.IconContainer}>
        <MaterialCommunityIcons
          name="cellphone-screenshot"
          size={30}
          color="#323232"
        />
        <View>Snipping</View>
      </View>
      <View style={styles.IconContainer}>
        <AntDesign name="folder1" size={30} color="#323232" />
        <View>Folder</View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  twoColumnsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  ContainerOne: { width: "90%" },
  ContainerTwo: { width: "10%" },
  IconContainer: { fontSize: 10, marginTop: 80, alignItems: "center" },
});

export default SidePanel;
