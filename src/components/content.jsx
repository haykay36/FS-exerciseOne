import React from "react";

const Content = (props) => {
  return (
    <div>
      <p>
        {props.parts} {props.exercises}
      </p>
      <p>
        {props.parts} {props.exercises}
      </p>
      <p>
        {props.parts} {props.exercises}
      </p>
    </div>
  );
};

export default Content;
