"use client";
import { use, useState } from "react";

export default function Home() {
  const [note, setNote] = useState(''); // Set note for the current tab
  const [noteArray, setNoteArray] = useState<string[]>([]);


   const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value); // Updates the note state with the input value
  };


  const inputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents default form submission
    if (note.trim()) { // Checks if the note is not empty
      setNoteArray([...noteArray, note]); // Adds the new note to the array
      setNote(''); // Clears the input field
    }
  }; 

  const handleDelete = (index:number) => {
    setNoteArray(noteArray.filter((_, i) => i !== index)); // Filters out the note at the given index
  };
    
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-4xl" >TO DO LIST </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <form onSubmit={inputSubmit}>
          <input type="textarea" value={note} onChange={inputChange} placeholder="hi" className="bg-gray-300 w-[40vw]"></input>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-[20vw]" type="submit">Add task</button>          
          </form>
        </div>
        <ul className="">
        {noteArray.map((note, index) => (
          <li key={index} className="bg-gray-300 w-[60vw] flex items-center">
            {note}
            <button className="ml-auto bg-red-600 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded ml-auto w-[20vw]" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  </>);
}
