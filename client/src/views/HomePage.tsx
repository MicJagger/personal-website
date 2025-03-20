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
                <title>Michael Jagiello</title>
            </head>

            <NavBar />

            <section id="profile" className="HomePage-profile">
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
            </section>

            <section id="projects">

            </section>

            <section id="contact">

            </section>

            <footer>
                
            </footer>

        </>
    );
}

export default HomePage