import React, { CSSProperties } from "react";
import { List, Image } from "antd-mobile";
import { List as VirtualizedList, AutoSizer } from "react-virtualized";
import accountOne from "../constants/accountOne";
import { StyleSheet, View } from "react-native";
import SidePanel from "./components/SidePanel";

const CoinList = ({ route, navigation }) => {
  const dataToUse = accountOne.multiCoinStatus;
  const { currentItem } = route.params;
  const { tokenList, setTokenList } = route.params;

  const getRowRenderer = () => {
    const navigationReceiveSelect = (item) => {
      return () =>
        navigation.navigate("Receive", {
          currencyItem:
            dataToUse[
              dataToUse
                .map((object) => object.currency)
                .indexOf(item.toUpperCase())
            ],
        });
    };
    const navigationSendSelect = (item) => {
      return () =>
        navigation.navigate("Send To", {
          currencyItem: item.toUpperCase(),
          tokenList: tokenList,
          setTokenList: setTokenList,
        });
    };

    return function rowRenderer({
      index,
      key,
      style,
    }: {
      index: number;
      key: string;
      style: CSSProperties;
    }) {
      const item = dataToUse[index];
      return (
        <List.Item
          key={key}
          style={style}
          onClick={
            currentItem.function == "Send"
              ? navigationSendSelect(item.currency.toLowerCase())
              : navigationReceiveSelect(item.currency.toLowerCase())
          }
          prefix={
            <Image
              src={item.icon}
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
          }
        >
          {item.description}
        </List.Item>
      );
    };
  };
  const backToHome = () => {
    navigation.navigate("PhonePage", {
      readOrNot: true,
    });
  };
  return (
    <View style={styles.twoColumnsContainer}>
      <View style={styles.ContainerOne}>
        <List>
          <AutoSizer disableHeight>
            {({ width }: { width: number }) => (
              <VirtualizedList
                rowCount={5}
                rowRenderer={getRowRenderer()}
                width={width}
                height={300}
                rowHeight={60}
                overscanRowCount={10}
              />
            )}
          </AutoSizer>
        </List>
      </View>
      <SidePanel home={backToHome}></SidePanel>
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
    // justifyContent: "center",
    // alignItems: "center",
  },
  ContainerTwo: {
    flex: 1,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoinList;
