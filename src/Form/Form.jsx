import "./FormStyle.css";
import swal from "sweetalert";
import FormInput from "./FormInput/FormInput";
import {  useNavigate } from "react-router-dom";

function Form(props) {
  const {values, setValues} = props;
  const navigate = useNavigate();
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username 3-16 ta harf bo'lishi mumkin, oradan bo'sh joylar qolmasin!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "To'g'ri email ni kiritishingiz kerak!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Parol 8-20 belgidan iborat bo'lishi va kamida 1 harf, 1 raqam va 1 ta maxsus belgidan iborat bo'lishi kerak!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "class",
      type: "number",
      placeholder: "Sinf",
      errorMessage: "Berilgan sinflarda birini tanlang!",
      label: "Choose your class",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Tayyor", "Profile muvaffaqiyatli yaratildi", "success");    
    console.log(values)
    navigate("/profile");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formWrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={handleSubmit} autoComplete="on" >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
