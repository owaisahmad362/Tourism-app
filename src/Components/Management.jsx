
import 'bootstrap/dist/css/bootstrap.min.css';

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
  carouselImage: {
    width: '100%',
    height: '500px', // Fixed height for uniformity
    objectFit: 'cover', // Ensures the image covers the area without stretching
  },
  controlPrev: {
    position: 'absolute',
    top: '50%',
    left: '-30px', // Moves control icon outside image area
    transform: 'translateY(-50%)',
    zIndex: 5,
  },
  controlNext: {
    position: 'absolute',
    top: '50%',
    right: '-30px', // Moves control icon outside image area
    transform: 'translateY(-50%)',
    zIndex: 5,
  },
};

const Management = () => {
  return (
    <div className="container my-5">
      {/* Title and Description */}
      <h2 style={styles.heading}>International Tour Management</h2>
      <p style={styles.description}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>

      {/* Image Slider */}
      <div id="managementCarousel" className="carousel slide" data-bs-ride="carousel">
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#managementCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="../src/assets/img_1.jpg" 
              alt="Image 1" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="../src/assets/img_2_long.jpg" 
              alt="Image 2" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="../src/assets/img-3.jpg" 
              alt="Image 3" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="../src/assets/img-8.jpg" 
              alt="Image 4" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="../src/assets/img-4.jpg" 
              alt="Image 5" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="../src/assets/img-5.jpg" 
              alt="Image 6" 
              className="img-fluid" 
              style={styles.carouselImage} 
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#managementCarousel" data-bs-slide="prev" style={styles.controlPrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#managementCarousel" data-bs-slide="next" style={styles.controlNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Management;
