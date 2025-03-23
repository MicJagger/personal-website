import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

import HomePage from './views/HomePage'
import Projects from './views/Projects'

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
