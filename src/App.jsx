import "quill/dist/quill.snow.css"; // For the snow theme
import "./App.css";
import MyBootstrapQuillEditor from "./components/MyBootstrapQuillEditor";
import MyRichTextEditor from "./components/MyRichTextEditor";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes in React Router v6+ */}
        <Route path="/" element={<Home />} />
        <Route path="/editor1" element={<MyRichTextEditor />} />
        <Route path="/editor2" element={<MyBootstrapQuillEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
