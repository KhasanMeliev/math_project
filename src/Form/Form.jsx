import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./FormStyle.css";

function Form() {
  const form = useForm({
    initialValues: { name: "", email: "", sinf: "" },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      sinf: (value) => (value === "" ? "Sinfingizni tanlang" : null),
    },
  });
  return (
    <div className="wrapper">
      <h2>Saytga kirish</h2>
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
          className="input"
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
          className="input"
        />
        <Select
          label="Sinfingizni tanlang"
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
          {...form.getInputProps("sinf")}
          className="input"
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
