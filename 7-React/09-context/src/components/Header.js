import Modal from "./Modal";
import Login from "./Login";
import Registro from "./Registro";
import { useSetUser, useUser } from "../contexts/UserContext";
import Theme from "./Theme";
import { useCart } from "../contexts/CartContext";
// import { UserContext, useUser } from "../contexts/UserContext";
// import { useContext } from "react";

const Header = () => {
  //const [user, setUser] = useContext(UserContext);
  const user = useUser();
  const setUser = useSetUser();
  const cart = useCart();
  return (
    <header>
      <span>MyApp</span>
      <Theme />
      <span className="cart">{cart.length}🛒</span>
      <span className="userSection">
        {/* Si tengo el usuario visualizo email y icono logout */}
        {/* Si no tengo usuario visualizo los botones para hacer login o registrarme */}
        {user ? (
          <>
            👤 {user.email}
            <span onClick={() => setUser()}>❌</span>
          </>
        ) : (
          <>
            <Modal label="Login">
              <Login />
            </Modal>
            <Modal label="Registro">
              <Registro />
            </Modal>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
