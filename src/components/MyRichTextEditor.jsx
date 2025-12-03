import "quill/dist/quill.snow.css"; // Import Quill styles
import { useState } from "react";
import ReactQuill from "react-quill";

function MyRichTextEditor() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default MyRichTextEditor;
