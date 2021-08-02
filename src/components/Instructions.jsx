import { Button, Modal } from "react-bootstrap";
import React from "react";

export const Instructions = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          How to use 👉 <em>Richie editor</em>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You could format your text in the following ways within this editor!
          <ul>
            <li>
              Make your text <strong>bold</strong> by selecting{" "}
              <Button variant="outline-dark">
                <i className="fas fa-bold"></i>
              </Button>{" "}
              or with the keyboard shortcut ➡ <code>Ctrl + B</code>
            </li>
            <li>
              Make your text <em>italic</em> by selecting{" "}
              <Button variant="outline-dark">
                <i className="fas fa-italic"></i>
              </Button>{" "}
              or with the keyboard shortcut ➡ <code>Ctrl + I</code>
            </li>
            <li>
              <u>Underline</u> your text by selecting{" "}
              <Button variant="outline-dark">
                <i className="fas fa-underline"></i>
              </Button>{" "}
              or with the keyboard shortcut ➡ <code>Ctrl + U</code>
            </li>
            <li>
              You can add images within this editor. Use the{" "}
              <Button variant="outline-dark">
                <i className="fas fa-file-image"></i>
              </Button>{" "}
              button to insert the image URL.
            </li>
            <li>
              Add external links within the editor. Hightlight any given text
              and click on{" "}
              <Button variant="outline-dark">
                <i className="fas fa-link"></i>
              </Button>{" "}
              button to insert a valid URL.
            </li>
            <li>
              Make your text interesting by adding some memes! Type{" "}
              <code>{"{{topic_meme}}"}</code> and click on{" "}
              <Button variant="outline-dark">
                <i className="fas fa-magic"></i>
              </Button>{" "}
              and see the magic! <br />
              <strong>Ex:</strong> <code>{"{{cat_meme}}"}</code> gives a cat
              meme.
            </li>
            <li>
              Drag and re-arrange your images and meme. Simply use the{" "}
              <code>delete</code> button to remove them.
            </li>
          </ul>
        </p>
        <h5>You're good to go! Let's get started with Richie 🙂</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
