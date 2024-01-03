"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title : 'Home',
      link: "",
    },
    {
      id: 2,
      title : 'About',
      link: "about",
    },
    {
      id: 3,
      title : 'Sign Up',
      link: "sign-up",
    },
    {
      id: 4,
      title : 'Login',
      link: "login",
    },
    {
      id: 5,
      title : 'Contact',
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-red-200 bg-neutral-900 fixed nav">
      <div className="flex">
        <Image
          src='/assets/images/itslogo.png'
          alt='logo'
          width={90}
          height={90}
          className='object-contain'
        >
        </Image>
        <h1 className="text-4xl ml-4 mt-5">
            Injury Tracking System
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, title, link }) => (
          <li
            key={id}
            className="nav-links px-10 cursor-pointer text-lg text-cyan-100 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;