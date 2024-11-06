// Footer.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 0',
    fontSize: '0.9rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  linkList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    lineHeight: '2',
  },
  linkItem: {
    color: '#ddd',
    textDecoration: 'none',
    display: 'block',
    padding: '0.2rem 0',
  },
  contactInfo: {
    lineHeight: '1.6',
  },
  subscribeInputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  subscribeInput: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ccc',
  },
  subscribeButton: {
    backgroundColor: '#61dafb',
    border: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    color: '#333',
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  socialIcon: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#ddd',
    fontSize: '0.8rem',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Quick Link Section */}
          <div className="col-md-3">
            <h2 style={styles.sectionTitle}>Quick Link</h2>
            <ul style={styles.linkList}>
              <li><a href="#" style={styles.linkItem}>About Us</a></li>
              <li><a href="#" style={styles.linkItem}>Terms & Conditions</a></li>
              <li><a href="#" style={styles.linkItem}>Privacy Policy</a></li>
              <li><a href="#" style={styles.linkItem}>Help</a></li>
              <li><a href="#" style={styles.linkItem}>Rooms</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3">
            <h2 style={styles.sectionTitle}>Support</h2>
            <ul style={styles.linkList}>
              <li><a href="#" style={styles.linkItem}>Our Location</a></li>
              <li><a href="#" style={styles.linkItem}>The Hosts</a></li>
              <li><a href="#" style={styles.linkItem}>About</a></li>
              <li><a href="#" style={styles.linkItem}>Contact</a></li>
              <li><a href="#" style={styles.linkItem}>Restaurant</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3">
            <h2 style={styles.sectionTitle}>Contact Info</h2>
            <div style={styles.contactInfo}>
              <p><strong>Address:</strong><br />98 West 21th Street, Suite 721, New York NY 10016</p>
              <p><strong>Phone:</strong><br />(+1) 435 3533</p>
              <p><strong>Email:</strong><br />info@yourdomain.com</p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-3">
            <h2 style={styles.sectionTitle}>Subscribe</h2>
            <p>Sign up for our newsletter</p>
            <div style={styles.subscribeInputContainer}>
              <input
                type="email"
                placeholder="Your email..."
                style={styles.subscribeInput}
              />
              <button
                style={styles.subscribeButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4ea3d5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#61dafb'}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Centered Social Media Icons */}
        <div style={styles.socialIconsContainer}>
          <a href="#" style={styles.socialIcon}><FaFacebookF /></a>
          <a href="#" style={styles.socialIcon}><FaTwitter /></a>
          <a href="#" style={styles.socialIcon}><FaInstagram /></a>
          <a href="#" style={styles.socialIcon}><FaLinkedinIn /></a>
          <a href="#" style={styles.socialIcon}><FaYoutube /></a>
        </div>

        {/* Copyright Text */}
        <div style={styles.copyright}>
          <p>
            Copyright © 2024 All rights reserved | This template is made with ♥ by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
