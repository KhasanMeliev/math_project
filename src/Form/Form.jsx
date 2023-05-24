import { Button, TextInput } from "@mantine/core";
import "./FormStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";

function Form() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
  };
  const [details, setDetails] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name === "") {
      swal("Error!", "Name isn't blank", "error");
      return false;
    } else if (details.email === "") {
      swal("Error!", "Email isn't blank or less than 6 characters", "error");
      return false;
    } else {
      swal("Success!", "Successfully Logined", "success");
      return navigate("/quizapp");
    }
  };
  return (
    <div className="formWrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={handleSubmit} autocomplete="off">
        <TextInput
          label="Name"
          placeholder="Name"
          autoComplete="off"
          value={details.name}
          onChange={(e) => {
            setDetails({ ...details, name: e.target.value });
          }}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />

        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
