import "quill/dist/quill.snow.css"; // For the snow theme
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyBootstrapQuillEditor from "./components/MyBootstrapQuillEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Use Routes in React Router v6+ */}
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<MyBootstrapQuillEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
