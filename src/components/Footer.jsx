import React from "react";

export const Footer = () => {
  return (
    <footer className="footer border border-dark bg-dark text-white p-2 text-center">
      <h5 className="text-secondary">
        Made with <i className="fas fa-heart text-danger"></i> by{" "}
        <em className="text-white">Supminn</em>
      </h5>
      <div>
        <a rel="noopener noreferrer" href="https://github.com/supminn">
          <i className="m-2 fab fa-github fa-lg"></i>
        </a>
        <a rel="noopener noreferrer" href="https://twitter.com/supminn">
          <i className="m-2 fab fa-twitter fa-lg"></i>
        </a>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/supminn">
          <i className="m-2 fab fa-linkedin-in fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};
