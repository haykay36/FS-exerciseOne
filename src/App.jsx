import React from "react";
import Header from "./components/header";
import Total from "./components/total";
//create a constant variable 'courses' and an array of parts of the courses
const courses = "Half stack application development";
const parts = [
  { name: "Fundamentals of react", exercises: 10 },
  { name: "Using props to pass data", exercises: 7 },
  { name: "Using props to pass data", exercises: 14 },
];
function App() {
  const arrayOfData = parts.map((item) => (
    <div>
      <p>
        {item.name} {item.exercises}
      </p>
    </div>
  ));
  return (
    <div>
      <Header course={courses} />
      <p>{arrayOfData}</p>
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </div>
  );
}

export default App;
