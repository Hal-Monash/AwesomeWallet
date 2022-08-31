import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import SidePanel from "./components/SidePanel";
import { Form, Input } from "antd-mobile";
import Clipboard from "@react-native-clipboard/clipboard";
import { accountOne } from "../index";

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
  const SCREEN_WIDTH = 0.75 * Dimensions.get("window").width;

  const [seed, onChangeSeed] = useState("");
  const onPasteHandler = async () => {
    const pasteText = await Clipboard.getString();
    onChangeSeed(pasteText);
  };
  const backToHome = () => {
    navigation.navigate("PhonePage", {
      readOrNot: true,
    });
  };
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
      navigation.navigate("Your Home Page", {
        account: accountOne.multiCoinStatus,
      });
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
      navigation.navigate("Your Home Page", {
        account: accountOne.multiCoinStatusTwo,
      });
    } else {
    }
  };
  return (
    <View style={styles.twoColumnsContainer}>
      <View style={[styles.container, styles.ContainerOne]}>
        <View
          style={{
            flexDirection: "row",
            width: SCREEN_WIDTH,
            // margin: 10,
            // padding: 4,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 4,
            borderColor: "#888",
            borderRadius: 10,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flex: 4 }}>
            <TextInput
              value={seed}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                fontWeight: "400",
                fontSize: 20,
                minHeight: 150,
                height: "auto",
                fontFamily: "EuclidCircularB-Regular",
                borderWidth: 0,
                borderColor: "white",
              }}
              multiline={true}
              numberOfLines={4}
              placeholder="Input your phrase, separate with space"
              blurOnSubmit
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={onChangeSeed}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              style={{ alignItems: "center", justifyContent: "center" }}
              underlayColor="transparent"
              onPress={onPasteHandler}
            >
              <View>Paste</View>
            </TouchableHighlight>
          </View>
        </View>

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
      <SidePanel home={backToHome}></SidePanel>
    </View>
  );
};
const styles = StyleSheet.create({
  twoColumnsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  ContainerOne: {
    flex: 1,
    width: "90%",
  },
  ContainerTwo: {
    flex: 1,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: { top: 50, flex: 1, alignItems: "center" },
  seedPhrase: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection: "row",
    width: "80%",
  },
});
export default ImportMultiCoinWallet;
