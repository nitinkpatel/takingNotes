import React from 'react'
import './App.css';


export default function ToDoLists(props) {
    const deleteItems = () => {
         
    }
    return (
        <>
        <div className='note'>
<button className ='cross' onClick={()=>{props.onSelect(props.id)}}>X</button>
           <li> {props.text}</li>
       </div>
       </>
    )
}
