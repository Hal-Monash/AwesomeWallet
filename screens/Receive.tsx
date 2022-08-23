import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Image } from "antd-mobile";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import SidePanel from "./components/SidePanel";

const Receive = ({ route }) => {
  const { currencyItem } = route.params;

  return (
    <View style={styles.twoColumnsContainer}>
      <View style={styles.ContainerOne}>
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.padding,
              // marginHorizontal: SIZES.padding,
              marginLeft: SIZES.padding,
              padding: SIZES.padding,
              paddingBottom: 500,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.white,
              ...styles.shadow,
            }}
          >
            <View
              style={{
                // position: "absolute",
                top: "5%",
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
    width: "95%",
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
});

export default Receive;
