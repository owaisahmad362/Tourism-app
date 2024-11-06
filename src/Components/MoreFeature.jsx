import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from the assets directory
import img1 from '../assets/img-5.jpg';
import img2 from '../assets/img-4.jpg';
import img3 from '../assets/img-6.jpg';

// CSS styles
const styles = {
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  description: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
  },
  cardBody: {
    padding: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const MoreFeature = () => {
  return (
    <div className="container my-5">
      {/* Title and Description */}
      <h2 style={styles.heading}>More Hotel Features</h2>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>

      {/* Feature Cards */}
      <div className="row">
        {/* Feature Card 1 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img1} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <h5 style={styles.cardTitle}>Five Reasons to Stay at Villa Resort</h5>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img2} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <h5 style={styles.cardTitle}>Five Reasons to Stay at Villa Resort</h5>
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img3} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <h5 style={styles.cardTitle}>Five Reasons to Stay at Villa Resort</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeature;
