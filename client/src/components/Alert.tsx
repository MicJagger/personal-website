interface AlertDetails {
    message: string;
    type: string;
}

const Alert: React.FC<AlertDetails> = ({message, type}) => {
    if (message === "null") {
        return null;
    }
    
    return (
        <div role="alert" className={`alert ${type}`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            <span>{message}</span>
        </div>
    );
}

export default Alert