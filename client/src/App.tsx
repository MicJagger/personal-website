import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './views/HomePage'
import Projects from './views/Projects'

function App() {

    function checkView(view: MediaQueryList) {
        if (view.matches) {
            localStorage.setItem("format", "mobile");
        } else {
            localStorage.setItem("format", "desktop");
        }
    }
    
    // watch to see if view is thin
    const view = window.matchMedia("(max-width: 900px)");
    checkView(view);
    view.addEventListener("change", function() {
        checkView(view);
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
