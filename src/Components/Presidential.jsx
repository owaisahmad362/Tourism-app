import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../assets/img_2_long.jpg'; // Update this path based on your project structure
import { useState } from 'react';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  content: {
    padding: '1.5rem',
  },
  title: {
    fontSize: '2.5rem', // Large font size for "Presidential Room"
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    color: '#555',
    marginBottom: '1rem',
  },
  button: {
    border: '1px solid lightblue',
    backgroundColor: 'white',
    color: 'black',
    padding: '0.5rem 1.5rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    transition: 'all 0.3s',
  },
  buttonHover: {
    backgroundColor: 'lightblue',
    color: 'white',
  },
};

const Presidential = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <div className="row" style={styles.container}>
        {/* Text content on the left */}
        <div className="col-md-6" style={styles.content}>
          <h2 style={styles.title}>Presidential Room</h2>
          <p style={styles.description}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p style={styles.description}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button
            style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Learn More
          </button>
        </div>

        {/* Image on the right */}
        <div className="col-md-6">
          <img src={img2} alt="Presidential Room" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Presidential;
