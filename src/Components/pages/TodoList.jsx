import React from 'react';

function TodoList() {
  let notes = [];

  const handleNote = () => {
    let inputNote = document.querySelector('.input-note');
    let ptag = document.querySelector('ul');
    let newNote = inputNote.value;
    if (newNote) {
      notes = [...notes, newNote];
      inputNote.value = '';
      ptag.insertAdjacentHTML('beforeend', `<li>${newNote} ❌</<li>`);
    } else {
      console.log('Input cannot be empty');
    }

    console.log(notes);
  };
  return (
    <div>
      <h2>To-do List</h2>
      <input type="text" className="input-note" placeholder="take a note" />
      <button onClick={() => handleNote()}>Add</button>
      <br />
      <ul>
        {notes?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
