import { cloneDeep, filter } from "lodash";
import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PhraseBackup from "../parts/PhraseBackup";
import SidePanel from "./components/SidePanel";
import { accountOne } from "../index";

const BackUpPhrase = ({ navigation }: any) => {
  const [data, setData] = useState([
    "Core",
    "Medal",
    "Test",
    "Make",
    "Kind",
    "Noise",
    "Dry",
    "You",
    "Lunch",
    "Tomato",
    "Bottom",
    "Over",
  ]);
  const backToHome = () => {
    navigation.navigate("PhonePage", {
      readOrNot: true,
    });
  };
  useEffect(() => {
    const tempArr = [];
    const randomiseArray = (array) => {
      let currentIndex: any = array.length;
      let randomIndex: any = array.length;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };
    data.forEach((item) => {
      tempArr.push(item);
    });

    setData(randomiseArray(tempArr));
  }, []);

  const [selected, setSelected] = useState<string[]>([]);
  const displayArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const onSelect = (index: number) => {
    const word: string = data[index];
    if (!selected.includes(word)) {
      const cloned = cloneDeep(selected);
      cloned.push(word);
      setSelected(cloned);
    } else {
      const cloned = cloneDeep(selected);
      const indexTwo = cloned.indexOf(word);
      cloned.splice(indexTwo, 1);
      setSelected(cloned);
    }
  };

  const arraysAreIdentical = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <View style={styles.twoColumnsContainer}>
      <View style={styles.container}>
        <Text style={[styles.description, { fontSize: 20 }]}>
          React Native Metamask Phrase Word Example
        </Text>
        <Text style={styles.description}>
          Select each word in the order it was presented to you.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          {displayArr.map((index) => (
            <View key={index} style={[styles.displayItemContainer]}>
              <Text style={{ marginRight: 3 }}>{index + 1}.</Text>
              <TouchableOpacity
                style={
                  index < selected.length && selected[index]
                    ? styles.displaySelectedButton
                    : styles.displayButton
                }
                onPress={() => {
                  if (index < selected.length && selected[index]) {
                    setSelected((prevState) => {
                      return filter(prevState, (x) => x !== selected[index]);
                    });
                  }
                }}
              >
                <Text style={styles.buttonText}>
                  {index < selected.length && selected[index]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <PhraseBackup selected={selected} data={data} onChange={onSelect} />
        {arraysAreIdentical(selected, [
          "Core",
          "Medal",
          "Test",
          "Make",
          "Kind",
          "Noise",
          "Dry",
          "You",
          "Lunch",
          "Tomato",
          "Bottom",
          "Over",
        ]) && (
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
            onPress={() =>
              navigation.navigate("Your Home Page", {
                account: accountOne.multiCoinStatusTwo,
              })
            }
          >
            <Text style={{ fontWeight: "500" }}>Complete Backup</Text>
          </TouchableOpacity>
        )}
      </View>
      <SidePanel home={backToHome}></SidePanel>
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
  buttonText: {
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    width: 300,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 10,
    fontSize: 15,
  },
  value: {
    marginBottom: 10,
    color: "#FF4A8D",
    fontWeight: "500",
  },
  displayItemContainer: {
    margin: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  displayButton: {
    flexDirection: "column",
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 13,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
  },
  displaySelectedButton: {
    flexDirection: "column",
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "#7057FF",
    borderRadius: 13,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
  },
});

export default BackUpPhrase;
