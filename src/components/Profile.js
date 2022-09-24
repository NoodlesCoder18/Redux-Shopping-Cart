import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="loginstyle">
      <div>
      <h4>Welcome User : {auth.user}</h4>
    
      <button onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
}

export default Profile;
