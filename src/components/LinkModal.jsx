import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";

export const LinkModal = ({ show, setShow, editor, linkType }) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = () => {
    if (
      !/(http(s)?:\/\/.)[-a-zA-Z0-9@:%.+_~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/.test(
        link
      )
    ) {
      setError("The URL is incomplete - provide the full url.");
    } else {
      if (linkType === "image") {
        editor.chain().focus().setImage({ src: link }).run();
      } else {
        editor
          .chain()
          .focus()
          .setLink({ href: `${link}` })
          .run();
      }
      setShow(false);
    }
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {linkType === "image"
            ? "Provide image URL"
            : "Provide external link URL"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="input-group">
          <span className="p-2 bg-dark text-white">URL</span>
          <input
            ref={inputRef}
            type="text"
            value={link.url}
            onChange={(e) => setLink(e.target.value)}
          />
          {error && <small className="text-danger d-block">{error}</small>}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={submitHandler} variant="dark">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
