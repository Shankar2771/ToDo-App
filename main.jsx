// ! main.jsx ---> JS file
// ? ".jsx" --> JSX(Javascript and xml) --> faster and simple than normal js
// * execution will start from main.jsx

// ! "import" 2 main libraries of ReactJs --> 1) react 2)react-dom

// Syntax --> import Variable from "library"
//? react --> maintain and manage activities related to componenets, state, event
// ? react-dom --> to load the content on UI by inserting content into DOM


import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App"
// import "./global.css"
import TodoApp from './task/TodoApp';


ReactDOM.createRoot(document.getElementById("root")).render(<TodoApp/>)


// ! ReactDom.createRoot(container).render(content)
// ? createRoot() --> By targetting root element it will connect html and js file
//? render() --> load the content on UI
// container --> document.getElementById("root")
//content --> string, number,jsx, "component"