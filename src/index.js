import React from "react";
import reactDom from "react-dom";
import App from "./App.js"
import "./styles.css"


reactDom.render(
  <React.StrictMode>
	  <div className="App">
	  <App />
	  </div>
  </React.StrictMode>,
    document.getElementById('root')
)

