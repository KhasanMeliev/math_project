import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./FormStyle.css";
import { Link } from "react-router-dom";

function Form() {
  const form = useForm({
    initialValues: { name: "", email: "", class: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      class: (value) => (value === "" ? "Choose your class" : null),
    },
  });
  return (
    <div className="formWrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={form.onSubmit(console.log())}>
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
          {...form.getInputProps("class")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
      <Button style={{ clor: "white", marginTop: "20px" }}>
        <Link to="/quizapp" style={{ textDecoration: "none", color: "white" }}>
          Quiz App ga o'tish
        </Link>
      </Button>
    </div>
  );
}

export default Form;
