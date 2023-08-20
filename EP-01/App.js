// const React = require("react");

// const heading = React.createElement(
//   "h1",
//   {
//     class: "heading",
//   },
//   "hello react"
// ); // {} - give attribute to a tag

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hi i am h1 tag")
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
