import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { useRef, useState } from "react";
import Clipboard from "@react-native-clipboard/clipboard";
import { Simulate } from "react-dom/test-utils";

const SidePanel = (props) => {
  const [copyText, setCopyText] = useState("");
  const copyToClipboard = () => {
    Clipboard.setString(window.getSelection().toString());
    setCopyText(window.getSelection().toString());
  };

  // const addSymbol = (state) => {
  //   if (state[type].length < 200) {
  //     refs[type].focus();
  //     let selection = refs[type]._lastNativeSelection || null;
  //     let obj = {};
  //     obj[type] = selection
  //       ? state[type].substr(0, selection.start) +
  //         symbol +
  //         state[type].substr(selection.end)
  //       : state[type] + symbol;
  //     func({ ...obj }, () => {
  //       refs[type].focus();
  //       setTimeout(() => {
  //         refs[type].setNativeProps({
  //           selection: { start: selection.start + 1, end: selection.start + 1 },
  //         });
  //       });
  //     });
  //   }
  // };

  // const insertPaste = () => {
  //   const textareaRef = useRef();
  //   const cursorPosition = 0;
  //
  //   return (
  //     <textarea
  //       ref={textareaRef}
  //       onBlur={() =>
  //         textareaRef.current.setSelectionRange(cursorPosition, cursorPosition)
  //       }
  //     />
  //   );
  // };
  // const insertString = (type, symbol) => {
  //   const inputElement = useRef(null);
  //   const handleFocusInput = () => {
  //     inputElement.current.focus();
  //   };
  //   const selection = inputElement.;
  // };
  //   if (this.refs.FindingsDescribe.isFocused()) {
  //     type = "FindingsDescribe";
  //   } else if (this.refs.Conclusion.isFocused()) {
  //     type = "Conclusion";
  //   } else {
  //     return;
  //   }
  //   // _lastNativeSelection:光标所在位置，若未初始化，则赋值为{start: 0, end: 0}
  //   let selection = this.refs[type]._lastNativeSelection || {
  //     start: 0,
  //     end: 0,
  //   };
  //   let obj = {};
  //   // 在光标位置处插入文字
  //   obj[type] =
  //     this.state[type].substr(0, selection.start) +
  //     symbol +
  //     this.state[type].substr(selection.end);
  //   // 插入完成后把光标位置后移到恰当位置
  //   this.setState({ ...obj }, () => {
  //     setTimeout(() => {
  //       this.refs[type].setNativeProps({
  //         selection: {
  //           start: selection.start + symbol.length,
  //           end: selection.start + symbol.length,
  //         },
  //       });
  //     });
  //   });
  // };

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
      <View style={styles.IconContainer}>
        <AntDesign name="folder1" size={30} color="#323232" />
        <View>Folder</View>
      </View>
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

      {/*<TouchableOpacity*/}
      {/*  onPress={(props) => {*/}
      {/*    addSymbol(props);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <View style={styles.IconContainer}>*/}
      {/*    <MaterialCommunityIcons*/}
      {/*      name="content-paste"*/}
      {/*      size={30}*/}
      {/*      color="#323232"*/}
      {/*    />*/}
      {/*    <View>Paste</View>*/}
      {/*  </View>*/}
      {/*</TouchableOpacity>*/}

      <View style={styles.IconContainer}>
        <MaterialCommunityIcons name="notebook" size={30} color="#323232" />
        <View>Notebook</View>
      </View>
      <View style={styles.IconContainer}>
        <MaterialCommunityIcons name="skip-next" size={30} color="#323232" />
        <View>Next</View>
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
});

export default SidePanel;
