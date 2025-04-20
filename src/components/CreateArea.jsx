import React, { useContext, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Notecontext } from "./Context";

function CreateArea(props) {

  const {note , setNote} = useContext(Notecontext);

  const[isElaborated,setElaborate]=useState(false);

  function handeleloborate(){
    setElaborate(true)
  }

  function handleChange(event){
    const {name,value} = event.target;
    setNote((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  function hanldeClick(e){
    props.onAdd(note);
    setNote((prev)=> {
    return {
      id:prev.id+1,
      title : "",
      content :""
    }})
    e.preventDefault();
  }

  return (
    <div >
      <form className="create-note" onSubmit={hanldeClick}>
        {isElaborated && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} required />}
        <textarea name="content" placeholder="Take a note..." rows={isElaborated ? 3 : 1 } value={note.content} required onClick={handeleloborate} onChange={handleChange} />
        <Zoom in={isElaborated}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;