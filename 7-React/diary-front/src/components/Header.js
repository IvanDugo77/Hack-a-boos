import { Link } from "react-router-dom";
import { useUser, useSetUser } from "../contexts/UserContext";
import "./Header.css";
import { AiOutlineLogout } from "react-icons/ai";
import Avatar from "./Avatar";

const Header = () => {
  const user = useUser();
  const setUser = useSetUser();
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/");
  // };

  return (
    <header className="principal">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h1>My App</h1>
            </Link>
          </li>
          {user ? (
            <li>
              <Link className="user" to="/user">
                <Avatar />
                {user.email}
              </Link>
              <AiOutlineLogout onClick={() => setUser()} />
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
