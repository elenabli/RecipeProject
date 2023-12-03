import NavBar from "./NavBar";
import logo from "../images/logo.png";

const Header  = () => {

    return <div>
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="mealMix logo" />
            </div>
            <NavBar />
        </div>
    </div>;
  }
  
  export default Header;