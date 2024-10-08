import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Какое-то значение";
const items = ["Элемент 1", "Элемент 2", "Элемент 3"]

root.render(
  <div>
    <h1>{value}</h1>
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  </div>
);



// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world";
// const root = document.getElementById("root");
// root.appendChild(h1Element);