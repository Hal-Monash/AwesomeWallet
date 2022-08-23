import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const BottomTab = () => {
  const { state, dispatch } = useContext({
    Consumer: undefined,
    Provider: undefined,
  });
  const { mails, activeTab } = state;

  const getUnreadMails = () => {
    const unreadMails = mails?.reduce((acc, cur) => {
      if (cur?.status === "unread") {
        acc += 1;
      }
      return acc;
    }, 0);

    return unreadMails;
  };

  // const handleChangeRoute = (tab) => {
  //   dispatch({
  //     type: "toggleActiveTab",
  //     payload: { activeTab: tab },
  //   });
  //   navigateToRoute(tab);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={() => navigateToRoute("Inbox")}
        style={styles.leftTab}
      >
        <View style={styles.iconWrapper}>
          {getUnreadMails() > 0 ? (
            <View style={styles.unreadMailIndicator}>
              <Text style={styles.unreadMailText}>{getUnreadMails()}+</Text>
            </View>
          ) : null}
          <SimpleLineIcons
            name="envelope"
            size={20}
            color={"Mail" === activeTab ? "#D93025" : "#808080"}
          />
        </View>
        <Text
          style={"Mail" == activeTab ? styles.tabTextOne : styles.tabTextTwo}
        >
          Mail
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => handleChangeRoute("Meet")}
        style={styles.rightTab}
      >
        <View style={styles.iconWrapper}>
          <MaterialIcons
            name="videocam"
            size={24}
            color={"Meet" === activeTab ? "#D93025" : "#808080"}
          />
        </View>
        <Text
          style={"Meet" == activeTab ? styles.tabTextOne : styles.tabTextTwo}
        >
          Meet
        </Text>
      </TouchableOpacity>
    </View>
  );
};
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabTextOne: {
    color: "#D93025",
    fontSize: 16,
  },
  tabTextTwo: {
    color: "#808080",
    fontSize: 16,
  },
  container: {
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 4,
    marginTop: 1,
  },
  leftTab: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rightTab: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    height: 25,
    position: "relative",
  },
  unreadMailIndicator: {
    position: "absolute",
    top: -10,
    right: -20,
    backgroundColor: "#D93025",
    borderRadius: 10,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  unreadMailText: {
    color: "#fff",
  },
});

export default BottomTab;
