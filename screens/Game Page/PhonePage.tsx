import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { createStore } from "state-pool";
import { store } from "../../constants/note";
const PhonePage = ({ route, navigation }) => {
  const phase = route.params?.phase;
  const [iconChoice, setIconChoice] = useState(false);
  const [copyText, setCopyText] = useState("");

  const [logStatus, setLogStatus, updateLogStatus] =
    store.useState("accountLogged");

  useEffect(() => {
    console.log(iconChoice);
    if (route.params != null) {
      const readOrNot = route.params.readOrNot;
      console.log(readOrNot);
      setIconChoice(readOrNot);
    }
  }, [route.params]);

  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <View style={{ width: width, height: height }}>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/images/phone.png")}
        />
        {!iconChoice && (
          <TouchableOpacity
            style={styles.mail}
            onPress={() =>
              navigation.navigate("Mail Page", { mail: setCopyText })
            }
          >
            <Image
              style={styles.mail}
              source={require("../../assets/images/mailWithOneUnread.png")}
            />
          </TouchableOpacity>
        )}
        {!iconChoice && (
          <Text
            onPress={() =>
              navigation.navigate("Mail Page", { mail: setCopyText })
            }
            style={styles.mailWord}
          >
            Mail
          </Text>
        )}
        {iconChoice && (
          <TouchableOpacity
            style={styles.mail}
            onPress={() => navigation.navigate("Mail Page")}
            // onPress={() => navigation.navigate("MailList")}
          >
            <Image
              style={styles.mail}
              source={require("../../assets/images/mailNoRead.png")}
            />
          </TouchableOpacity>
        )}
        {iconChoice && (
          <Text
            // onPress={() => navigation.navigate("MailList")}
            onPress={() => navigation.navigate("Mail Page")}
            style={styles.mailWord}
          >
            Mail
          </Text>
        )}
      </View>

      {typeof logStatus === "string" && logStatus.length === 0 ? (
        <TouchableOpacity
          style={styles.market}
          // onPress={() => navigation.navigate("Send To", { currencyItem: "BTC" })}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.mail}
            source={require("../../assets/images/coinWallet.png")}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.market}
          // onPress={() => navigation.navigate("Send To", { currencyItem: "BTC" })}
          onPress={() =>
            navigation.navigate("Your Home Page", { account: logStatus })
          }
        >
          <Image
            style={styles.mail}
            source={require("../../assets/images/coinWallet.png")}
          />
        </TouchableOpacity>
      )}

      {typeof logStatus === "string" && logStatus.length === 0 ? (
        <Text
          onPress={() => navigation.navigate("Home")}
          style={styles.walletWord}
        >
          Wallet
        </Text>
      ) : (
        <Text
          onPress={() =>
            navigation.navigate("Your Home Page", { account: logStatus })
          }
          style={styles.walletWord}
        >
          Wallet
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch",
  },
  mail: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "30%",
    left: "10%",
    resizeMode: "stretch",
  },
  walletWord: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "27%",
    left: "27%",
    resizeMode: "stretch",
    color: "white",
  },
  mailWord: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "27%",
    left: "13%",
    resizeMode: "stretch",
    color: "white",
  },
  market: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "30%",
    left: "25%",
    resizeMode: "stretch",
  },
  container: {
    flex: 1,
  },
});
export default PhonePage;
