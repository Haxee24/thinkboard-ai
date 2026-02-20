import {useState, useRef, useEffect} from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

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
        <div className="bg-[#1a1a1b] text-white">
            <nav className="mx-auto h-20  flex items-center justify-between px-6">
            <div className='flex items-center'>
                {/* <img width={80} src="logo.png" alt="" /> */}
                <h1 className="text-4xl font-extrabold font-mono text-green-700">
                ThinkBoard
                </h1>
            </div>

            <div className="flex items-center gap-4 relative" ref={menuRef}>

                <button className="cursor-pointer flex items-center bg-green-500 border hover:border-amber-100 font-semibold text-black px-5 py-3 rounded-3xl">
                    <span className=' text-2xl mr-1.5 -mt-1'>+</span> New Note
                </button>

                {/* Profile Button */}
                <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold hover:ring-2 hover:ring-green-500"
                >
                U
                </button>
                

                {/* Dropdown */}
                {open && (
                <div className=" absolute right-0 top-17 w-44 bg-[#242425] rounded-lg shadow-lg border border-white/10">
                    <button className="cursor-pointer w-full text-left px-4 py-3 hover:bg-white/10">
                    Profile
                    </button>
                    <button className="cursor-pointer w-full text-left px-4 py-3 text-red-500 hover:bg-white/10">
                    Logout
                    </button>
                </div>
                )}
            </div>
            </nav>
        </div>
    )
}

export default Header