import React from "react";
import "./FileQuiz.css";
import { Select, TextInput } from "@mantine/core";
import { useState } from "react";

const FileQuiz = () => {
  const [sinf, setSinf] = useState()
  const [javob, setJavob] = useState("")

  let answers = {
    5: "DCADACCABDBDCDDABAACBDABCABCDB", //1
    6: "ABCDBBADCDDBCDDACABAABDCBACBDA", //2
    7: "ADCBDACBDABCBADCABDC", //1
    8: "DDCBCBBDCADBCBCDBCBB", //2
    9: "BAACDCABDCAADBDCABCA", //1
    10: "DDCBACCCDACBBABBACAB", //2
    11: "CBAABBCADCCDBDCCBABD", //2
  };

  function tekshirish(sinf, javob) {
    // let count = 0;
    // let clas = answers[sinf];
    // for (let i = 0; i < javob.length; i++) {
    //   if (clas[i] === javob[i]) {
    //     count += 1;
    //   }
    // }
    // console.log(count);
    console.log(setJavob(javob))
  }

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
          name="javob"
          value={javob} 
          onChange={e => setJavob(e.target.value)}
        />
        <button onClick={tekshirish}>Submit</button>
      </div>
    </div>
  );
};

export default FileQuiz;
