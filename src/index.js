import React from "./react";
import ReactDOM from "./react-dom";

const hello = (
  <h1 className="app" id="tun">
    Hello world <span>hi</span>
  </h1>
);

ReactDOM.render(document.getElementById("root"), hello);
