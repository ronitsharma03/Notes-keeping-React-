import React, { useState } from 'react';
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import Mynotes from './mynotes';
import CreateArea from './createArea';

export default function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote){
        setNotes(prevNotes=>{
            return[...prevNotes, newNote];
        });
    }
    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteitem, index)=>{
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            
            {notes.map((noteItem, index)=>{
                return (
                <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content} 
                onDelete={deleteNote}/>  
                ) })}
        </div>
    )
}