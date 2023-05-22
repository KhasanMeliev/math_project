import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./FormStyle.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: { name: "", email: "", class: "" },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      class: (value) => (value === "" ? "Choose your class" : null),
    },
  });

  const handleSubmit = () => {
    if (form) {
      navigate("/filequiz", { replace: true });
    } else {
      return;
    }
  };

  return (
    <div className="formWrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Select
          label="Sinfingizni tanlang"
          placeholder="Sinf"
          searchable
          data={[
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },
            { value: "11", label: "11" },
          ]}
          {...form.getInputProps("sinf")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
