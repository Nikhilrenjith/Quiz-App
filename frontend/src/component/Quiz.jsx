import React, { useEffect } from "react";
import Question from "./Question";

/* Redux */
import { useSelector } from "react-redux";

const Quiz = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });

  const prev = () => {
    console.log("on prev click");
  };

  const next = () => {
    console.log("on next click");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Question />

      <div className="grid">
        <button className="btn prev" onClick={prev}>
          Previous
        </button>
        <button className="btn next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
