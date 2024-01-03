import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=" p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold">Contact Management</Link>

                <div className="flex space-x-4">
                    <Link to="/AllContacts" className="text-white hover:text-gray-300">All Contacts</Link>
                    <Link to="/AddContacts" className="text-white hover:text-gray-300">Add Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
