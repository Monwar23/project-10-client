import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {

    const {user,  logOut } = UseAuth()

    const handleSignOut = () => {
        logOut()

    }

    const navLinks = <>
             <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/allArtCraftItems">All Art & craft Items</NavLink></li>
      {
        user &&   <li><NavLink className={({ isActive }) =>
        isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
    } to="/addCraftItem">Add Craft Item</NavLink></li>
      }
        {
            user && <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/myArtCraftList">My Art&Craft List</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl"><span className="font-bold text-blue-600 -mr-2">Art</span>Hive</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            
            <div className="navbar-end">
                
            {user ? (
                    <div className="flex items-center">
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            title={user.displayName}
                            className="rounded-full h-10 w-10 cursor-pointer"
                        />
                        <button
                            className="btn bg-blue-600 text-white text-lg ml-2"
                            onClick={handleSignOut}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn bg-blue-600 text-white text-lg">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn bg-blue-600 text-white text-lg ml-2">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;