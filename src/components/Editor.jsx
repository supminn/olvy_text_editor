import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { EditorOptions } from "./EditorOptions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "react-bootstrap";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image, Underline, Placeholder],
    autofocus: true,
  });

  return (
    <div className="m-2 p-1 text-center">
      <EditorOptions editor={editor} />
      <em className="m-1">
        Use sample image URL:{" "}
        <CopyToClipboard text="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg">
          <Button variant="outline-dark">
            <i className="far fa-copy"></i> Copy
          </Button>
        </CopyToClipboard>
      </em>
      <EditorContent className="editor-container" editor={editor} />
    </div>
  );
};
