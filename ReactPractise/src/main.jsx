import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//create React Element
// Render variable inside createElement
// const anotherElement= "Hyee From Asus Vivobook"
// const reactElement= React.createElement(
//   'a',{href:'https://google.com',target:'_blank'},'Please Click on Me',anotherElement
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  // reactElement
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
