import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateNote from "./Page/CreateNote";
import EditNote from "./Page/EditNote";
import Note from "./Page/Note";

function App() {
  return
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note />} />
      <Route path="create-note" element={<CreateNote />} />
      <Route path="edit-note:id" element={<EditNote />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
