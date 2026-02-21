import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useAuth } from '../../context/authContext';

function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);

    }, []);

    return (
        <div className="bg-[#1b1919ad] text-white">
            <nav className="mx-auto h-20  flex items-center justify-between px-6">
            <div className='flex items-center'>
                {/* <img width={80} src="logo.png" alt="" /> */}
                <Link to="/" >
                    <h1 className="cursor-pointer text-4xl font-extrabold font-mono text-green-700">
                    ThinkSpace
                    </h1>
                </Link>
            </div>

            {user && <div className="flex items-center gap-4 relative" ref={menuRef}>

                <button className="cursor-pointer flex items-center bg-green-500 border hover:border-amber-100 font-semibold text-black px-5 py-3 rounded-3xl">
                    <span className=' text-2xl mr-1.5 -mt-1'>+</span> New Note
                </button>

                {/* Profile Button */}
                <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center font-bold hover:ring-2 hover:ring-green-500"
                >
                H
                </button>
                

                {/* Dropdown */}
                {open && (
                <div className=" absolute right-0 top-17 w-44 bg-[#242425] rounded-lg shadow-lg border border-white/10">
                    <button onClick={(e) => {navigate("/profile")}} className="cursor-pointer w-full text-left px-4 py-3 hover:bg-white/10">
                    Profile
                    </button>
                    <button className="cursor-pointer w-full text-left px-4 py-3 text-red-500 hover:bg-white/10">
                    Logout
                    </button>
                </div>
                )}
            </div>}
            </nav>
        </div>
    )
}

export default Header