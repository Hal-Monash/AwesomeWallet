import React, { CSSProperties } from "react";
import { List, Image } from "antd-mobile";
import { List as VirtualizedList, AutoSizer } from "react-virtualized";
import newDummy from "../constants/newDummy";
import { View } from "react-native";

const CoinList = ({ route, navigation }) => {
  const dataToUse = newDummy.multiCoinStatus;
  const { currentItem } = route.params;
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

  return (
    <View>
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
  );
};

export default CoinList;
