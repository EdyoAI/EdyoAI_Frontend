"use client";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuElements = () => {
    return (
      <>
        <li className="transition-colors hover:text-gray-300">
          <Link href="#skills" onClick={() => setIsOpen(false)}>
            Performance Dashboard
          </Link>
        </li>
        <li className="transition-colors hover:text-gray-300">
          <Link href="#experience" onClick={() => setIsOpen(false)}>
            Current Affairs
          </Link>
        </li>
        <li className="transition-colors hover:text-gray-300">
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Help & support
          </Link>
        </li>
        <li className="transition-colors hover:text-gray-300">
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Night Mode
          </Link>
        </li>
      </>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-6 py-4 text-white shadow-md backdrop-blur-md">
        {/* Left Section */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="https://placehold.co/100x100.png"
            height={40}
            width={40}
            alt="Profile"
            className="mr-1 h-10 w-10 rounded-full object-cover"
          />
          <span className="text-base font-semibold text-white">
            Edyo
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <ul className="hidden items-center space-x-4 md:flex">
          <MenuElements />
        </ul>
      </nav>
      <div
        className={`fixed top-16 right-0 z-30 h-full w-64 transform bg-black text-white transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="m-10 space-y-4 text-lg font-semibold">
          <MenuElements />
        </ul>
      </div>
    </>
  );
};

export default Navbar;