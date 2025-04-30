import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Fixed import

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#631bff',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Apna Services</Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
      </div>
      <nav>
  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>
  Services
</Link>
  </div>
</nav>
    </nav>
  );
};

export default Navbar;