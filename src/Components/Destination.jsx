
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';

// Import images
import img1 from '../assets/img-5.jpg';
import img2 from '../assets/img-4.jpg';
import img3 from '../assets/img-6.jpg';
import img4 from '../assets/img-7.jpg';

// CSS styles
const styles = {
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  description: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555',
  },
  card: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '1.5rem',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1rem',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  reviews: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777',
  },
  starIcon: {
    color: '#FFD700', // Gold color for stars
    marginLeft: '0.2rem',
  },
};

const Destination = () => {
  return (
    <div className="container my-5">
      {/* Title */}
      <h2 style={styles.heading}>Top Destination</h2>

      {/* Description */}
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>

      {/* Destination Cards */}
      <div className="row">
        {/* Card 1: Food & Wines */}
        <div className="col-md-3" style={styles.card}>
          <img src={img1} alt="Food & Wines" style={styles.cardImage} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Food & Wines</h3>
            <div style={styles.reviews}>
              3,239 reviews <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} />
            </div>
          </div>
        </div>

        {/* Card 2: Resort & Spa */}
        <div className="col-md-3" style={styles.card}>
          <img src={img2} alt="Resort & Spa" style={styles.cardImage} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Resort & Spa</h3>
            <div style={styles.reviews}>
              4,921 reviews <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} />
            </div>
          </div>
        </div>

        {/* Card 3: Hotel Rooms */}
        <div className="col-md-3" style={styles.card}>
          <img src={img3} alt="Hotel Rooms" style={styles.cardImage} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Hotel Rooms</h3>
            <div style={styles.reviews}>
              2,112 reviews <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} />
            </div>
          </div>
        </div>

        {/* Card 4: Mountain Climbing */}
        <div className="col-md-3" style={styles.card}>
          <img src={img4} alt="Mountain Climbing" style={styles.cardImage} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Mountain Climbing</h3>
            <div style={styles.reviews}>
              6,421 reviews <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} /> <FaStar style={styles.starIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
