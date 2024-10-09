import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Какое-то значение";
const firstName = "Алекс";
const lastName = "Бейсболка";
// const items = [
//   "Элемент 1",
//   "Элемент 2",
//   "Элемент 3",
//   "Элемент 4",
//   "Элемент 5",
//   "Элемент 6"

// ];

const getRandom = () => Math.floor(Math.random() * 10);

root.render(
  <div>
    {/* <h1 style={{ color: "violet", fontSize: "15px" }}>{value}</h1> */}
    <h1 className="h1-style">{value}</h1>
    <h2>{firstName} {lastName}</h2>
    <ul>
      {
        // items.map(item => (<li>{item}</li>))
        Array.from(
          { length: 5 }, () =>
          <li>{`Элемент ${getRandom() % 2 ? "ODD" : "EVEN"}`}</li>
        )
      }
    </ul>
    <p>&copy; Авторские права мои {new Date().getFullYear()}</p>
  </div>
);



// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world";
// const root = document.getElementById("root");
// root.appendChild(h1Element);