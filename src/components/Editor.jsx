import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { EditorOptions } from "./EditorOptions";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image, Underline],
    autofocus: true,
  });

  return (
    <div className="m-2 p-1">
      <EditorOptions editor={editor} />
      <p>
        Get started with Richie text editor: <br />
        <span>
          Sample image URL:{" "}
          <a href="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg">
            Link
          </a>
        </span>
      </p>

      <EditorContent className="editor-container" editor={editor} />
    </div>
  );
};
