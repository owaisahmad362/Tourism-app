// Contact.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Contact = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Header Content */}
      {!menuVisible && (
        <header
          style={{
            backgroundImage: 'url(../src/assets/img-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            height: '100vh',
            position: 'relative',
          }}
        >
          <div className="container-fluid h-100">
            <div className="d-flex justify-content-between align-items-center h-100">
              {/* Logo on the left */}
              <Link
                className="navbar-brand"
                to="/"
                style={{
                  color: '#fff',
                  position: 'absolute',
                  top: '20px',
                  left: '10px',
                }}
              >
                <h2 style={{ margin: 0, fontSize: 40, fontWeight: 'bold' }}>Hepta</h2>
              </Link>

              {/* Toggle Button for the Menu on the right */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                style={{
                  border: 'none',
                  color: '#fff',
                  position: 'absolute',
                  top: '20px',
                  right: '10px',
                }}
              >
                <FaBars style={{ fontSize: '2.5rem' }} />
              </button>
            </div>

            {/* Centered Content */}
            <div
              className="text-center position-absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 'bolder' }}>Contact</h1>
              <p style={{ margin: '10px 0', fontSize: '1.5rem' }}>
                A free template by{' '}
                <span
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.target.style.color = 'blue')}
                  onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                >
                  Colorlib
                </span>
                . Download and share!
              </p>
            </div>
          </div>
        </header>
      )}

      {/* Offcanvas Menu */}
      {menuVisible && (
        <div
          style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
          }}
        >
          <ul
            className="navbar-nav text-center"
            style={{
              fontSize: '2rem',
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              color: 'black',
            }}
          >
            {['Home', 'Hotels', 'About Us', 'Gallery', 'News', 'Contact'].map((item, index) => (
              <li className="nav-item" key={index} style={{ margin: '1rem 0' }}>
                <Link
                  className="nav-link"
                  to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  style={{
                    color: 'black',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'blue')}
                  onMouseLeave={(e) => (e.target.style.color = 'black')}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <button
            type="button"
            className="btn-close btn-close-dark"
            onClick={toggleMenu}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '2.5rem',
              cursor: 'pointer',
            }}
          ></button>
        </div>
      )}
    </>
  );
};

export default Contact;
