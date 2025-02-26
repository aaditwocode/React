import React from "react";
import ReactDOM from "react-dom/client";

//React element
const h1 = React.createElement("h1", {id:"hey"}, "I am inside the div!");
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(h1);

const jsxheading = <h1 id="hey">hey you are seeing jsx</h1>;
r.render(jsxheading);

//React functional component
const Title = () => (
  <div>
    <h1>React</h1>
    <p>This is a component boy.</p>
  </div>
);

const Heading = () => {
  return (
    <div>
      <Title />
      <h1>This is a React component</h1>
      <p>This is a paragraph inside the component.</p>
    </div>
  );
};

r.render(<Heading />);


