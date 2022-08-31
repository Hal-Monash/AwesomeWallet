import React from "react";
import { createStore } from "state-pool";

export const store = createStore();
store.setState("note", [
  {
    id: 1,
    title: "This is an example of title",
    content: "This is an example of content",
  },
]);
store.setState("images", [
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
// const note = () => {
//   const [note, setNote] = useState([
//     {
//       id: 1,
//       title: "This is an example of title",
//       content: "This is an example of content",
//     },
//   ]);
// };
