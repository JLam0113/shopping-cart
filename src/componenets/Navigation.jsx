import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation({total}) {

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Shop</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout
              {total > 0 ? ' (' + total + ')' : ''}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

