"use client";
import Image from "next/image";
import LOGO from "../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState,useRef } from "react";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
  // { name: "Blog", href: "/blog" },
];
const servicesDropdown = [
  { name: "AC Repair Service", href: "/ac-repair-service" },
  { name: "AC Installation Service", href: "/ac-installation-service" },
  { name: "AC Gas Filling Service", href: "/ac-gas-filling-service" },
  { name: "AC Service", href: "/ac-servicing-service" },
  { name: "Washing Machine Repair", href: "/washing-machine-service" },
  { name: "Gyser Repair Service", href: "/gyser-repair-service" },
  { name: "Chimney Repair Service", href: "/chimney-repair-service" },
  { name: "RO Repair Service", href: "/ro-repair-service" },
];

export default function Header() {
  const pathName = usePathname();
  const [isClick, setIsClick] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };
  const toggleServicesDropdown = (): void => {
    setIsServicesOpen(!isServicesOpen);
  };

  
    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (event:MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsServicesOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <>
      <header
        className=" sm:backdrop-blur-[2px]  relative z-10 px-8 py-2 flex justify-between items-center bg-header 
    "
      >
        <Link href="/home">
          <Image src={LOGO} alt="log" className="max-h-16 max-w-16" />
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? "text-navlink font-semibold "
                    : "text-slate-300 hover:text-green-300 "
                }
              >
                {link.name}
              </Link>
            );
          })}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              // className="flex items-center gap-1 text-slate-300 hover:text-green-300"
              className={`flex items-center gap-1  hover:text-green-300 ${isServicesOpen ? "text-navlink" :"text-slate-300"}`}
            >
              Services
              {isServicesOpen ? (
                <IoChevronUp size={22} />
              ) : (
                <IoChevronDown size={22} />
              )}
            </button>
            {isServicesOpen && (
              <div
                className="absolute h-60 overflow-y-scroll 
              
                right-0 mt-2 w-52 bg-white
                 shadow-lg rounded-lg z-[100]"
              >
                <ul>
                  {servicesDropdown.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>
            {isClick ? (
              <AiOutlineClose color="fff" size={28} />
            ) : (
              <IoMenu color="fff" size={28} />
            )}
          </button>
        </div>
      </header>
      {/* for mobile menu starts here */}
      {isClick && (
        <div className="md:hidden absolute z-50 bg-header  ">
          <div
            className="h-[500px] w-[300px]  bg-primary  px-3 pt-4 pb-3 sm:px-3 "
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            {navLinks.map((link,index) => {
              const isActive = pathName.startsWith(link.href);
              return (
                <div className="  block " key={index}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "text-navlink font-semibold "
                        : "text-slate-300 hover:text-green-300 "
                    }
                  >
                    {link.name}
                  </Link>
                  
                </div>
              );
            })}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleServicesDropdown}
                className={`flex items-center gap-1  hover:text-green-300 ${isServicesOpen ? "text-navlink" :"text-slate-300"}`}
                >
                Services
                {isServicesOpen ? (
                  <IoChevronUp size={22} />
                ) : (
                  <IoChevronDown size={22} />
                )}
              </button>
              {isServicesOpen && (
                <div className="absolute overflow-y-scroll h-56 right-0 mt-2 w-58 bg-white shadow-lg rounded-lg z-[100]">
                  <ul>
                    {servicesDropdown.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
