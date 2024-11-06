
import img5 from '../assets/img-5.jpg';
import img4 from '../assets/img-4.jpg';
import img6 from '../assets/img-6.jpg';
import img7 from '../assets/img-7.jpg';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  smallImage: {
    flex: '1 1 25%', // For 4 images per row
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  largeImage: {
    flex: '1 1 50%', // For 2 images covering a row
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

const Images = () => {
  return (
    <div style={styles.container}>
      {/* First Row */}
      <div style={styles.row}>
        <img src={img5} alt="Image 5" style={styles.smallImage} />
        <img src={img4} alt="Image 4" style={styles.smallImage} />
        <img src={img6} alt="Image 6" style={styles.smallImage} />
        <img src={img7} alt="Image 7" style={styles.smallImage} />
      </div>

      {/* Second Row */}
      <div style={styles.row}>
        <img src={img6} alt="Image 6" style={styles.smallImage} />
        <img src={img7} alt="Image 7" style={styles.smallImage} />
        <img src={img5} alt="Image 5" style={styles.smallImage} />
        <img src={img4} alt="Image 4" style={styles.smallImage} />
      </div>

      {/* Third Row - 2 Large Images */}
      <div style={styles.row}>
        <img src={img5} alt="Image 5" style={styles.largeImage} />
        <img src={img4} alt="Image 4" style={styles.largeImage} />
      </div>

      {/* Fourth Row */}
      <div style={styles.row}>
        <img src={img6} alt="Image 6" style={styles.smallImage} />
        <img src={img7} alt="Image 7" style={styles.smallImage} />
        <img src={img5} alt="Image 5" style={styles.smallImage} />
        <img src={img4} alt="Image 4" style={styles.smallImage} />
      </div>
    </div>
  );
};

export default Images;
