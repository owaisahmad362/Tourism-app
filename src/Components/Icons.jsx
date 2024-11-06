import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUtensils, FaGlobeAmericas, FaPlane, FaUmbrellaBeach, FaMountain, FaHotjar } from 'react-icons/fa';

// CSS styles
const styles = {
  iconCard: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  iconImage: {
    fontSize: '3rem', // Adjust icon size as needed
    color: '#555', // Icon color
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  cardText: {
    color: '#555',
  },
};

const Icons = () => {
  return (
    <div className="container my-5">
      {/* Icons and Text */}
      <div className="row">
        {/* Good Foods */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaUtensils style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Good Foods</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Travel Anywhere */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaGlobeAmericas style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Travel Anywhere</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Airplane */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaPlane style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Airplane</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Beach Resort */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaUmbrellaBeach style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Beach Resort</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Mountain Climbing */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaMountain style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Mountain Climbing</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Hot Air Balloon */}
        <div className="col-md-4" style={styles.iconCard}>
          <FaHotjar style={styles.iconImage} />
          <h3 style={styles.cardTitle}>Hot Air Balloon</h3>
          <p style={styles.cardText}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Icons;