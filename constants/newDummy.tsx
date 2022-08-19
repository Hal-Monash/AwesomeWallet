import { icons } from "../index";

export const portfolio = {
  balance: "0",
  changes: "0",
};

export const multiFunctions = [
  {
    id: 1,
    function: "Send",
    image: require("../assets/icons/withdraw.png"),
  },
  {
    id: 2,
    function: "Receive",
    image: require("../assets/icons/deposit.png"),
  },
];

export const multiCoinStatus = [
  {
    id: 1,
    description: "Bitcoin",
    amount: 0.1,
    AUD: 1922.42,
    currency: "BTC",
    audPrice: 33702.48,
    currentPrice: "$19,224.20  -1.01%",
    icon: require("../assets/CryptoIcons/btc.png"),
    address: "bc1q9h8s04j47efda844qh5jk04547n6clkkymu69y",
    QR: require("../assets/images/cryptoQR/btQR.png"),
  },
  {
    id: 2,
    description: "Ethereum",
    amount: 1,
    currency: "ETH",
    audPrice: 2652.99,
    currentPrice: "$1046.48  -0.72%",
    icon: require("../assets/CryptoIcons/eth.png"),
    address: "0x9718E1E2A74bb8df78C9D9E61d8F1Ed89E66E25",
    QR: require("../assets/images/cryptoQR/ethQR.png"),
  },
  {
    id: 3,
    description: "Nano",
    amount: 0,
    currency: "XNO",
    audPrice: 1.57,
    currentPrice: "$1.19  -1.23%",
    icon: require("../assets/CryptoIcons/nano.png"),
    address:
      "nano_3xcgdeqk6uoypf4t3cqgribqnfeq5szmx9o6iup1ngi5qnpacrbxbei6gekk",
    QR: require("../assets/images/cryptoQR/nanoQR.png"),
  },
  {
    id: 4,
    description: "Theta Network",
    amount: 0,
    currency: "THETA",
    audPrice: 2.0593,
    currentPrice: "$1.19  -1.29%",
    icon: require("../assets/CryptoIcons/theta.png"),
    address: "0x4bfaf30c3d24131cf7023622f0114370BB76C710",
    QR: require("../assets/images/cryptoQR/thetaQR.png"),
  },
  {
    id: 5,
    description: "Ripple",
    amount: 100,
    currency: "XRP",
    audPrice: 0.537284,
    currentPrice: "$0.32  +2.15%",
    icon: require("../assets/CryptoIcons/xrp.png"),
    address: "raULs9ussvRcrLSjF1Nwm2xsMqrQRs9EZP",
    QR: require("../assets/images/cryptoQR/RippleQR.png"),
  },
];

const newDummyData = {
  portfolio,
  multiFunctions,
  multiCoinStatus,
};

export default newDummyData;
