import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const YourPhrase = ({ navigation }: any) => {
  const data = [
    "Mouse",
    "Believe",
    "Walnut",
    "Slave",
    "Sporadically",
    "Family",
    "Skin",
    "Lobster",
    "Friend",
    "Intact",
    "Twenty",
    "Camera",
  ];
  const SCREEN_WIDTH = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <FlatList
        style={[{ width: SCREEN_WIDTH, flexGrow: 0 }]}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={data}
        numColumns={3}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={[styles.button]}>
              <Text style={[styles.buttonText]}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 320,
          height: 40,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 18,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Back Up Your Phrase")}
      >
        <Text style={{ fontWeight: "500" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default YourPhrase;
