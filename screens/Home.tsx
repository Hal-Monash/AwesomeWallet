import * as React from "react";
import { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  PixelRatio,
} from "react-native";
import SidePanel from "./components/SidePanel";

const Home = ({ navigation }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;

  return (
    <View style={styles.twoColumnsContainer}>
      <SafeAreaView style={[styles.ContainerOne]}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/A coin.jpeg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Welcome to the Wallet Simulator</Text>
              <Text style={styles.paragraph}>
                Learn how to use a cryptocurrency wallet securely from here
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/A coin.jpeg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Private and secure</Text>
              <Text style={styles.paragraph}>
                Private keys never leave your device
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/A coin.jpeg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>All assets in one place</Text>
              <Text style={styles.paragraph}>
                View and store your assets seamlessly
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/A coin.jpeg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Trade assets</Text>
              <Text style={styles.paragraph}>
                Trade your assets anonymously
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/A coin.jpeg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Explore decentralized apps</Text>
              <Text style={styles.paragraph}>
                Earn, explore, utilize, spend, trade, and more
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Consent")}
            // onPress={() => navigation.navigate("PhonePage")}
            style={[styles.button, { backgroundColor: "#023e3f" }]}
          >
            <Text style={styles.buttonText}>Create A New Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Select Your Wallet Type")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>I already have a wallet</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SidePanel></SidePanel>
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
  IconContainer: { fontSize: 10, marginTop: 80 },
  paginationWrapper: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    textAlignVertical: "center",
    textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  buttonContainer: {
    bottom: 100,
    flexDirection: "row",
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#1cb278",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Home;
