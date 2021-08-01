import { useState } from "react";
import "./App.css";
import { Editor, Footer, Instructions, NavBar } from "./components";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div className="App">
      <NavBar setShow={setShowInstructions} />
      <div className="main-container">
        <Editor />
        {showInstructions && (
          <Instructions setShow={setShowInstructions} show={showInstructions} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

//https://olvyhq.notion.site/Build-a-Rich-Text-Editor-9345819429f5474cbd100f31c7ae852d
