import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';

function Note(props){

    function handleClick(){
        props.ondeletenote(props.id)
    }

    function handleEdit(){
        props.oneditnote(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
            <button onClick={handleEdit}><EditSquareIcon /></button>
        </div>
    );
};

export default Note;