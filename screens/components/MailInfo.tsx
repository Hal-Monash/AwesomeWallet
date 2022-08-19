import React, { useMemo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MailInfo = ({ mail, mailIndex, navigation }) => {
  const status = mail?.status;

  const imageUri = () => {
    return mail?.headers?.senderLogo;
  };

  const senderInitial = () => {
    const from = mail?.headers?.from;
    return from[0];
  };

  const generateColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color === "ffffff") {
      color = generateColor();
    }
    return color;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Mail Page", { mailIndex: mailIndex })}
    >
      {imageUri() ? (
        <Image
          style={styles.senderLogo}
          source={{
            uri: imageUri(),
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
          <Text style={styles.senderInitialText}>{senderInitial()}</Text>
        </View>
      )}
      <View style={styles.mailWrapper}>
        <View style={styles.mailSectionOne}>
          <Text
            style={[
              styles.mailFrom,
              status == "unread"
                ? { color: "#000", fontWeight: "bold" }
                : { color: "#808080" },
            ]}
          >
            {mail?.headers?.from}
          </Text>
          <Text
            style={[
              styles.mailDate,
              status == "unread"
                ? { color: "#000", fontWeight: "bold" }
                : { color: "#808080" },
            ]}
          >
            {mail?.headers?.date}
          </Text>
        </View>
        <Text
          style={[
            styles.mailSubject,
            status == "unread"
              ? { color: "#000", fontWeight: "bold" }
              : { color: "#808080" },
          ]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {mail?.headers?.subject}
        </Text>
        <View style={styles.mailSectionThree}>
          <Text style={styles.mailBody} numberOfLines={1} ellipsizeMode="tail">
            {mail?.body}
          </Text>
          <MaterialIcons
            name="star-outline"
            size={27}
            color="#808080"
            style={styles.menuIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  senderLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  senderInitialWrapper: {
    height: 50,
    width: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  senderInitialText: {
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  mailWrapper: {
    display: "flex",
    flex: 1,
    marginLeft: 15,
  },
  mailSectionOne: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  mailFrom: {
    fontSize: 16,
    width: "80%",
  },
  mailSubject: {
    fontSize: 15,
    width: "83%",
  },
  mailTitle: {
    color: "#808080",
    fontSize: 15,
    width: "80%",
  },
  mailSectionThree: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mailBody: {
    fontSize: 15,
    width: "83%",
  },
  mailDate: {
    fontSize: 12,
    marginBottom: "auto",
    opacity: 0.8,
  },
  menuIcon: {
    marginRight: 10,
  },
});

export default MailInfo;
