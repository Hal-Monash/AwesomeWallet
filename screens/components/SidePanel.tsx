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
import React, { useEffect, useRef, useState } from "react";
import Clipboard from "@react-native-clipboard/clipboard";
import Modal from "react-native-modal";
import ImageView from "react-native-image-viewing";
import GridImageView from "react-native-grid-image-viewer";
import { ImageGallery } from "@georstat/react-native-image-gallery";
import Gallery from "react-native-image-gallery";
import { screenShots } from "../../constants/screenShots";
import Notebook from "../components/Notebook";

const SidePanel = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNoteModalVisible, setNoteModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);

  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
  ]);
  const [indexNumber, setIndexNumber] = useState();
  useEffect(() => setIndexNumber(props.indexNumber));

  const onSnip = () =>
    setImages((state) => [...state, screenShots[props.indexNumber]]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleNoteModal = () => {
    setNoteModalVisible(!isModalVisible);
  };

  const [copyText, setCopyText] = useState("");
  const copyToClipboard = () => {
    Clipboard.setString(window.getSelection().toString());
    setCopyText(window.getSelection().toString());
  };

  return (
    <SafeAreaView style={styles.ContainerTwo}>
      {indexNumber && (
        <TouchableOpacity onPress={onSnip}>
          <View style={styles.IconContainer}>
            <MaterialCommunityIcons
              name="cellphone-screenshot"
              size={30}
              color="#323232"
            />
            <View>Snipping</View>
          </View>
        </TouchableOpacity>
      )}
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

      <TouchableOpacity onPress={toggleNoteModal}>
        <View style={styles.IconContainer}>
          <MaterialCommunityIcons name="notebook" size={30} color="#323232" />
          <View>Notebook</View>
        </View>
      </TouchableOpacity>

      <View style={styles.IconContainer}>
        <MaterialCommunityIcons name="skip-next" size={30} color="#323232" />
        <View>Next</View>
      </View>
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <View>
              <Button onPress={openGallery} title="Open Gallery" />
              <ImageGallery
                close={closeGallery}
                isOpen={isOpen}
                images={images}
              />
            </View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <View style={{ flex: 1 }}>
        <Modal isVisible={isNoteModalVisible}>
          <View style={{ flex: 1 }}>
            <Notebook></Notebook>
            <Button title="Hide modal" onPress={toggleNoteModal} />
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
