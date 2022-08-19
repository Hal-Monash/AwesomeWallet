import React from "react";
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

const BitcoinDetails = ({ route, navigation }) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);

  React.useEffect(() => {
    const { currencyItem } = route.params;
    setSelectedCurrency(currencyItem);
  }, []);

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
          icon={selectedCurrency?.icon}
          currency={selectedCurrency?.description}
          code={selectedCurrency?.currency}
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
            {selectedCurrency?.amount} {selectedCurrency?.currency}
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            ${" "}
            {(selectedCurrency?.amount * selectedCurrency?.audPrice).toFixed(2)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Send To", {
                currencyItem: selectedCurrency?.currency,
              })
            }
            style={[styles.button, { backgroundColor: "#023e3f" }]}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Receive", {
                currencyItem: selectedCurrency,
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
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HeaderBar right={true} />*/}
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          {renderTrade()}
          {renderTransactionHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
