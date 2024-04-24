import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CameraApp from "./CameraApp";
import DebugView from "./Debug";
import { MessageProvider } from "./MessageProvider";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <MessageProvider>
        <BrowserRouter basename="/react-webcam">
          <Routes>
            <Route path="/" element={<CameraApp />} />
            <Route path="/debug" element={<DebugView />} />
          </Routes>
        </BrowserRouter>
      </MessageProvider>
    </React.StrictMode>
  );
}

export default App;
