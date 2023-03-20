/* Modules */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Components */
import Chat from "./chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
