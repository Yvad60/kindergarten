function createElement(tag, props, ...children) {
  if (typeof tag == "function") {
    return tag();
  }
  const element = document.createElement(tag);

  if (props) {
    Object.keys(props).forEach((key) => {
      if (key === "className") {
        element.setAttribute("class", props[key]);
      } else {
        element.setAttribute(key, props[key]);
      }
    });
  }

  children.forEach((child) => {
    if (typeof child == "string") {
      let text = document.createTextNode(child);
      element.appendChild(text);
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

const React = {
  createElement,
};

export default React
