const ReactDOM = {
  render: (parentEl, childEl) => {
    if (typeof childEl == "function") {
      parentEl.appendChild(childEl());
    } else {
      parentEl.appendChild(childEl);
    }
  },
};

export default ReactDOM;
