import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { useRef, useState } from "react";
import Clipboard from "@react-native-clipboard/clipboard";
import GridImageView from "react-native-grid-image-viewer";
import { Simulate } from "react-dom/test-utils";
import { PersonAddAlt } from "@mui/icons-material";
import Modal from "react-native-modal";

const SidePanel = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [copyText, setCopyText] = useState("");
  const copyToClipboard = () => {
    Clipboard.setString(window.getSelection().toString());
    setCopyText(window.getSelection().toString());
  };

  return (
    <SafeAreaView style={styles.ContainerTwo}>
      <View style={styles.IconContainer}>
        <MaterialCommunityIcons
          name="cellphone-screenshot"
          size={30}
          color="#323232"
        />
        <View>Snipping</View>
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.IconContainer}>
          <AntDesign name="folder1" size={30} color="#323232" />
          <View>Folder</View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={copyToClipboard}>
        <View style={styles.IconContainer}>
          <MaterialCommunityIcons
            name="content-copy"
            size={30}
            color="#323232"
          />
          <View>Copy</View>
        </View>
      </TouchableOpacity>

      <View style={styles.IconContainer}>
        <MaterialCommunityIcons name="notebook" size={30} color="#323232" />
        <View>Notebook</View>
      </View>
      <View style={styles.IconContainer}>
        <MaterialCommunityIcons name="skip-next" size={30} color="#323232" />
        <View>Next</View>
      </View>
      <View style={{ flex: 1 }}>
        {/*<Button title="Show modal" onPress={toggleModal} />*/}

        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
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
  ContainerTwo: { width: "10%", backgroundColor: "#FAF0E6" },
  IconContainer: { fontSize: 10, marginTop: 80, alignItems: "center" },
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  headline_text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default SidePanel;
