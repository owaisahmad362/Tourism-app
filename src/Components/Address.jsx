import 'bootstrap/dist/css/bootstrap.min.css';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '3rem',
    paddingBottom: '3rem', // Bottom padding to avoid touching the footer
  },
  formWrapper: {
    flex: 1,
    padding: '2rem',
    marginRight: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around form container
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  formContainer: {
    paddingRight: '7rem',
  },
  addressContainer: {
    flex: 1,
    fontSize: '2rem', // Larger font size for right-side content
    color: '#333',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'block',
    color: '#333',
  },
  rowContainer: {
    display: 'flex',
    gap: '1.5rem', // Space between Name and Phone inputs
  },
  inputField: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  textArea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical',
  },
  submitButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid lightblue', // Light blue border by default
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s',
  },
  submitButtonHover: {
    backgroundColor: 'lightblue', // Light blue background on hover
    color: 'white', // White text on hover
  },
};

const Address = () => {
  return (
    <div className="container" style={styles.container}>
      {/* Form Wrapper with shadow effect */}
      <div style={styles.formWrapper}>
        <form style={styles.formContainer}>
          {/* Row with Name and Phone */}
          <div style={styles.rowContainer}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">Name</label>
              <input type="text" id="name" style={styles.inputField} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phone">Phone</label>
              <input type="text" id="phone" style={styles.inputField} />
            </div>
          </div>

          {/* Email Field */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input type="email" id="email" style={styles.inputField} />
          </div>

          {/* Message Field */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Write Message</label>
            <textarea id="message" style={styles.textArea}></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor;
              e.target.style.color = styles.submitButtonHover.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.submitButton.backgroundColor;
              e.target.style.color = styles.submitButton.color;
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Address on the right */}
      <div style={styles.addressContainer}>
        <p><strong>Address:</strong><br />
          98 West 21th Street, Suite 721 <br />
          New York NY 10016
        </p>
        <p><strong>Phone:</strong><br />
          (+1) 435 3533
        </p>
        <p><strong>Email:</strong><br />
          info@yourdomain.com
        </p>
      </div>
    </div>
  );
};

export default Address;
