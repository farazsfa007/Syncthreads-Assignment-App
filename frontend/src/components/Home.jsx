import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess } from '../utils'
import { ToastContainer } from 'react-toastify'

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logout');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const cards = [
        { id: 1, title: "Map Of India" },
        { id: 2, title: "Card 2" },
        { id: 3, title: "Card 3" }
    ];

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg text-center" style={{ width: "400px" }}>
                <h1 className="text-primary">Dashboard</h1>
                <h2 className="text-secondary">Hello, {loggedInUser}</h2>
            </div>

            {/* Cards Section */}
            <div className="mt-4 d-flex flex-wrap gap-3">
                {cards.map((card) => (
                    <div 
                        key={card.id} 
                        className="card p-3 shadow-sm text-center" 
                        style={{ width: "200px", cursor: "pointer" }}
                        onClick={() => navigate('/map')}
                    >
                        <h5>{card.title}</h5>
                    </div>
                ))}
            </div>

            <button onClick={handleLogout} className="btn btn-danger mt-3">
                Logout
            </button>

            <ToastContainer />
        </div>
    );
}

export default Home