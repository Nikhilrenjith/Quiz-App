import React, { useEffect, useState } from "react";
import Data from "../database/Data";

const Question = () => {
  const [check, setCheck] = useState(undefined);
  function select() {
    console.log("Radio Button");
  }
  const question = Data[0];

  useEffect(() => {
    console.log(question);
  });

  return (
    <div className="questions">
      <h2 className=" text-light">{question.question}</h2>
      <ul>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${1}-option`}
              onChange={select}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check "></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
