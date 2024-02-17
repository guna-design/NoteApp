import "./App.css";
import Dashboard from "./Components/Dashboard";
import Edit from "./Components/Edit";

import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesContext from "./Context/Notedata";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <NotesContext>
              <Dashboard />
            </NotesContext>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <NotesContext>
              <Dashboard />
            </NotesContext>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <NotesContext>
              <Edit />
            </NotesContext>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
