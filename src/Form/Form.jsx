import { Button } from "@mantine/core";
import "./FormStyle.css";
import { useState } from "react";
import swal from "sweetalert";
import FormInput from "./FormInput/FormInput";

function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    class: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "class",
      type: "number",
      placeholder: "Sinf",
      errorMessage: "Class don't match!",
      label: "Choose your class",
      pattern:'^\d{1,9}$',
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formWrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <TextInput
          label="Email"
          placeholder="Email"
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        /> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
