import React from "react";
import "./FileQuiz.css";
import { TextInput } from "@mantine/core";
import { useState } from "react";
import swal from "sweetalert";
import five from "../../assets/files/five.pdf";
import six from "../../assets/files/six.pdf";
import seven from "../../assets/files/seven.pdf";
import eight from "../../assets/files/eight.pdf";
import nine from "../../assets/files/nine.pdf";
import ten from "../../assets/files/ten.pdf";
import eleven from "../../assets/files/eleven.pdf";



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
    if ((check.sinf === "" || check.javob.length === 0)) {
      swal("Xato", "Inputlarni to'ldiring!", "error");
    }
    if ((check.javob.length < 30) && (check.sinf === '5' || check.sinf === '6')) {
      swal("Xato", "Test kalitlari 30 ta bo'lishi kerak!", "error");
      return false
    }
    else if (check.sinf === '7' || check.sinf === '8' || check.sinf === '9' || check.sinf === '10' || check.sinf === '11') {
      if (check.javob.length !== 20) {
        swal("Xato", "Test kalitlari 20 ta bo'lishi kerak!", "error");
        return false
      }
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
        <a href={five} target="_blank" rel="noreferrer"> <div>5 - sinf Algebra</div></a>
        <a href={six} target="_blank" rel="noreferrer"> <div>6 - sinf Algebra</div></a>
        <a href={seven} target="_blank" rel="noreferrer"> <div>7 - sinf Algebra</div></a>
        <a href={eight} target="_blank" rel="noreferrer">  <div>8 - sinf Algebra</div></a>
        <a href={nine} target="_blank" rel="noreferrer"> <div>9 - sinf Algebra</div></a>
        <a href={ten} target="_blank" rel="noreferrer">  <div>10 - sinf Algebra</div></a>
        <a href={eleven} target="_blank" rel="noreferrer">  <div>11 - sinf Algebra</div></a>
      </div>
      <div className="javob">
        {inputs.map((input) => (
          <>
            <TextInput
              key={input.id}
              {...input}
              value={check[input.name]}
              onChange={onChange}
              autoComplete="off"
              className="input"
            />
            <i>{input.errorMessage}</i>
          </>
        ))}
        <button onClick={tekshirish} >Submit</button>
      </div>
      {correct?<div className="result">
        <h3>Natija</h3>
        <p>
          Jami savollar: <span>{check.sinf === '5' || check.sinf === '6' ? 30 : 20}</span>
        </p>
        <p>
          To'g'ri javoblar: <span>{correct}</span>
        </p>
        <p>
          No'to'g'ri javoblar: <span>{wrong}</span>
        </p>
        <p>
          Foiz ko'rsatkich: <span>{score ? Math.floor(score) : 0}</span>%
        </p>
      </div>:<p>Javob yuboring</p>}
    </div>
  );
};

export default FileQuiz;
