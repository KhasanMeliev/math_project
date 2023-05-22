import { Route, Routes } from "react-router-dom";
import Form from "./Form/Form";
import Quiz from "./Question/Quiz/Quiz";
import FileQuiz from "./Question/FileQuiz/FileQuiz";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/login" element={<Form />} />
      <Route path="/filequiz" element={<FileQuiz />} />
      <Route path="/quizapp" element={<Quiz />} />
    </Routes>
  );
}

export default App;
