function createElement(tag, props, children) {
  const element = document.createElement(tag);
  // adding props to element
  Object.keys(props).forEach((key) => {
    element.setAttribute(key, props[key]);
  });

  if (typeof children == "string") {
    let text = document.createTextNode(children);
    element.appendChild(text);
  }
  return element;
}

const React = {
  createElement,
};

export default React;
