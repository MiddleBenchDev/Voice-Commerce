import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';

const Home = () => {
    const history = useHistory()
    return (
        <div
            style={{
                backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-purple-simple-gradient-background-image_760572.jpg')`,
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <div
                style={{
                    width: "30%",
                    boxShadow: "2px 2px 6px gray",
                    borderColor: "black",
                    borderWidth: "1px",
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    padding: '32px',
                    textAlign: 'center',
                }}
            >
                <h1>Welcome to Voice Commerce</h1>
                <p>Please sign in or sign up to have a new experience.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                    <button onClick={() => history.push("/sign-in")}>
                        <b style={{ color: "blue" }}>Sign In</b>
                    </button>
                    <button onClick={() => history.push("/sign-up")}>
                        <b style={{ color: "blue" }}>Sign Up</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home
