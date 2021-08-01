import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import { Button } from "react-bootstrap";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
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
        variant={editor.isActive("strike") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="m-2"
      >
        <i className="fas fa-strikethrough"></i>
      </Button>

      <Button
        variant="outline-dark"
        onClick={() =>
          editor
            .chain()
            .focus()
            .setImage({
              src: "https://pbs.twimg.com/profile_images/1211920692368695299/J6eYihlX_400x400.jpg",
            })
            .run()
        }
        className="m-2"
      >
        <i className="fas fa-file-image"></i>
      </Button>
      <Button
        variant="outline-dark"
        onClick={() =>
          editor
            .chain()
            .focus()
            .setLink({ href: "https://www.google.com" })
            .run()
        }
        className="m-2"
      >
        <i className="fas fa-link"></i>
      </Button>
      <Button variant="outline-dark" className="m-2">
        <i className="fas fa-magic"></i>
      </Button>
    </div>
  );
};

function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image, Underline],
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className="testing" editor={editor} />
    </div>
  );
}

export default Tiptap;
