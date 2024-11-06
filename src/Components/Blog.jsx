import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg';
import img6 from '../assets/img-6.jpg';
import popularImg1 from '../assets/img-5.jpg'; 
import popularImg2 from '../assets/img-4.jpg';
import popularImg3 from '../assets/img-5.jpg';
import popularImg4 from '../assets/img-6.jpg';
import popularImg5 from '../assets/img-4.jpg';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  sidebar: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  content: {
    padding: '1rem',
    fontSize: '1rem',
    color: '#333',
  },
  date: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '0.5rem',
  },
  templateText: {
    fontWeight: 'bold',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  searchIcon: {
    marginRight: '0.5rem',
    color: '#888',
  },
  searchInput: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  popularPost: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  categoryList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  popularPostCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  popularPostImage: {
    width: '30%',
    height: 'auto',
  },
  popularPostContent: {
    padding: '0.5rem',
    width: '70%',
  },
  popularPostsContainer: {
    marginBottom: '1rem',
  },
  categoriesContainer: {
    marginTop: '1rem',
  },
  numberContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    gap: '1rem',
    padding: '1rem 0', // Add padding to top and bottom
  },
  numberCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#ADD8E6', // Light blue color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
};

const Blog = () => {
  const posts = [
    { id: 1, image: img5 },
    { id: 2, image: img4 },
    { id: 3, image: img5 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
  ];

  const popularPosts = [
    { id: 1, date: 'February 27, 2018', text: 'Free Template by Colorlib', image: popularImg1 },
    { id: 2, date: 'February 27, 2018', text: 'Free Template by Colorlib', image: popularImg2 },
    { id: 3, date: 'February 27, 2018', text: 'Free Template by Colorlib', image: popularImg3 },
    { id: 4, date: 'February 27, 2018', text: 'Free Template by Colorlib', image: popularImg4 },
    { id: 5, date: 'February 27, 2018', text: 'Free Template by Colorlib', image: popularImg5 },
  ];

  const categories = [
    { name: 'Events', count: 12 },
    { name: 'Resto bar', count: 4 },
    { name: 'Celebration', count: 23 },
    { name: 'Promos', count: 8 },
  ];

  return (
    <div className="container" style={styles.container}>
      {/* Main Blog Content (Left Side) */}
      <div style={styles.mainContent}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {posts.map((post) => (
            <div key={post.id} style={{ width: 'calc(50% - 0.75rem)' }}>
              <div style={styles.card}>
                <img src={post.image} alt="Blog Post" style={styles.image} />
                <div style={styles.content}>
                  <div style={styles.date}>February 26, 2018</div>
                  <div style={styles.templateText}>Free Template by Colorlib</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Number Circles Below Cards */}
        <div style={styles.numberContainer}>
          <div style={styles.numberCircle}>1</div>
          <div style={styles.numberCircle}>2</div>
          <div style={styles.numberCircle}>3</div>
        </div>
      </div>

      {/* Sidebar (Right Side) */}
      <div style={styles.sidebar}>
        {/* Search Bar Card */}
        <div style={styles.card}>
          <div style={styles.searchContainer}>
            <FaSearch style={styles.searchIcon} />
            <input type="text" placeholder="Search..." style={styles.searchInput} />
          </div>
        </div>

        {/* Popular Posts Card */}
        <div style={styles.card}>
          <h5>Popular Posts</h5>
          <div style={styles.popularPost}>
            {popularPosts.map((post) => (
              <div key={post.id} style={styles.popularPostCard}>
                <img src={post.image} alt="Popular Post" style={styles.popularPostImage} />
                <div style={styles.popularPostContent}>
                  <div style={styles.date}>{post.date}</div>
                  <div style={styles.templateText}>{post.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Card */}
        <div style={styles.card}>
          <h5>Categories</h5>
          <ul style={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0' }}>
                <span>{category.name}</span>
                <span>({category.count})</span>
              </li>
            ))}
          </ul>
          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
