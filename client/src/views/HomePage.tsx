import Alert from '../components/Alert'
import logo from '../logo.svg';
import '../styles/HomePage.css';
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
            <Alert message={alertMessage} type={"alert-error"} />

            <header className="App-header">
                
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    hello world
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    get help
                </a>
            </header>
        </>
    );
}

export default HomePage