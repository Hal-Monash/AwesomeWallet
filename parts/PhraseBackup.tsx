import * as React from "react";
import * as PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PhraseBackup = ({
  data,
  selected,
  onChange,
  containerStyle,
  selectedButtonStyle,
  buttonStyle,
  buttonTextStyle,
}: any) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        style={[{ width: SCREEN_WIDTH, flexGrow: 0 }]}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={data}
        numColumns={3}
        keyExtractor={(item: string) => item}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={
                selected.includes(item)
                  ? [styles.selectedButton, selectedButtonStyle]
                  : [styles.button, buttonStyle]
              }
              onPress={() => onChange(index)}
            >
              <Text style={[styles.buttonText, buttonTextStyle]}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

PhraseBackup.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  displaySelectedWrapperStyle: PropTypes.object,
  displaySelectedStyle: PropTypes.object,
  displaySelectedItemRowStyle: PropTypes.object,
  displayButtonStyle: PropTypes.object,
  displaySelectedButtonStyle: PropTypes.object,
  displayButtonTextStyle: PropTypes.object,
  selectedButtonStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
};

export default PhraseBackup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "column",
    margin: 5,
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
  },
  selectedButton: {
    flexDirection: "column",
    margin: 5,
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  displayButton: {
    flexDirection: "column",
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
  },
  displaySelectedButton: {
    flexDirection: "column",
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
  },
  displaySelectedWrapperContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#828282",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 7,
    marginBottom: 30,
  },
  displaySelectedContainer: {
    width: "auto",
    height: 280,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  displayItemContainer: {
    margin: 7,
    width: 125,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
