import { Route, Routes } from "react-router-dom";
import Form from "./Form/Form";
import Quiz from "./pages/Quiz/Quiz";
import FileQuiz from "./pages/FileQuiz/FileQuiz";
import "./App.css";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/login" element={<Form />} />
      <Route path="/filequiz" element={<FileQuiz />} />
      <Route path="/quizapp" element={<Quiz />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
