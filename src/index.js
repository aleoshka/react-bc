import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Карточки с картинками, Братишька-мен";

root.render(
  <div className="container col-10">
    <h1 className="h1-style m-3">{value}</h1>
    {
      Array.from(
        { length: 5 }, (_, index) =>
        <div className="card m-3">
          <img src={`https://picsum.photos/${200 + index}/100`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      )
    }

    <p className="m-3">&copy; Авторские права мои {new Date().getFullYear()}</p>
  </div>
);



// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world";
// const root = document.getElementById("root");
// root.appendChild(h1Element);