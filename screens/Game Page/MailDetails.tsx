import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { emailContent } from "../../constants/emailContent";
import SidePanel from "../components/SidePanel";

const MailDetails = ({ route, navigation }) => {
  const state = emailContent;
  const page = 1;

  const senderInitial = () => {
    const from = state.mails[route.params.mailIndex]?.headers?.from;
    return from[0];
  };

  const generateColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color === "ffffff") {
      color = generateColor();
    }
    return color;
  };

  const imageUri = () => {
    return "https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png";
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({
              name: "PhonePage",
              params: { readOrNot: true },
            });
          }}
        >
          <MaterialIcons name="arrow-back" size={25} color="#323232" />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <MaterialCommunityIcons
            name="archive-arrow-down-outline"
            size={25}
            color="#323232"
          />
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={25}
            style={styles.rightIcon}
            color="#323232"
          />
          <FontAwesome
            name="envelope-o"
            size={22}
            style={styles.rightIcon}
            color="#323232"
          />
          <MaterialIcons
            name="more-vert"
            size={25}
            style={styles.rightIcon}
            color="#323232"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.twoColumnsContainer}>
      <View style={styles.ContainerOne}>
        <Header />
        <View style={styles.bodyWrapper}>
          <View style={styles.mailSubjectSection}>
            <View style={styles.mailSubjectRow}>
              <Text style={styles.mailSubjectText}>
                {route.params?.mailIndex != null
                  ? state.mails[route.params.mailIndex].headers.date
                  : "Talking Topic"}
              </Text>
              <Text style={styles.mailTag}>Inbox</Text>
            </View>
            <MaterialIcons
              name="star-outline"
              size={27}
              color="#808080"
              style={styles.menuIcon}
            />
          </View>
          <View style={styles.mailInfoSection}>
            {route.params?.mailIndex != null ? (
              state.mails[route.params.mailIndex].headers.senderLogo ? (
                <Image
                  style={styles.senderLogo}
                  source={{
                    uri: state.mails[route.params.mailIndex].headers.senderLogo,
                  }}
                />
              ) : (
                <View
                  style={[
                    styles.senderInitialWrapper,
                    {
                      backgroundColor: `#${generateColor()}`,
                    },
                  ]}
                >
                  <Text style={styles.senderInitialText}>
                    {senderInitial()}
                  </Text>
                </View>
              )
            ) : (
              <Image
                style={styles.senderLogo}
                source={{
                  uri: imageUri(),
                }}
              />
            )}

            <View style={styles.fromRow}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.fromText}
              >
                {route.params?.mailIndex != null
                  ? state.mails[route.params.mailIndex].headers.from
                  : "Grand Pa"}
              </Text>
              <View style={styles.toRow}>
                <Text style={styles.toText}>to me</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={25}
                  color="#323232"
                />
              </View>
            </View>
            <Text style={styles.dateText}>01/05/2022</Text>
            <View style={styles.rightMailInfo}>
              <AntDesign name="back" size={25} color="#323232" />
              <MaterialIcons
                name="more-vert"
                size={25}
                style={styles.rightIcon}
                color="#323232"
              />
            </View>
          </View>
          <View
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {" "}
            {route.params?.mailIndex != null ? (
              state.mails[route.params.mailIndex].body
            ) : (
              <Text>
                Dear My Grandson
                {"\n"}
                {"\n"}
                Grandpa has decided to live a primitive lifestyle on a desert
                island, don't worry about me.
                {"\n"}
                One special thing I left for you are these ten phrases, they are
                the secret phrase for a cryptocurrency wallet. It has 1 ETH, 0.1
                BTC, and 100 XRP in it. I always believe one phrase, not your
                wallet not your coin, now you have to register your own wallet
                and transfer all the coins into your own wallet.
                {"\n"}Now is the most important part, this is the secret phrase
                of the wallet: "Mouse Believe Walnut Slave Sporadically Family
                Skin Lobster Friend Intact Twenty Camera", since I shared this
                with you in email. The wallet maybe is not safe now! Go act!{" "}
                {"\n"}
                Love you.
                {"\n"} {"\n"}Regards
                {"\n"}Grandpa
              </Text>
            )}
          </View>
        </View>
      </View>
      <SidePanel indexNumber={page}></SidePanel>
      {/*<SafeAreaView style={styles.ContainerTwo}>*/}
      {/*  <View style={styles.IconContainer}>*/}
      {/*    <MaterialCommunityIcons*/}
      {/*      name="cellphone-screenshot"*/}
      {/*      size={30}*/}
      {/*      color="#323232"*/}
      {/*    />*/}
      {/*    <View>Screen Shot</View>*/}
      {/*  </View>*/}
      {/*  <View style={styles.IconContainer}>*/}
      {/*    <AntDesign name="folder1" size={30} color="#323232" />*/}
      {/*    <View>Folder</View>*/}
      {/*  </View>*/}
      {/*</SafeAreaView>*/}
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
  ContainerOne: { width: "90%" },
  ContainerTwo: { fix: 1, width: "10%" },
  IconContainer: { fontSize: 10, marginTop: 80 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcon: {
    marginLeft: 20,
  },
  bodyWrapper: {
    padding: 16,
  },
  mailSubjectSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  mailSubjectRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "83%",
  },
  mailSubjectText: { color: "#323232", fontSize: 17, marginRight: 10 },
  mailTag: {
    backgroundColor: "#EEEEEE",
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: "center",
  },
  mailInfoSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  senderLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  senderInitialWrapper: {
    height: 50,
    width: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  senderInitialText: {
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  fromRow: {
    width: "40%",
  },
  fromText: {
    fontSize: 15,
  },
  toRow: { display: "flex", flexDirection: "row", alignItems: "center" },
  toText: {
    opacity: 0.7,
  },
  dateText: {
    fontSize: 12,
    marginBottom: "auto",
    opacity: 0.8,
  },
  rightMailInfo: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginRight: 10,
  },
});

export default MailDetails;
