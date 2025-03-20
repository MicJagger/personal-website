import Alert from '../components/Alert'
import logo from '../logo.svg';
import '../styles/HomePage.css';
import NavBar from '../components/NavBar';
import {useState} from 'react'

const HomePage = () => {
    const [alertMessage, setAlertMessage] = useState("null");

    const throwError = (message:string) => {
        setAlertMessage(message);
    }

    const endError = () => {
        setAlertMessage("null");
    }

    return (
        <>
            <head>
                <link rel="logo" href="../../public/favicon.ico" type="image/png"></link>
                <title>Michael Jagiello</title>
            </head>

            <NavBar />

            <header className="HomePage-header">

                <img src={logo} className="HomePage-logo" alt="logo" />
                <p>
                    hello world
                </p>
                <a
                    className="HomePage-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    get help
                </a>
            </header>

            <footer>
                
            </footer>

        </>
    );
}

export default HomePage