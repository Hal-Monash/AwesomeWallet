import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

const Header = ({ toggleDrawer }) => {
  const getUserInitials = () => {
    // const username = state?.username;
    const username = "state?.username";
    return username[0];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialIcons
          name="menu"
          size={27}
          color="gray"
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search in mail"
        placeholderTextColor="gray"
        style={styles.searchInput}
      />
      <View style={styles.profileInitialWrapper}>
        <Text style={styles.profileInitialText}>{getUserInitials()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 30,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 45,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: "100%",
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  profileInitialWrapper: {
    backgroundColor: "white",
    marginLeft: "auto",
    height: 25,
    width: 25,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInitialText: { color: "#fff" },
});

export default Header;
