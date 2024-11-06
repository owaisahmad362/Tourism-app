import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img_1.jpg'; // Update this path based on your project structure

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
    fontSize: '2.5rem', // Large font size for "Family Room"
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    color: '#555',
    marginBottom: '1rem',
  },
  button: {
    border: '2px solid #add8e6', // Light blue border
    backgroundColor: '#ffffff', // White background
    color: '#000000', // Black text
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#add8e6', // Light blue background on hover
    color: '#ffffff', // White text on hover
  },
};

const Family = () => {
  return (
    <div className="container">
      <div className="row" style={styles.container}>
        {/* Image on the left */}
        <div className="col-md-6">
          <img src={img1} alt="Family Room" style={styles.image} />
        </div>

        {/* Text content on the right */}
        <div className="col-md-6" style={styles.content}>
          <h2 style={styles.title}>Family Room</h2>
          <p style={styles.description}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p style={styles.description}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          {/* Learn More Button */}
          <button 
            style={styles.button} 
            onMouseEnter={(e) => { e.target.style.backgroundColor = styles.buttonHover.backgroundColor; e.target.style.color = styles.buttonHover.color; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = styles.button.backgroundColor; e.target.style.color = styles.button.color; }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Family;
