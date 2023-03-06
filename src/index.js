import React from "./react";
import ReactDOM from "./react-dom";

const hello = (
  <div className="app" id="tun">
    <h1>Hello world</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas
      provident commodi quibusdam harum minima aut illo doloremque delectus,
      itaque laborum deserunt incidunt tenetur expedita, quam mollitia est,
      ullam repellat?
    </p>
    <ul>
      <li>hello</li>
      <li>Hi</li>
      <li>how are you</li>
    </ul>
  </div>
);

ReactDOM.render(document.getElementById("root"), hello);
