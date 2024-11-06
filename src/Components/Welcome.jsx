import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlay } from 'react-icons/fa';

// CSS styles
const styles = {
  container: {
    paddingTop: '3rem', // Space from the top of the component
    paddingBottom: '3rem', // Additional padding for bottom spacing
  },
  imageColumn: {
    marginBottom: '2rem', // Gap between the image and text content
  },
  heading: {
    fontSize: '3rem', // Larger font size for the welcome title
  },
  buttonPrimary: {
    backgroundColor: '#61dafb',
    borderColor: '#61dafb',
  },
  buttonPrimaryHover: {
    backgroundColor: '#4ea3d5',
    borderColor: '#4ea3d5',
  },
};

const Welcome = () => {
  return (
    <div className="container-fluid mt-5" style={styles.container}>
      <div className="row align-items-center">
        {/* Random Image on the Left */}
        <div className="col-md-6" style={styles.imageColumn}>
          <img 
            src="../src/assets/img_2_long.jpg" 
            alt="Descriptive text" 
            style={{ width: '100%', height: 'auto', maxHeight: '600px' }} // Adjusts image height
            className="img-fluid"
          />
        </div>

        {/* Text Content on the Right */}
        <div className="col-md-6 text-start">
          <h1 style={styles.heading}>Welcome to Our Website</h1>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button 
            className="btn btn-primary mt-3" 
            style={styles.buttonPrimary}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = styles.buttonPrimaryHover.backgroundColor;
              e.currentTarget.style.borderColor = styles.buttonPrimaryHover.borderColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = styles.buttonPrimary.backgroundColor;
              e.currentTarget.style.borderColor = styles.buttonPrimary.borderColor;
            }}
          >
            <FaPlay className="me-2" /> Watch The Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
