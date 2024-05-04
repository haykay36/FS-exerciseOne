import React from "react";
import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";
function App() {
  return (
    <div>
      <Header course="Half stack application development" />
      <Content
        part1="Fundamentals of react"
        part2="Using props to pass data"
        part3="State of a component"
        exercises1="10"
        exercises2="7"
        exercises3="14"
      />
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </div>
  );
}

export default App;
