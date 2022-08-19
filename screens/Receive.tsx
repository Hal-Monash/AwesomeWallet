import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Image } from "antd-mobile";
import { COLORS, SIZES, FONTS } from "../constants/theme";

const Receive = ({ route }) => {
  const { currencyItem } = route.params;

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
          paddingBottom: 500,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
            Your {currencyItem.description} address
          </Text>
          <Image
            src={currencyItem.QR}
            // style={{ borderRadius: 20 }}
            fit="cover"
            width={250}
            height={250}
          ></Image>
          <View
            style={{
              marginLeft: 200,
              marginRight: 200,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: "500",
                paddingTop: "300",
                color: COLORS.black,
              }}
            >
              Your address: {currencyItem.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Receive;
