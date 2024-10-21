import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Spinner } from 'react-bootstrap'; // For loading spinner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import icons

// Add the video import
import loadingVideo from './assets/img/Ferv.mp4';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // For registration
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoadingVideo, setShowLoadingVideo] = useState(true); // Add state for loading video

  // Hide the loading video after it plays
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingVideo(false);
    }, 3000); // Adjust this time based on the actual length of your video
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost/login-api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle registration submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost/login-api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setErrorMessage('Registration successful! Please login.');
        setIsRegistering(false); // Switch to login form after registration
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Solid CSS for text
  const gradientTextStyle = {
    color: '#fff', // Use solid white color
    fontSize: '3rem', // Font size for "Fervis"
    display: 'inline-block', // Ensure the text is displayed correctly
  };

  // Solid style for login/register heading
  const loginRegisterTextStyle = {
    color: '#000', // Use solid white color
    fontSize: '2.5rem', // Font size for login/register
    display: 'inline-block', // Ensure the text is displayed correctly
    marginTop: '5px', // Margin for spacing
  };

  // Show the loading video first before showing the login page
  if (showLoadingVideo) {
    return (
      <div className="loading-container d-flex justify-content-center align-items-center vh-100">
        <video width="100%" height="auto" autoPlay muted>
          <source src={loadingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // If not logged in, display the login or registration form
  if (!isLoggedIn) {
    return (
      <div className="main-container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="shining-text" style={gradientTextStyle}>
          {/* Centered "Fervis" name */}
        </h1>
        <div className="login-box p-5 shadow-lg rounded">
          <h2 className="text-center mb-4">
            <span style={loginRegisterTextStyle}>
              {isRegistering ? 'Register' : 'Login'}
            </span> {/* Solid Login/Register */}
          </h2>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            <div className="form-group mb-3 position-relative">
              <label htmlFor="username">Username</label>
              <FontAwesomeIcon icon={faUser} className={`input-icon ${username ? 'active' : ''}`} />
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={(e) => e.target.previousElementSibling.classList.add('active')}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.previousElementSibling.classList.remove('active');
                  }
                }}
                required
                style={{ paddingLeft: '50px' }} // Adjusted padding to move the cursor further from the line
              />
              <span className="vertical-line"></span>
            </div>
            {isRegistering && (
              <div className="form-group mb-3 position-relative">
                <label htmlFor="email">Email</label>
                <FontAwesomeIcon icon={faEnvelope} className={`input-icon ${email ? 'active' : ''}`} />
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) => e.target.previousElementSibling.classList.add('active')}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.previousElementSibling.classList.remove('active');
                    }
                  }}
                  required
                  style={{ paddingLeft: '50px' }} // Adjusted padding to move the cursor further from the line
                />
                <span className="vertical-line"></span>
              </div>
            )}
            <div className="form-group mb-4 position-relative">
              <label htmlFor="password">Password</label>
              <FontAwesomeIcon icon={faLock} className={`input-icon ${password ? 'active' : ''}`} />
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => e.target.previousElementSibling.classList.add('active')}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.previousElementSibling.classList.remove('active');
                  }
                }}
                required
                style={{ paddingLeft: '50px' }} // Adjusted padding to move the cursor further from the line
              />
              <span className="vertical-line"></span>
            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary w-100 submit-btn"
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : isRegistering ? 'Register' : 'Login'}
            </button>
          </form>
          <div className="text-center mt-3 switch-form">
            {isRegistering ? (
              <p>
                Already have an account?{' '}
                <button
                  className="btn btn-link text-purple"
                  onClick={() => setIsRegistering(false)}
                >
                  Login here
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  className="btn btn-link text-purple"
                  onClick={() => setIsRegistering(true)}
                >
                  Register here
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Inline CSS for the icons and vertical line */}

      </div>
    );
  } 

  // If logged in, display the main content
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
