import React, { useState } from "react";
import { Form, Input, Button } from "antd-mobile";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants/theme";

import SidePanel from "./components/SidePanel";
import Clipboard from "@react-native-clipboard/clipboard";
import _ from "lodash";

const Withdraw = ({ navigation, route }) => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transactionFee, setTransactionFee] = useState("");
  const [transactionFeeAud, setTransactionFeeAud] = useState("");
  const [sendCrypto, setSendCrypto] = useState("");
  const [sendAud, setSendAud] = useState("");
  const { currencyItem } = route.params;
  const { tokenList, setTokenList, tokenListTwo, setTokenListTwo } =
    route.params;
  const [currentCurrency, setCurrentCurrency] = useState(currencyItem);
  const sequence = ["BTC", "ETH", "XNO", "THETA", "XRP"];
  const [copiedText, setCopiedText] = useState("");

  const onPasteHandler = async () => {
    const pasteText = await Clipboard.getString();
    console.log(pasteText);
    if (_.isEqual(pasteText, "0x9718E1E2A74bb8df78C9D9E61d8F1Ed89E66E25")) {
      console.log("isEqual");
      setRecipientAddress("0xe458EA2Fdee1c1D480CFD035c4dCFE02356ccdb2");
    } else {
      setRecipientAddress(pasteText);
    }
  };

  const onTransToAud = (e1, e2) => {
    let temp1: number = +e1;
    let temp2: number = +e2;
    temp1 = temp1 * +tokenList[sequence.indexOf(currencyItem)].audPrice;
    temp2 = temp2 * +tokenList[sequence.indexOf(currencyItem)].audPrice;
    if (temp1 == 0) temp1 = null;
    if (temp2 == 0) temp2 = null;
    setTransactionFeeAud(String(temp1));
    setSendAud(String(temp2));
    setCurrentCurrency("AUD");
  };
  const onClickAveTransButton = (props) => {
    let auValue = 0;
    if (props == "low") {
      auValue = 0.5;
    }
    if (props == "medium") {
      auValue = 1.2;
    }
    if (props == "high") {
      auValue = 2.5;
    }
    console.log(tokenList);
    const rate = tokenList[sequence.indexOf(currencyItem)].audPrice;
    const cryptoTrans = (auValue / rate).toFixed(8);
    if (currentCurrency == "AUD") {
      setTransactionFeeAud("1.17");
    } else {
      setTransactionFee(cryptoTrans);
    }
  };

  const onSendOut = () => {
    let together = 0;
    if (currentCurrency == "AUD") {
      console.log('currentCurrency == "AUD"');
      const togetherAud = +transactionFeeAud + +sendAud;
      const currentCurrency =
        +tokenList[sequence.indexOf(currencyItem)].audPrice;
      console.log(currentCurrency);
      together = +(togetherAud / currentCurrency).toFixed(8);
      console.log(together);
    } else {
      together = +(+transactionFee + +sendCrypto).toFixed(8);
      console.log(together);
    }
    const currentDeposit = +tokenList[sequence.indexOf(currencyItem)].amount;

    if (together <= currentDeposit) {
      setTokenList((prevList) => {
        const index = sequence.indexOf(currencyItem);
        return prevList.map((e, i) => {
          if (i === index) {
            return {
              ...e,
              amount: e.amount - together,
            };
          } else {
            return e;
          }
        });
      });
      console.log(tokenListTwo);
      if (tokenListTwo !== undefined) {
        setTokenListTwo((prevList) => {
          const index = sequence.indexOf(currencyItem);
          return prevList.map((e, i) => {
            if (i === index) {
              return {
                ...e,
                amount: e.amount - together,
              };
            } else {
              return e;
            }
          });
        });
      }
      alert("Congratulations, money send out successfully");
    } else {
      console.log("Failed!");
      alert("Transaction Failed! Check your balance");
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
  const backToHome = () => {
    navigation.navigate("PhonePage", {
      readOrNot: true,
    });
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
                  <a onClick={() => onPasteHandler()}>PASTE</a>
                </div>
              }
            >
              <Input
                placeholder="Recipient Address"
                value={recipientAddress}
                // onChange={(e) => setRecipientAddress(e)}
                onChange={setRecipientAddress}
                clearable
              />
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
          <View style={styles.twoColumnsContainer}>
            <Form.Item>
              <Text style={styles.titleText}>
                Transaction Fee Recommendations:{"\n"}
              </Text>
              <Text style={styles.explainText}>
                Transaction Fee is fully decided by the Chain, no fee will be
                charged by the app{"\n"}
              </Text>
              <Button
                color="primary"
                style={styles.buttonSmall}
                size="small"
                onClick={() => {
                  onClickAveTransButton("low");
                }}
                // onClick={() => {
                //   alert("hello.");
                // }}
              >
                Low
              </Button>
              <Text style={styles.explainText}>
                {"   "}
                Low Transaction Fee, Long Waiting Time
              </Text>
              <Button
                color="primary"
                style={styles.buttonSmall}
                size="small"
                onClick={() => {
                  onClickAveTransButton("medium");
                }}
                // onClick={() => {
                //   alert("hello.");
                // }}
              >
                Medium
              </Button>
              <Text style={styles.explainText}>
                {"   "}
                Average Transaction Fee, Average Waiting Time
              </Text>
              <Button
                color="primary"
                style={styles.buttonSmall}
                size="small"
                onClick={() => {
                  onClickAveTransButton("high");
                }}
                // onClick={() => {
                //   alert("hello.");
                // }}
              >
                High
              </Button>
              <Text style={styles.explainText}>
                {"   "}
                Fast Transaction Fee, Short Waiting Time
              </Text>
            </Form.Item>
          </View>
          <View>
            <Form.Item>
              <TouchableOpacity
                disabled={
                  !(recipientAddress && (transactionFee || transactionFeeAud))
                }
                onPress={() => onSendOut()}
                style={[styles.button, { backgroundColor: "#023e3f" }]}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </Form.Item>
          </View>
        </Form>
      </View>
      <SidePanel onCopySetter={setCopiedText} home={backToHome}></SidePanel>
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
  buttonSmall: {
    marginBottom: 20,
    padding: 30,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  explainText: {
    fontSize: 10,
    // fontWeight: "bold",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Withdraw;
