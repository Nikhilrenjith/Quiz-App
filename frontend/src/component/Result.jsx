import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import "../styles/result.css";
const Result = () => {
  function restart() {
    console.log("On Restart");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily tution</span>
        </div>

        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">50</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">05</span>
        </div>

        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">03</span>
        </div>

        <div className="flex">
          <span>Total Earned Points : </span>
          <span className="bold">50</span>
        </div>

        <div className="flex">
          <span>Quiz Result </span>
          <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={restart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <Table />
      </div>
    </div>
  );
};

export default Result;
