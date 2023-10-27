
import { FaUser,FaKeyboard } from "react-icons/fa6";
const Navbar = () => {
    return (<div className="navbar">
        
        <div className="navbar-left"> 
        <h1>TypeCat</h1>
        <p><FaKeyboard/></p>
        
        </div>
        <div >
           <p><FaUser/></p>
        </div>

    </div>)
}
export default Navbar;