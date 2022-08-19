import React, { CSSProperties } from "react";
import { List, Image } from "antd-mobile";
import { List as VirtualizedList, AutoSizer } from "react-virtualized";
const crypto = {
  avatar: require("../assets/CryptoIcons/crpto.png"),
  name: "Multi-Coin Wallet",
};
const eth = {
  avatar: require("../assets/CryptoIcons/eth.png"),
  name: "eth",
};
const btc = {
  avatar: require("../assets/CryptoIcons/btc.png"),
  name: "btc",
};
const nano = {
  avatar: require("../assets/CryptoIcons/nano.png"),
  name: "nano",
};
const theta = {
  avatar: require("../assets/CryptoIcons/theta.png"),
  name: "theta",
};
const xrp = {
  avatar: require("../assets/CryptoIcons/xrp.png"),
  name: "xrp",
};

const data = [crypto];
const data2 = [btc, eth, nano, theta, xrp];

export default ({ navigation }) => {
  const getRowRenderer = (judge) => {
    const dataToUse = judge ? data : data2;
    const navigationSelect = (item) => {
      if (item.name == "Multi-Coin Wallet")
        return () => navigation.navigate("Import Your Multi-Coin Wallet");
      if (item.name == "btc")
        return () => navigation.navigate("Import Your BTC Wallet");
      if (item.name == "eth")
        return () => navigation.navigate("Import Your ETH Wallet");
      if (item.name == "nano")
        return () => navigation.navigate("Import Your Nano Wallet");
      if (item.name == "theta")
        return () => navigation.navigate("Import Your Theta Wallet");
      if (item.name == "xrp")
        return () => navigation.navigate("Import Your XRP Wallet");
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
          onClick={navigationSelect(item)}
          prefix={
            <Image
              src={item.avatar}
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
          }
        >
          {item.name}
        </List.Item>
      );
    };
  };

  return (
    <view>
      <List header="Multi-chain Wallet">
        <AutoSizer disableHeight>
          {({ width }: { width: number }) => (
            <VirtualizedList
              rowCount={1}
              rowRenderer={getRowRenderer(true)}
              width={width}
              height={60}
              rowHeight={60}
              overscanRowCount={10}
            />
          )}
        </AutoSizer>
      </List>
      <List header="Single-Coin Wallet">
        <AutoSizer disableHeight>
          {({ width }: { width: number }) => (
            <VirtualizedList
              rowCount={5}
              rowRenderer={getRowRenderer(false)}
              width={width}
              height={300}
              rowHeight={60}
              overscanRowCount={10}
            />
          )}
        </AutoSizer>
      </List>
    </view>
  );
};
