import "quill/dist/quill.snow.css"; // For the snow theme
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyQuillEditor from "./components/MyQuillEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Use Routes in React Router v6+ */}
        <Route path="/" element={<MyQuillEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
