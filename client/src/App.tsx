import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';

import HomePage from './views/HomePage'
import Projects from './views/Projects'

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
