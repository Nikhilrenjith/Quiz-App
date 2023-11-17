import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const inputRef = useRef(null);
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
        <ol>
          <li>You will be asked 10 questions</li>
          <li>You will be asked 10 questions</li>
          <li>You will be asked 10 questions</li>
          <li>You will be asked 10 questions</li>
        </ol>
        <form id="form">
          <input
            ref={inputRef}
            className="userid"
            placeholder="username"
            type="text"
          />
        </form>
        <div className="start">
          <Link className="btn" to={"quiz"}>
            Start Quiz
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
