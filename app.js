const heading = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World from React"),
    React.createElement("h2", {}, "Hello World from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from React"),
    React.createElement("h2", {}, "Hello World from React"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);