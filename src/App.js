import { useState } from "react";
import "./App.css";
import { Editor, Instructions, NavBar } from "./components";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div className="App">
      <NavBar setShow={setShowInstructions} />
      <Editor />
      {showInstructions && (
        <Instructions setShow={setShowInstructions} show={showInstructions} />
      )}
    </div>
  );
}

export default App;

//https://olvyhq.notion.site/Build-a-Rich-Text-Editor-9345819429f5474cbd100f31c7ae852d
