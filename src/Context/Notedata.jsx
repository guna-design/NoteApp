import React, { useState } from "react";

export const NotesTaken = React.createContext();

function NotesContext({ children }) {
  const [data, setData] = useState([
    {
      title: "Feedbacks",
      note: "lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
      updatedBefore: "10 days",
    },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  return (
    <NotesTaken.Provider value={{ data, setData, editIndex, setEditIndex }}>
      {children}
    </NotesTaken.Provider>
  );
}

export default NotesContext;
