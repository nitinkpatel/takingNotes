import './App.css';
import { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {

  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
const write = (event) => {
  setText(event.target.value);
}

const listOfNotes = () => {
  setItems((oldItems) => {
    return[...oldItems, text]
  })
  setText('');
};
const deleteItems=(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
      return index !== id;

    })
  })
}
  return (
    <div>
      <div className='main'>
      <h1>My Notes</h1>

      <input type='text' placeholder='Add Notes'  onChange={write}/>
      <br/> 
      <button className='btn' onClick={listOfNotes}>Add Notes </button>
      <ol>
        {/* <li> {text}</li> */}
        {items.map((itemval, index) => {
          return <ToDoLists key={index} 
          id={index} 
          text={itemval}
          onSelect={deleteItems}
          />
        })}
      </ol>
      </div>
    </div>
  );
}

export default App;
