import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import React, { useState } from "react";

function CreateArea(props) {
  const [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div className="flex justify-center ">
      <form className="create-note bg-white rounded-lg p-4 shadow-lg w-full max-w-md mx-auto">
        {isExpand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="w-full  break-words"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          className="w-full  resize-none"
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote} className="mt-4 bg-blue-500 text-white">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
