import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import CurpList from "./components/CurpList";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="container mx-auto px-20">
        <Navbar />
        <Routes>
          <Route index path="/" element={<CurpList />} />
          <Route path="/curp/nuevo" element={<Form />} />
          <Route path="/curp/:id/editar" element={<Form />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
