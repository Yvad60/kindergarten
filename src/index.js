import CustomComponent from "./CustomComponent";
import React from "./react";
import ReactDOM from "./react-dom";

const Hello = () => {
  return (
    <div className="app" id="abc">
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cum
        voluptatum dolor. Soluta nostrum alias in cumque porro sint optio
        explicabo ducimus eveniet ea. Inventore numquam unde voluptates
        temporibus quia.
      </p>
      <CustomComponent />
    </div>
  );
};

ReactDOM.render(document.getElementById("root"), <Hello />);
