
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './views/HomePage'

function App() {
    
    // watch to see view width (if it works it works, will likely make pretty later)
    const thin = window.matchMedia("(max-width: 800px)");
    const wide = window.matchMedia("(min-width: 800px) and (max-width: 1200px)");
    const verywide = window.matchMedia("(min-width: 1200px)");
    thin.addEventListener("change", function() {
        if (thin.matches) {
            localStorage.setItem("format", "thin");
        }
    });
    wide.addEventListener("change", function() {
        if (wide.matches) {
            localStorage.setItem("format", "wide");
        }
    });
    verywide.addEventListener("change", function() {
        if (verywide.matches) {
            localStorage.setItem("format", "verywide");
        }
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={HomePage()} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
