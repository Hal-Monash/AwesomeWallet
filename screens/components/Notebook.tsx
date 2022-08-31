import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { store } from "../../constants/note";
import { Form, Button } from "antd-mobile";
import Clipboard from "@react-native-clipboard/clipboard";
const Notebook = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes, updateNotes] = store.useState("note");
  const onSubHandler = () => {
    setNotes(
      notes.concat({ id: notes.length + 1, title: title, content: content })
    );
    setTitle("");
    setContent("");
  };
  console.log(notes);
  const submissions = () => {
    return notes.map((note) => (
      <View>
        <View>No {note.id}</View>
        <View>Title: {note.title}</View>
        <View>Note Content: {note.content}</View>
      </View>
    ));
  };

  return (
    <View style={{ backgroundColor: "white" }}>
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
      <Button disabled={!(content && title)} onClick={onSubHandler}>
        Submit
      </Button>
    </View>
  );
};

export default Notebook;
