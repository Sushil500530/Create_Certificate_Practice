import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../../../firebase/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [items, setItems] = useState([]);
    useEffect(() => {
        const lengthItems = JSON.parse(localStorage.getItem("services"));
        if (lengthItems) {
            setItems(lengthItems)
        }
    }, [])

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Service</NavLink></li>
       
         {
             user ? <>
             <li className="relative"><NavLink to="/order">Ordered
             <div className="badge badge-secondary absolute -top-3 -right-2 text-xl font-medium translate-x-[2px]">+{items.length}</div>
         </NavLink></li>
             </>
                 : ''
         }
        <li><NavLink to="/about">About</NavLink></li>
    </>
     const handleLogout = () => {
         logout()
             .then()
             .catch(error => {
                 console.error(error);
             })
     }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-[18px] font-semibold w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="w-52 h-20">
                        <Link to="/"> <img className="w-full h-full" src="https://i.ibb.co/VxVf6XY/increate-knowledge.webp" alt="logo" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[18px] font-semibold px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user && <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user ? <img src={user?.photoURL} alt="image" /> : <img src="https://i.ibb.co/Jt0tPSh/user.png" alt="image" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {
                                            user && <p>{user?.displayName}</p>
                                        }
                                        <span className="badge">Profile</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }

                    {
                        user ? <Link onClick={handleLogout} to="/login">
                            <button className="btn bg-red-500 text-white px-8 py-2 hover:text-black"><Link to="/login">LogOut</Link>
                            </button></Link> :
                            <Link to="/login"><button className="btn bg-black text-white px-8 py-2 hover:text-black"><Link to="/login">Login</Link></button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;