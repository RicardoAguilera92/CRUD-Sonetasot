import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CurpList from './components/CurpList';
import Form from './components/form';
import Menu from "./components/navbar"
import { Container } from "@mui/material"

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<CurpList />} />
          <Route path='/curps/nuevo' element={<Form />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

