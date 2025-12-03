import "quill/dist/quill.snow.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill-new";

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
          <Form.Label>범이비누 사용 후기</Form.Label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
            style={{ height: "200px" }} // Apply custom styling if needed
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          저장
        </Button>
      </Form>
    </Container>
  );
}

export default MyBootstrapQuillEditor;
