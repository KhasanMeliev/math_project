import React from "react";
import "./FileQuiz.css";
import { Button, Select, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const FileQuiz = () => {
  const [sinf, setSinf] = useState(5)
  const [javob, setJavob] = useState('')
  
  return (
    <div className="wrapper">
      <div className="sinflar">
        <div>5 - sinf Algebra</div>
        <div>6 - sinf Algebra</div>
        <div>7 - sinf Algebra</div>
        <div>8 - sinf Algebra</div>
        <div>9 - sinf Algebra</div>
        <div>10 - sinf Algebra</div>
        <div>11 - sinf Algebra</div>
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
        />
        <button>Submit</button>
       
      </div>
    </div>
  );
};

export default FileQuiz;
