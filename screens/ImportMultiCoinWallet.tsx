import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SidePanel from "./components/SidePanel";

const ImportMultiCoinWallet = ({ navigation }: any) => {
  const [account, setAccount] = useState("");
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
      setAccount("One");
      navigation.navigate("Your Home Page");
    }
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
          "friend",
          "cart",
          "leisure",
          "idea",
          "language",
          "culture",
          "zoo",
          "torch",
          "flight",
          "ridge",
          "movie",
          "timber",
          // friend cart leisure idea language culture zoo torch flight ridge movie timber
        ].map((element) => {
          return element.toUpperCase();
        })
      )
    ) {
      setAccount("Two");
      navigation.navigate("Your Home Page");
    } else {
    }
  };
  return (
    <View style={styles.twoColumnsContainer}>
      <View style={[styles.container, styles.ContainerOne]}>
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

        {/*<View style={{ flex: 1 }}>*/}
        {/*  <button>Paste</button>*/}
        {/*</View>*/}

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
      <SidePanel></SidePanel>
    </View>
  );
};
const styles = StyleSheet.create({
  twoColumnsContainer: {
    flex: 1,
    flexDirection: "row",
    // // flexWrap: "wrap",
    // // alignItems: "flex-start",
  },
  ContainerOne: {
    flex: 1,
    width: "90%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  ContainerTwo: {
    flex: 1,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
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
