import { useState } from "react";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import SidePanel from "./components/SidePanel";

const Consent = ({ navigation }: any) => {
  const [agreeOne, setAgreeOne] = useState(false);
  const [agreeTwo, setAgreeTwo] = useState(false);
  const [agreeThree, setAgreeThree] = useState(false);

  const checkboxHandlerOne = () => {
    setAgreeOne(!agreeOne);
  };
  const checkboxHandlerTwo = () => {
    setAgreeTwo(!agreeTwo);
  };
  const checkboxHandlerThree = () => {
    setAgreeThree(!agreeThree);
  };

  return (
    <View style={styles.twoColumnsContainer}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="agreeOne"
              onChange={checkboxHandlerOne}
            />
            <label htmlFor="agree">
              {" "}
              If I lose my secret phrase, my funds will be lost forever
            </label>
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="agreeTwo"
              onChange={checkboxHandlerTwo}
            />
            <label htmlFor="agree">
              {" "}
              If I expose or share my secret phrase to anybody, my funds can get
              stolen
            </label>
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="agreeThree"
              onChange={checkboxHandlerThree}
            />
            <label htmlFor="agree">
              {" "}
              it is my full responsibility to keep my secret phrase secure
            </label>
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
            disabled={!(agreeOne && agreeTwo && agreeThree)}
            className="btn"
            onClick={() => navigation.navigate("Your Secret Phrase")}
          >
            Continue
          </button>
        </View>
      </View>
      <SidePanel></SidePanel>
    </View>
  );
};

const styles = StyleSheet.create({
  twoColumnsContainer: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // alignItems: "flex-start",
  },
  ContainerOne: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    // alignItems: "center",
  },
  ContainerTwo: {
    flex: 1,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 50,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  buttonContainer: {
    bottom: 100,
    flexDirection: "row",
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#1cb278",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Consent;
