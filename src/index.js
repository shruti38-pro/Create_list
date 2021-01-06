import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";  
var destination = document.querySelector("#container")  
ReactDOM.render(
    <div>
      <h1>WELCOME!</h1>
        <p>  Create your list</p>
              <TodoList/>
    </div>,
    destination
);

