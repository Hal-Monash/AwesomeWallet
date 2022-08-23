import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import shortid from "shortid";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import MailInfo from "../components/MailInfo";
import BottomTab from "../components/Header";
import TransitionText from "../components/TransitionText";
import getScreenParent from "../components/ScreenParent";
import combineData from "../components/dataHelper";
import { StyleSheet } from "react-native";
import { emailContent } from "../../constants/emailContent";
import SidePanel from "../components/SidePanel";

const MailList = ({ navigation, route }) => {
  const screenTitle = route.params?.screenTitle;
  const state = emailContent;
  const [data, setData] = useState({
    contentOffsetY: "",
    isScrollingUp: false,
  });

  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  const handleNavigation = (screen, params) => {
    navigation.navigate(getScreenParent(screen), screen, params);
  };

  const onScroll = ({ contentOffset }) => {
    if (contentOffset.y > 5) {
      const existingContentOffsetY = data.contentOffsetY;
      const isScrollingUp = existingContentOffsetY > contentOffset.y;
      setData(
        combineData(data, { contentOffsetY: contentOffset.y, isScrollingUp })
      );
    }
  };

  const getMails = () => {
    let mails;
    mails = state?.mails;
    // arr = ["Inbox", "All mail"];
    // if (arr.includes(screenTitle)) {
    //   mails = state?.mails;
    // } else {
    //   mails =
    //     state?.mails?.filter(
    //       (mail) => mail.status === screenTitle?.toLowerCase()
    //     ) || [];
    // }
    return mails;
  };

  const renderMailInfo = ({ item, index }) => {
    return (
      <MailInfo
        navigation={navigation}
        mail={item}
        mailIndex={index}
        key={shortid.generate()}
      />
    );
  };

  const ComposeButton = () => {
    const { isScrollingUp } = data;
    return (
      <TouchableOpacity
        style={[
          styles.composeButton,
          isScrollingUp
            ? styles.composeButtonRound
            : styles.composeButtonCurved,
        ]}
        // onPress={() => handleNavigation("Compose")}
      >
        <Feather
          name="edit-2"
          size={20}
          color="#D93025"
          style={styles.menuIcon}
        />
        <TransitionText animationStyle="slideInRight">
          {!isScrollingUp ? (
            <Text style={styles.composeText}>Compose</Text>
          ) : null}
        </TransitionText>
      </TouchableOpacity>
    );
  };

  const EmptyListComponent = () => {
    return (
      <View style={styles.emptyListContainer}>
        <MaterialCommunityIcons name="file" size={120} color="#f4a9a2" />
        <Text style={styles.emptyListText}>Nothing in screenTitle</Text>
      </View>
    );
  };

  return (
    <View style={styles.twoColumnsContainer}>
      <SafeAreaView style={(styles.container, styles.ContainerOne)}>
        <View style={styles.content}>
          <Header toggleDrawer={() => handleDrawer()} />
          {/*<Text style={styles.screenTitle}>{screenTitle}</Text>*/}
          <Text style={styles.screenTitle}>"screenTitle"</Text>
          {getMails().length > 0 ? (
            <FlatList
              data={getMails()}
              keyExtractor={(item, index) => shortid.generate()}
              renderItem={renderMailInfo}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              onScroll={({ nativeEvent }) => {
                onScroll(nativeEvent);
              }}
              scrollEventThrottle={400}
            />
          ) : (
            <EmptyListComponent />
          )}
        </View>
        {/*<ComposeButton />*/}
        {/*<BottomTab navigateToRoute={(screen) => handleNavigation(screen)} />*/}
        <BottomTab toggleDrawer={undefined} />
      </SafeAreaView>
      <SidePanel />
    </View>
  );
};

const styles = StyleSheet.create({
  twoColumnsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  ContainerOne: { width: "90%" },
  ContainerTwo: { width: "10%" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
    paddingBottom: 180,
  },
  screenTitle: {
    textTransform: "uppercase",
    opacity: 0.5,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatList: {
    paddingBottom: 120,
  },
  composeButton: {
    position: "absolute",
    bottom: 100,
    right: 25,
    zIndex: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 4,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  composeButtonRound: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  composeButtonCurved: {
    borderRadius: 25,
    width: 150,
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  composeText: {
    fontSize: 17,
    color: "#D93025",
    fontWeight: "600",
  },
  emptyListContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    paddingBottom: 100,
  },
  emptyListText: {
    textAlign: "center",
    fontSize: 19,
    opacity: 0.6,
    marginTop: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  mailDate: {
    fontSize: 12,
    marginBottom: "auto",
    opacity: 0.8,
  },
});

export default MailList;
