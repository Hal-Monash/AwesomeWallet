import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { note } from "../../constants/note";
import { Form, Button } from "antd-mobile";
import Clipboard from "@react-native-clipboard/clipboard";
const Notebook = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState(note);
  const onSubHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      { id: note.length + 1, title: title, content: content },
    ]);
  };

  const submissions = () => {
    return notes.map((note) => (
      <View>
        <View>{note.id}</View>
        <View>{note.title}</View>
        <View>{note.content}</View>
      </View>
    ));
  };

  return (
    <View>
      {submissions()}
      <TextInput
        placeholder={"Input The Title Of Your Note"}
        value={title}
        onChangeText={(e) => {
          setTitle(e);
        }}
      />
      <TextInput
        placeholder={"Input Your Note"}
        value={content}
        onChangeText={(e) => {
          setContent(e);
        }}
      />
      <Button onClick={onSubHandler}>Submit</Button>
    </View>
  );
};

export default Notebook;
