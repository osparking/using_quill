import "quill/dist/quill.snow.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"; // Import Bootstrap components
import ReactQuill from "react-quill";

function MyBootstrapQuillEditor() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  const handleSubmit = () => {
    console.log("Editor Content:", editorContent);
    // Handle saving or processing the content
  };

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Rich Text Content</Form.Label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
            style={{ height: "200px" }} // Apply custom styling if needed
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default MyBootstrapQuillEditor;
