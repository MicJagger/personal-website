import Alert from '../components/Alert'
import Footer from '../components/Footer'
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

            <section id="profile" className="homepage-profile">
                <img src={logo} className="homepage-logo" alt="logo" />
                <p className="homepage-profile-text">
                    Michael Jagiello
                </p>
            </section>

            <section id="projects" className="homepage-projects">
                
            </section>

            <Footer />
        </>
    );
}

export default HomePage