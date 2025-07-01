"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdOutlineWorkspaces, MdOutlineTrackChanges } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { LuMessageSquareText } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { usePathname } from "next/navigation";


const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center w-5/6 mx-auto py-6">
        <Link href="/" className="font-bold">
          <p className="text-xl text-purple-900">SnappiGo</p>
        </Link>
        <div className="hidden lg:flex gap-10">
          <Link href="/service" className={
            pathname === "/service"
              ? "border-b-2 border-purple-800 px-4 py-1"
              : "text-black"
          }>
            Services
          </Link>
          <Link href="/about" className={
            pathname === "/about"
              ? "border-b-2 border-purple-800 px-4 py-1"
              : "text-black"
          }>About Us</Link>
          <Link href="/contact" className={
            pathname === "/contact"
              ? "border-b-2 border-purple-800 px-4 py-1"
              : "text-black"
          }>Contact Us</Link>
        </div>

        <div className="hidden lg:flex gap-8">
          
          <Link href="/contact" className="rounded-lg py-2 px-4 bg-purple-900 shadow-md text-white">Track Parcel</Link>
        </div>

        <div className="flex lg:hidden" onClick={handleMenu}>
          <IoMenu className="text-2xl text-purple-900 font-light cursor-pointer" />
        </div>
        {open && (
        <div className="absolute bg-purple-950 text-white top-0 left-0 w-full z-50 h-screen">
          <div className="w-10/12 py-8 mx-auto">
            <div
              onClick={handleMenu}
              className="flex cursor-pointer justify-end text-2xl"
            >
              <MdClose />
            </div>

            <div className="text-2xl flex flex-col gap-6 mt-12">
            <Link href='/'><p className="flex gap-3 items-center" onClick={() => setOpen(false)}><TiHomeOutline/> Home</p></Link>
            <Link href='service'><p className="flex gap-3 items-center" onClick={() => setOpen(false)}><GrProjects/> Services</p></Link>
              <Link href="about" ><p className="flex gap-3 items-center" onClick={() => setOpen(false)}><MdOutlineWorkspaces/> About Us</p></Link>
              <Link href='contact'><p className="flex gap-3 items-center" onClick={() => setOpen(false)}><LuMessageSquareText/> Contact Us</p></Link>
              <Link href='contact'><p className="flex gap-3 items-center" onClick={() => setOpen(false)}><MdOutlineTrackChanges /> Track Parcel</p></Link>
              
            </div>

            <div className="flex justify-center text-2xl gap-7 mt-24">
              <Link
                target="_blank"
                href=""
              >
                <BsInstagram className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href=""
              >
                <BsTwitter className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href=""
              >
                <BsFacebook className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href=""
              >
                <BsLinkedin className="cursor-pointer" />
              </Link>
              <Link target="_blank" href="">
                <BsWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Header;