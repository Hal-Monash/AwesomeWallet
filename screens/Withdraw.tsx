import React, { useState } from "react";
import { Form, Input } from "antd-mobile";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import { newDummyData } from "../index";
import { multiCoinStatus } from "../constants/newDummy";
import SidePanel from "./components/SidePanel";

const Withdraw = ({ route }) => {
  const [transactionFee, setTransactionFee] = useState("");
  const [transactionFeeAud, setTransactionFeeAud] = useState("");
  const [sendCrypto, setSendCrypto] = useState("");
  const [sendAud, setSendAud] = useState("");
  const { currencyItem } = route.params;
  const [currentCurrency, setCurrentCurrency] = useState(currencyItem);
  const sequence = ["BTC", "ETH", "XNO", "THETA", "XRP"];
  const onTransToAud = (e1, e2) => {
    let temp1: number = +e1;
    let temp2: number = +e2;
    temp1 =
      temp1 *
      +newDummyData.multiCoinStatus[sequence.indexOf(currencyItem)].audPrice;
    temp2 =
      temp2 *
      +newDummyData.multiCoinStatus[sequence.indexOf(currencyItem)].audPrice;
    if (temp1 == 0) temp1 = null;
    if (temp2 == 0) temp2 = null;
    setTransactionFeeAud(String(temp1));
    setSendAud(String(temp2));
    setCurrentCurrency("AUD");
  };
  const onSendOut = () => {
    if (currentCurrency == "AUD") {
      const togetherAud = +transactionFeeAud + +sendAud;
      const currentDeposit =
        +newDummyData.multiCoinStatus[sequence.indexOf(currencyItem)].AUD;
      if (togetherAud <= currentDeposit) {
        console.log("Congratulations!");
        // Alert.alert("Congratulations!", "Money Send Out", [
        //   { text: "OK", onPress: () => console.log("OK Pressed") },
        // ]);
      } else {
        console.log("Failed!");
        // Alert.alert("Transaction Failed!", "You dont have enough money", [
        //   { text: "OK", onPress: () => console.log("OK Pressed") },
        // ]);
      }
    } else {
      const together = +transactionFee + +sendCrypto;
      const currentDeposit =
        +newDummyData.multiCoinStatus[sequence.indexOf(currencyItem)].amount;
      console.log(currentDeposit);
      if (together <= currentDeposit) {
        console.log("Congratulations!");
        // Alert.alert("Congratulations!", "Money Send Out", [
        //   { text: "OK", onPress: () => console.log("OK Pressed") },
        // ]);
      } else {
        console.log("Failed!");
        // Alert.alert("Transaction Failed!", "You dont have enough money", [
        //   { text: "OK", onPress: () => console.log("OK Pressed") },
        // ]);
      }
    }
  };
  const onTransToCrypto = (e) => {
    if (currentCurrency == "AUD") {
      let temp: number = +e;
      temp = temp % 1046.48;
      if (temp == 0) temp = null;
      if (e.toString() == transactionFee) {
        setTransactionFee(String(temp));
        setCurrentCurrency(currencyItem);
      }
      if (e.toString() == sendCrypto) {
        setSendCrypto(String(temp));
        setCurrentCurrency(currencyItem);
      }
    }
  };

  return (
    <View style={styles.twoColumnsContainer}>
      <View
        style={{
          width: "80%",
          marginTop: SIZES.padding,
          // marginHorizontal: SIZES.padding,
          marginLeft: SIZES.padding,
          marginRight: 12,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <Form layout="horizontal">
          <View>
            <Form.Item
              extra={
                <div>
                  <a>PASTE</a>
                </div>
              }
            >
              <Input placeholder="Recipient Address" clearable />
            </Form.Item>
          </View>
          {currentCurrency != "AUD" && (
            <View>
              <Form.Item
                extra={
                  <div>
                    <a style={{ marginRight: 20 }}>MAX </a>
                    <a
                      onClick={() => {
                        onTransToAud(transactionFee, sendCrypto);
                      }}
                    >
                      {currentCurrency}
                    </a>
                  </div>
                }
              >
                <Input
                  type={"number"}
                  placeholder="Amount"
                  clearable
                  value={sendCrypto}
                  onChange={(e) => setSendCrypto(e)}
                />
              </Form.Item>
            </View>
          )}
          {currentCurrency == "AUD" && (
            <View>
              <Form.Item
                extra={
                  <div>
                    <a style={{ marginRight: 20 }}>MAX </a>
                    <a
                      onClick={() => {
                        onTransToCrypto(sendCrypto);
                      }}
                    >
                      {currentCurrency}
                    </a>
                  </div>
                }
              >
                <Input
                  placeholder="Amount"
                  clearable
                  type={"number"}
                  value={sendAud}
                  onChange={(e) => setSendAud(e)}
                />
              </Form.Item>
            </View>
          )}
          {currentCurrency != "AUD" && (
            <View>
              <Form.Item
                extra={
                  <div>
                    <a
                      onClick={() => {
                        onTransToAud(transactionFee, sendCrypto);
                      }}
                    >
                      {currentCurrency}
                    </a>
                  </div>
                }
              >
                <Input
                  placeholder="Transaction Fee"
                  clearable
                  type={"number"}
                  onChange={(e) => setTransactionFee(e)}
                  value={transactionFee}
                />
              </Form.Item>
            </View>
          )}
          {currentCurrency == "AUD" && (
            <View>
              <Form.Item
                extra={
                  <div>
                    <a onClick={() => onTransToCrypto(transactionFee)}>AUD</a>
                  </div>
                }
              >
                <Input
                  placeholder="Transaction Fee"
                  clearable
                  type={"number"}
                  onChange={(e) => setTransactionFeeAud(e)}
                  value={transactionFeeAud}
                />
              </Form.Item>
            </View>
          )}
          <View>
            <Form.Item>
              <TouchableOpacity
                onPress={() => onSendOut()}
                style={[styles.button, { backgroundColor: "#023e3f" }]}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </Form.Item>
          </View>
        </Form>
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
    justifyContent: "center",
    // alignItems: "center",
  },
  ContainerTwo: {
    flex: 1,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
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

export default Withdraw;
