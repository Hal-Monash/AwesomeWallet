import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const ImportMultiCoinWallet = ({ navigation }: any) => {
  const arraysAreIdentical = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const [seed, onChangeSeed] = useState("");
  const onHandleClick = () => {
    if (
      arraysAreIdentical(
        seed
          .split(/(\s+)/)
          .filter(function (e) {
            return e.trim().length > 0;
          })
          .map((element) => {
            return element.toUpperCase();
          }),
        [
          "Mouse",
          "Believe",
          "Walnut",
          "Slave",
          "Sporadically",
          "Family",
          "Skin",
          "Lobster",
          "Friend",
          "Intact",
          "Twenty",
          "Camera",

          // Mouse Believe Walnut Slave Sporadically Family Skin Lobster Friend Intact Twenty Camera
        ].map((element) => {
          return element.toUpperCase();
        })
      )
    ) {
      navigation.navigate("Your Home Page");
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={seed}
        multiline={true}
        numberOfLines={3}
        style={styles.seedPhrase}
        placeholder="Input your phrase, separate with space"
        blurOnSubmit
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeSeed}
      />
      <button
        style={{
          width: 320,
          height: 40,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 18,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onHandleClick}
      >
        Submit
      </button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { top: 50, flex: 1, alignItems: "center" },
  seedPhrase: {
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
    minHeight: 110,
    height: "auto",
    borderWidth: 1,
    fontFamily: "EuclidCircularB-Regular",
    fontWeight: "400",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
});
export default ImportMultiCoinWallet;
