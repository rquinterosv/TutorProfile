import React from "react";

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-lg font-bold">Logo</a>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Home</a></li>
                <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">About</a></li>
                <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Services</a></li>
                <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;