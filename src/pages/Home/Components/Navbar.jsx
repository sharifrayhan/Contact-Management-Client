import { Link } from "react-router-dom";
import { styles } from "../../../styles";

const Navbar = () => {
  return (
    <nav className="glass p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-[#1FC3AC] text-xl font-extrabold">
          Contact Management
        </Link>

        <div className="flex space-x-4">
          <Link to="/AllContacts" className=" hover:text-gray-300">
            <button style={styles.buttonStyle}>All Contacts</button>
          </Link>
          <Link to="/AddContacts" className=" hover:text-gray-300">
            <button style={styles.buttonStyle}>Add Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
