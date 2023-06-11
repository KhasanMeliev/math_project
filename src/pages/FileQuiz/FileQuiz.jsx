import React from "react";
import "./FileQuiz.css";
import { Select, TextInput } from "@mantine/core";
import { useState } from "react";

const FileQuiz = () => {
  const [check, setCheck] = useState({
    sinf: "",
    javob: "",
  });
  const [correct, setCorrect] = useState()
  const [wrong, setWrong] = useState()
  const [score, setScore] = useState()

  let answers = {
    5: "DCADACCABDBDCDDABAACBDABCABCDB", //1
    6: "ABCDBBADCDDBCDDACABAABDCBACBDA", //2
    7: "ADCBDACBDABCBADCABDC", //1
    8: "DDCBCBBDCADBCBCDBCBB", //2
    9: "BAACDCABDCAADBDCABCA", //1
    10: "DDCBACCCDACBBABBACAB", //2
    11: "CBAABBCADCCDBDCCBABD", //2
  };

  function tekshirish(e) {
    e.preventDefault()
    let count = 0;
    let wrongAns = 0;
    let score = 0
    let clas = answers[check.sinf];

    if (clas === '5' || clas === '6' && check.javob.length !== 30) {
        console.log('xato')
    }
    else if (clas === '7' || clas === '8' || clas === '9' || clas === '10' || clas === '11') {
      if (check.javob.length !== 20) {
        console.log('xato')
      }
    }
    else {
      console.log('true')
    }
    for (let i = 0; i < check.javob.length; i++) {
      if (clas[i] === check.javob[i]) {
        count += 1;
      }
    }
    wrongAns = check.javob.length - count;
    score = (count / check.javob.length) * 100
    setCorrect(count)
    setWrong(wrongAns)
    setScore(score)
  }

  const onChange = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "sinf",
      type: "number",
      placeholder: "Sinfingizni yozing",
    },
    {
      id: 2,
      name: "javob",
      type: "text",
      placeholder: "Javobingizni yozing",
    }
  ];

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
        {inputs.map((input) => (
          <>
            <TextInput
              key={input.id}
              {...input}
              value={check[input.name]}
              onChange={onChange}
            />
            <i>{input.errorMessage}</i>
          </>
        ))}
        <button onClick={tekshirish} >Submit</button>
      </div>
      <div className="result">
        <h3>Natija</h3>
        <p>
          Jami savollar: <span>{check.sinf == '5' || check.sinf == '6' ? 30 : 20}</span>
        </p>
        <p>
          To'g'ri javoblar: <span>{correct}</span>
        </p>
        <p>
          No'to'g'ri javoblar: <span>{wrong}</span>
        </p>
        <p>
          Foiz ko'rsatkich: <span>{Math.floor(score)}</span>%
        </p>
      </div>
    </div>
  );
};

export default FileQuiz;
