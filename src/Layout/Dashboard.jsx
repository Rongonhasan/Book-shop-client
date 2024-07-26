import { useState } from "react";
import { FaAd, FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaTimes, FaUsers, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    // todo
    const [isAdmin] = useAdmin();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const [cart] =useCart()

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`fixed lg:relative w-64 min-h-screen bg-red-400 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to='/dashboard/adminHome' onClick={toggleSidebar}>
                            <FaHome className="mr-2" /> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems' onClick={toggleSidebar}>
                            <FaCalendar className="mr-2" /> Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems' onClick={toggleSidebar}>
                            <FaList className="mr-2" /> Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings' onClick={toggleSidebar}>
                            <FaBook className="mr-2" /> Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users' onClick={toggleSidebar}>
                            <FaUsers className="mr-2" /> All users
                        </NavLink>
                    </li>
                        </>


                        :


                        <>
                        <li>
                        <NavLink to='/dashboard/userHome' onClick={toggleSidebar}>
                            <FaHome className="mr-2" /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/history' onClick={toggleSidebar}>
                            <FaCalendar className="mr-2" /> PaymentHistory
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart' onClick={toggleSidebar}>
                            <FaShoppingCart className="mr-2" /> My Cart  ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review' onClick={toggleSidebar}>
                            <FaAd className="mr-2" /> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/PaymentHistory' onClick={toggleSidebar}>
                            <FaList className="mr-2" /> Payment Real History
                        </NavLink>
                    </li>
                        </>
                    }
                    {/* shared navlinks */}
                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink to='/' onClick={toggleSidebar}>
                            <FaHome className="mr-2" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/books' onClick={toggleSidebar}>
                            <FaSearch className="mr-2" /> Buy Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={toggleSidebar}>
                            <FaEnvelope className="mr-2" /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col p-8">
                {/* Mobile navbar toggle button */}
                <div className="lg:hidden p-4 bg-red-400">
                    <button onClick={toggleSidebar} className="text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
