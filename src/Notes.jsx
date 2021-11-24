import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import Note from './Note';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const changeInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNotes([...notes, input]);
    setInput('');
  };
  const renderedNotes = notes.map((note) => <Note note={note} key={uuid()} />);
  return (
    <div id="Notes-div">
      <h2>Notes</h2>
      <form id="Notes-form" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          form="Notes-form"
          value={input}
          onChange={(e) => changeInput(e)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
      <ul>{renderedNotes}</ul>
    </div>
  );
}
