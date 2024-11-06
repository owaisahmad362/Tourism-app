// Team.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from '../assets/person_1.jpg';
import person2 from '../assets/person_2.jpg';
import person3 from '../assets/person_3.jpg';

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem 0',
    marginBottom: '2rem',
  },
  introText: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Forces exactly 3 cards per row
    gap: '2rem',
    justifyContent: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    borderRadius: '8px',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
  role: {
    fontSize: '0.9rem',
    color: '#777',
  },
};

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Vince Richardson', role: 'CEO, Co-Founder', image: person1 },
    { id: 2, name: 'Jean Love', role: 'CTO, Co-Founder', image: person2 },
    { id: 3, name: 'Jeff Stark', role: 'Marketer, Co-Founder', image: person3 },
    { id: 4, name: 'Vince Richardson', role: 'CEO, Co-Founder', image: person1 },
    { id: 5, name: 'Jean Love', role: 'CTO, Co-Founder', image: person2 },
    { id: 6, name: 'Jeff Stark', role: 'Marketer, Co-Founder', image: person3 },
  ];

  return (
    <div style={styles.container}>
      {/* Centered Introduction Content */}
      <h2>Team</h2>
      <p style={styles.introText}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>

      {/* Team Member Cards in 3-Column Grid */}
      <div style={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} style={styles.card}>
            <img src={member.image} alt={member.name} style={styles.image} />
            <div style={styles.name}>{member.name}</div>
            <div style={styles.role}>{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
