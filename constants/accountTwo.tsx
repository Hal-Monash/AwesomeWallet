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
    amount: 0,
    currency: "BTC",
    audPrice: 33702.48,
    currentPrice: "$19,224.20  -1.01%",
    icon: require("../assets/CryptoIcons/btc.png"),
    address: "muNZyQqd56apEjMvrzBM3Jkv9UztVD8GY6",
    QR: require("../assets/images/cryptoQR/btQR.png"),
  },
  {
    id: 2,
    description: "Ethereum",
    amount: 0,
    currency: "ETH",
    audPrice: 2652.99,
    currentPrice: "$1046.48  -0.72%",
    icon: require("../assets/CryptoIcons/eth.png"),
    address: "0x7256A8057DC2B6C7AD0B7DA118013613E241A440",
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
    address: "nano_3xcgdeqkxsk2ksi92jj2id92mk1000dk22bei6gekk",
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
    address: "0x4bfaBsll223l0302kcddk33011kd22d34276C710",
    QR: require("../assets/images/cryptoQR/thetaQR.png"),
  },
  {
    id: 5,
    description: "Ripple",
    amount: 0,
    currency: "XRP",
    audPrice: 0.537284,
    currentPrice: "$0.32  +2.15%",
    icon: require("../assets/CryptoIcons/xrp.png"),
    address: "raULs9ussvTqsERwU82nNw2ls223Es9EZP",
    QR: require("../assets/images/cryptoQR/RippleQR.png"),
  },
];

const accountTwo = {
  portfolio,
  multiFunctions,
  multiCoinStatus,
};

export default accountTwo;
