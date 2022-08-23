import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  LogBox,
} from "react-native";
import TokenList from "../parts/TokenList";
import { newDummyData, COLORS, SIZES, FONTS, icons, images } from "../index";
import SidePanel from "./components/SidePanel";

const TransactionPage = ({ navigation }) => {
  const [functions, setFunctions] = React.useState(newDummyData.multiFunctions);
  const [TokenLists, setTokenLists] = React.useState(
    newDummyData.multiCoinStatus
  );

  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          navigation.navigate("List", { currentItem: functions[index] })
        }
      >
        {navigation.setOptions({ headerShown: false })}
        <View style={{ flexDirection: "column" }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 45,
                height: 45,
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.function}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.twoColumnsContainer}>
        <View
          style={{
            width: "90%",
            height: 290,
            ...styles.shadow,
          }}
        >
          <ImageBackground
            source={images.banner}
            resizeMode="cover"
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginTop: SIZES.padding,
                width: "90%",
                alignItems: "flex-end",
                paddingHorizontal: SIZES.padding,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigation.navigate("List")}
              >
                <Image
                  source={icons.notification_white}
                  resizeMode="contain"
                  style={{ flex: 1 }}
                />
              </TouchableOpacity>
            </View>
            {/* Balance */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                Your Portfolio Balance
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                ${newDummyData.portfolio.balance}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body5,
                }}
              >
                +{newDummyData.portfolio.changes}% Last 24 hours
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "-15%",
              }}
            >
              <FlatList
                contentContainerStyle={{
                  marginTop: SIZES.base,
                }}
                data={functions}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ImageBackground>
        </View>
        <SidePanel></SidePanel>
      </View>
    );
  }

  function renderTokenList() {
    return (
      <TokenList
        navigation={navigation}
        customContainerStyle={{ ...styles.shadow }}
        history={TokenLists}
      />
    );
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
        {renderTokenList()}
      </View>
    </ScrollView>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  shadow: {
    width: "90%",
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

export default TransactionPage;
