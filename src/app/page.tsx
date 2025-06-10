"use client";
import { use, useState } from "react";

function Todo ({nArray, value , handleDelete}:{nArray:string [] , value : string,handleDelete: (index: number) => void } ){
  const [bgColor, setBgColor] = useState('bg-gray-300');
  
  const changeColor = () => {
    // Toggle between blue and red
    setBgColor(bgColor === 'bg-gray-300' ? 'bg-green-400' : 'bg-gray-300');
  };
  const handleButtonClick = (index:number) => {

    handleDelete(index);
  };
  return(
    <ul className="flex flex-col items-center">
        {nArray.map((value, i) => (
          <li key={i} className={`${bgColor} py-2 px-4  w-[90vw] lg:w-[60vw] rounded`}>
            {value}
            <div className="w-[30vw] lg:w-[20vw]">
            <button className="ml-auto bg-green-600 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded ml-auto w-[15vw] lg:w-[10vw]  center h-1/2" onClick={()=>changeColor()}>Done</button>
            <button className="ml-auto bg-red-600 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded ml-auto w-[15vw] lg:w-[10vw] center h-1/2" onClick={() => handleButtonClick(i)}>Delete</button>
          </div>
          </li>
          
        ))}
    </ul>
      );
}


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
    <div className="grid grid-rows-[20px_1fr_20px] pt-8 justify-items-center min-h-screen  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-4xl" >TO DO LIST </div>
        <main className=" flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <form onSubmit={inputSubmit}>
              <input type="textarea" value={note} onChange={inputChange} placeholder="hi" className="bg-gray-300 w-[40vw] py-2 px-4 rounded"></input>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-[20vw]" type="submit">Add task</button>          
            </form>
          </div>         
          <Todo nArray={noteArray} value={note} handleDelete={handleDelete}/>
        </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  </>);
}
