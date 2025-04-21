import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { Notecontext } from "./Context";

function Note(props){

    const {isDark } = useContext(Notecontext);

    function handleClick(){
        props.ondeletenote(props.id)
    }

    function handleEdit(){
        props.oneditnote(props.id);
    }

    return(
        <div className={isDark?"note-dark":"note"}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="action-button" onClick={handleClick}><DeleteIcon /></button>
            <button className="action-button" onClick={handleEdit}><EditSquareIcon /></button>
        </div>
    );
};

export default Note;