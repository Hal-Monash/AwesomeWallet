import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../index";

const TokenList = ({ navigation, customContainerStyle, history }) => {
  const findRightIcon = (item) => {
    if (item.currency.toString().toLowerCase() == "btc") {
      return icons.btc;
    }
    if (item.currency.toString().toLowerCase() == "eth") {
      return icons.eth;
    }
    if (item.currency.toString().toLowerCase() == "xno") {
      return icons.nano;
    }
    if (item.currency.toString().toLowerCase() == "theta") {
      return icons.theta;
    }
    if (item.currency.toString().toLowerCase() == "xrp") {
      return icons.xrp;
    }
  };
  const choosePage = (item) => {
    if (item.currency.toString().toLowerCase() == "btc") {
      return () => {
        navigation.navigate("BitcoinDetails", { currencyItem: item });
      };
    }
    if (item.currency.toString().toLowerCase() == "eth") {
      return () =>
        navigation.navigate("BitcoinDetails", { currencyItem: item });
    }
    if (item.currency.toString().toLowerCase() == "xno") {
      return () =>
        navigation.navigate("BitcoinDetails", { currencyItem: item });
    }
    if (item.currency.toString().toLowerCase() == "theta") {
      return () =>
        navigation.navigate("BitcoinDetails", { currencyItem: item });
    }
    if (item.currency.toString().toLowerCase() == "xrp") {
      return () =>
        navigation.navigate("BitcoinDetails", { currencyItem: item });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: SIZES.base,
      }}
      onPress={choosePage(item)}
    >
      <Image
        source={findRightIcon(item)}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
        }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>{item.description}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {item.currentPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {item.amount}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            marginLeft: 15,
          }}
        >
          {item.currency}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginTop: 60,
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding - 90,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Tokens</Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={history}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};
export default TokenList;
