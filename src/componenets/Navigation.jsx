import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="shopping">Shopping page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

