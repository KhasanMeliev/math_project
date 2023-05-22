import React, { useState } from "react";
import "./FileQuiz.css";
import { Button, Select, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
const FileQuiz = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (document.querySelector(".mantine-select-input") === "5") {
      if (inputValue) {
        alert("hello");
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="sinflar">
        <div className="sinf">5 - sinf Algebra</div>
        <div className="sinf">6 - sinf Algebra</div>
        <div className="sinf">7 - sinf Algebra</div>
        <div className="sinf">8 - sinf Algebra</div>
        <div className="sinf">9 - sinf Algebra</div>
        <div className="sinf">10 - sinf Algebra</div>
        <div className="sinf">11 - sinf Algebra</div>
      </div>
      <div className="javob">
        <Select
          label="Nechanchi sinfni testi?"
          placeholder="Sinf"
          data={[
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },
            { value: "11", label: "11" },
          ]}
          className="input"
        />
        <TextInput
          label="Javobni yozing..."
          placeholder="ABCD...."
          className="input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button className="button" onClick={handleSubmit}>
          Submit
        </Button>
        <Button style={{ clor: "white" }}>
          <Link
            to="/quizapp"
            style={{ textDecoration: "none", color: "white" }}
          >
            Quiz App ga o'tish
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FileQuiz;
