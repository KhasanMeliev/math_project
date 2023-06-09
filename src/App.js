import { Route, Routes } from "react-router-dom";
import Form from "./Form/Form";
import Quiz from "./pages/Quiz/Quiz";
import FileQuiz from "./pages/FileQuiz/FileQuiz";
import "./App.css";
import Profile from "./pages/Profile/Profile";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    class: "",
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Form values={values} setValues={setValues} />}
        />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Form />} />
        <Route path="/filequiz" element={<FileQuiz />} />
        <Route path="/quizapp" element={<Quiz />} />
        <Route path="/profile" element={<Profile values={values} />} />
      </Routes>
    </>
  );
}

export default App;
