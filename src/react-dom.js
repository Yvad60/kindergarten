const ReactDOM = {
  render: (parentEl, childEl) => {
    console.log("yaya", childEl);
    parentEl.appendChild(childEl);
  },
};

export default ReactDOM;
