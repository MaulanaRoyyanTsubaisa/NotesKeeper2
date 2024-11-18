import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      try {
        setNotes(JSON.parse(storedNotes));
        console.log("Notes loaded from localStorage:", JSON.parse(storedNotes));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  // Save notes to local storage whenever the notes array changes
  useEffect(() => {
    // Prevent overwriting localStorage with an empty array on initial load
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div className="flex flex-col ">
      <div className="p-0 m-0">
        <Header />
      </div>
      <CreateArea onAdd={addNote} />

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 p-4 place-items-center break-words">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
