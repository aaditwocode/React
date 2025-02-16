const h = React.createElement("h1", {
  id: "heading"
}, "hey man.");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h);


const h1 = React.createElement("h1", {}, "I am inside the div!");
const h2 = React.createElement("h1", {}, "I am inside the div too!");
const div = React.createElement("div", { id: "parent" }, [h1 , h2]);
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(div);