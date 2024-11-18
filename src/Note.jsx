import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="text-lg font-bold mb-2">{props.title}</h1>
      <p className="text-sm text-gray-700 font-architects">{props.content}</p>
      <button onClick={handleClick}
        className=" hover:text-red-500 transition-colors duration-300"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
