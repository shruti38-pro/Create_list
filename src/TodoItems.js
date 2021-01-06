import React from 'react';
import "./TodoList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function TodoList(props){
    const items = props.items;
    const todoList = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>

        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>

    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {todoList}
        </FlipMove>

    </div>;
  }

  export default TodoList;