import defaultAvatar from "../asset/images/defaultAvatar.jpg";
import "./Avatar.css";

const Avatar = () => {
  return <img className="avatar" src={defaultAvatar} alt="Avatar usuario" />;
};

export default Avatar;
