import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import { Notecontext } from "./Context";
import CreateArea from "./CreateArea";

function App(){

    const [notes,setNotes] = useState([]);
    const [note,setNote] = useState({
        id:0,
        title:"",
        content:""
      })

    useEffect(()=>{
        const storedNotes = localStorage.getItem('notes');
        if(storedNotes){
            setNotes(JSON.parse(storedNotes))
            }
    },[])

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])

    function addNote(newnote){
        setNotes((prev)=>{
            return[
                ...prev,
                newnote
            ]
        })
    }

    function deleteNote(id){
        setNotes((prev)=>{
            return prev.filter((item)=>{
                return item.id!==id;
            })
        })
    }

    function handledittext(id){
        const notetoedit = notes.find((item)=>{  return item.id===id; })
        if(notetoedit!==undefined) edit(notetoedit,id);
    }

    function edit(note , id){
        deleteNote(id);
        setNote(()=>{
            return{
                id:id,
                title:note.title,
                content:note.content
            }
        })
    }

    return <div>
        <Header />
        <Notecontext.Provider value={{note , setNote}} >
            <CreateArea onAdd={addNote} />
        </Notecontext.Provider>
            {notes.map((note)=>{
                return <Note key={note.id} id={note.id} oneditnote={handledittext} title={note.title} content={note.content} ondeletenote={deleteNote} />
            })}
        <Footer />
    </div>;
}

export default App;
