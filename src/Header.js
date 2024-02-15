import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return(
      <div className="header">
        <img className="app-logo" src={LOGO_URL} alt="App logo"></img>
       
        <ul className="nav-bar">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        
      </div>
    )
    }

    export default Header;