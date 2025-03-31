
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './views/HomePage'

function App() {
    
    // watch to see view width (if it works it works, will likely make pretty later)
    const verythin = window.matchMedia("(max-width: 431px)");
    const thin = window.matchMedia("(min-width: 432px) and (max-width: 799px)");
    const wide = window.matchMedia("(min-width: 800px) and (max-width: 1199px)");
    const verywide = window.matchMedia("(min-width: 1200px)");
    verythin.addEventListener("change", function() { // verythin is not completely implemented
        if (thin.matches) {
            localStorage.setItem("format", "verythin");
        }
    });
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
