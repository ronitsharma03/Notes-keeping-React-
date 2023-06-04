import React from "react";
// import mynotes  from "./mynotes";

export default function Note(props) {
    function handleClick(){
        props.onDelete(props.id)
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p> {props.content}</p>
            <button className="del-btn" onClick={handleClick}>DELETE</button>
        </div>
    )
}