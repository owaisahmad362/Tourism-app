import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS styles
const styles = {
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  testimonialContainer: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  imagePlaceholder: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#777',
  },
  quote: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '0.5rem',
  },
  customerName: {
    fontWeight: 'bold',
    color: '#333',
  },
};

const Customers = () => {
  return (
    <div className="container my-5">
      {/* Title */}
      <h2 style={styles.heading}>Happy Customers</h2>

      {/* Testimonials */}
      <div className="row">
        {/* Testimonial 1 */}
        <div className="col-md-4" style={styles.testimonialContainer}>
          <div style={styles.imagePlaceholder}>
            <i className="bi bi-person"></i>
          </div>
          <p style={styles.quote}>
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p style={styles.customerName}>— Clare Gupta</p>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-4" style={styles.testimonialContainer}>
          <div style={styles.imagePlaceholder}>
            <i className="bi bi-person"></i>
          </div>
          <p style={styles.quote}>
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p style={styles.customerName}>— Rogie Slater</p>
        </div>

        {/* Testimonial 3 */}
        <div className="col-md-4" style={styles.testimonialContainer}>
          <div style={styles.imagePlaceholder}>
            <i className="bi bi-person"></i>
          </div>
          <p style={styles.quote}>
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p style={styles.customerName}>— John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
