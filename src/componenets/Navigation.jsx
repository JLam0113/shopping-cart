import { Link } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shopping">Shopping page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

