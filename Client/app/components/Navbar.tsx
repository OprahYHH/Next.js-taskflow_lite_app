'use client'

import React from "react";
import Link from "next/link";
import { LuComponent } from "react-icons/lu";

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Task', href: '/' },
        { label: 'DayOff', href: '/' },
        { label: 'Overtime', href: '/' },
    ]

    return (
        <nav className="navbar bg-gray-950 text-neutral-content border-b border-gray-800">
            <div className="navbar-start container px-6">
                <Link href={"/"} className="btn text-[#CFFD5D] btn-ghost text-lg mr-4 hover:text-white font-semibold"><LuComponent />TaskFlow Lite</Link>
                {links.map(link => <Link key={link.href} href={link.href} className="text-sm px-4 font-light hover:font-medium hover:text-[#CFFD5D]">{link.label}</Link>)}
            </div>
            <div className="navbar-end container px-6">
                <Link href={"/login"} className="text-sm px-4 font-light hover:font-medium hover:text-[#CFFD5D]">
                    <button type="button" className="btn btn-sm bg-[#CFFD5D] hover:bg-white text-black border-none rounded-2xl px-8">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
