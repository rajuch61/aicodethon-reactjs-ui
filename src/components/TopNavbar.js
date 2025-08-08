import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

function TopNavbar() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/user/playlist");
  };

  return (
    <div className="top-navbar">
      <div className="nav-left">
        <Link to="/" className="home-link">AIPlay</Link>
      </div>
      <div className="nav-right">
        <FaUserCircle className="user-icon" onClick={handleUserClick} />
      </div>
    </div>
  );
}

export default TopNavbar;
