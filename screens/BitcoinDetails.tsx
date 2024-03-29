import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HeaderBar, CurrencyLabel, TextButton } from "../parts";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import TransactionHistory from "../parts/TransactionHistory";
import SidePanel from "./components/SidePanel";

const BitcoinDetails = ({ route, navigation }) => {
  const sequence = ["BTC", "ETH", "XNO", "THETA", "XRP"];
  const { tokenList, setTokenList, currencyItem } = route.params;
  const [selectedCurrency, setSelectedCurrency] = useState(tokenList);
  const backToHome = () => {
    navigation.navigate("PhonePage", {
      readOrNot: true,
    });
  };
  function renderTrade() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <CurrencyLabel
          icon={currencyItem.icon}
          currency={currencyItem.description}
          code={currencyItem.currency}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>
            {selectedCurrency[sequence.indexOf(currencyItem.currency)].amount}
            {currencyItem.currency}
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            {(
              selectedCurrency[sequence.indexOf(currencyItem.currency)].amount *
              currencyItem.audPrice
            ).toFixed(2)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Send To", {
                // currencyItem: selectedCurrency?.currency,
                currencyItem: currencyItem.currency,
                tokenList: tokenList,
                setTokenList: setTokenList,
                tokenListTwo: selectedCurrency,
                setTokenListTwo: setSelectedCurrency,
              })
            }
            style={[styles.button, { backgroundColor: "#023e3f" }]}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Receive", {
                currencyItem: currencyItem,
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory
        customContainerStyle={{
          ...styles.shadow,
        }}
        history={[]}
      />
    );
  }

  return (
    <View style={styles.twoColumnsContainer}>
      <SafeAreaView style={{ flex: 1 }}>
        {/*<HeaderBar right={true} />*/}
        <ScrollView>
          <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
            {renderTrade()}
            {renderTransactionHistory()}
          </View>
        </ScrollView>
      </SafeAreaView>
      <SidePanel home={backToHome}></SidePanel>
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
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#1cb278",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default BitcoinDetails;
