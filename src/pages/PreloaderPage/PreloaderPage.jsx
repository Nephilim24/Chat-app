import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './PreloadPage.css';

const PreloaderPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');

        const timeout = setTimeout(() => {
            if (token) {
                navigate('/chat');
            } else {
                navigate('/login');
            }
        }, 2000);
        return () => clearTimeout(timeout);

    }, [navigate]);

    return (
        <>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreloaderPage;