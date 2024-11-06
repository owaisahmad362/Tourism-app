
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
  },
  cardDate: {
    color: '#999',
    fontSize: '0.9rem',
  },
  cardText: {
    marginTop: '0.5rem',
    color: '#555',
  },
};

const RecentBlog = () => {
  return (
    <div className="container my-5">
      {/* Title and Description */}
      <h2 style={styles.heading}>Recent Blog Post</h2>
      <p style={styles.description}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>

      {/* Blog Cards */}
      <div className="row">
        {/* Blog Card 1 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img1} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <p style={styles.cardDate}>February 26, 2018</p>
              <h5 style={styles.cardTitle}>45 Best Places To Unwind</h5>
              <p style={styles.cardText}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img2} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <p style={styles.cardDate}>February 26, 2018</p>
              <h5 style={styles.cardTitle}>45 Best Places To Unwind</h5>
              <p style={styles.cardText}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img 
              src={img3} 
              alt="Image placeholder" 
              className="card-img-top" 
              style={styles.cardImage} 
            />
            <div className="card-body" style={styles.cardBody}>
              <p style={styles.cardDate}>February 26, 2018</p>
              <h5 style={styles.cardTitle}>45 Best Places To Unwind</h5>
              <p style={styles.cardText}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
