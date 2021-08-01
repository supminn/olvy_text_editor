import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { findMeme } from "../services";
import { LinkModal } from "./LinkModal";

export const EditorOptions = ({ editor }) => {
  const linkType = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const linkHandler = (type) => {
    setShowModal(true);
    linkType.current = type;
  };

  const memeHandler = async () => {
    let htmlContent = editor.getHTML();
    const regExp = /\{\{(.+?)_meme\}\}/;
    if (regExp.test(htmlContent)) {
      const searchWord = htmlContent.match(regExp)[1];
      const imageURL = await findMeme(searchWord);
      if (imageURL !== "no results found") {
        const newContent = `<img src="${imageURL}" alt="${searchWord}"/>`;
        htmlContent = htmlContent.replace(regExp, "");
        htmlContent += newContent;
        editor.commands.setContent(htmlContent);
      }
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center flex-wrap p-2">
      {showModal && (
        <LinkModal
          show={showModal}
          setShow={setShowModal}
          editor={editor}
          linkType={linkType.current}
        />
      )}
      <Button
        variant="outline-secondary"
        onClick={() => editor.chain().focus().undo().run()}
        className="m-2"
      >
        <i className="fas fa-undo-alt"></i>
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => editor.chain().focus().redo().run()}
        className="m-2"
      >
        <i className="fas fa-redo-alt"></i>
      </Button>
      <Button
        variant={editor.isActive("bold") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="m-2"
      >
        <i className="fas fa-bold"></i>
      </Button>
      <Button
        variant={editor.isActive("italic") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="m-2"
      >
        <i className="fas fa-italic"></i>
      </Button>
      <Button
        variant={editor.isActive("underline") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="m-2"
      >
        <i className="fas fa-underline"></i>
      </Button>
      <Button
        variant="outline-dark"
        onClick={() => linkHandler("image")}
        className="m-2"
      >
        <i className="fas fa-file-image"></i>
      </Button>
      <Button
        variant="outline-dark"
        onClick={() => linkHandler("link")}
        className="m-2"
      >
        <i className="fas fa-link"></i>
      </Button>
      <Button variant="outline-dark" className="m-2" onClick={memeHandler}>
        <i className="fas fa-magic"></i>
      </Button>
    </div>
  );
};
