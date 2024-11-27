"use client";

import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadata:Metadata={
  title: "Footer",
}

const quickLinks = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];

const services = [
  {
    title: "AC Repair Service",
    href: "/ac-repair-service",
  },
  {
    title: "AC Installation Service",
    href: "/ac-installation-service",
  },
  {
    title: "AC Gas Filling Service",
    href: "/ac-gas-filling-service",
  },
  {
    title: "AC Service",
    href: "/ac-servicing-service",
  },
  {
    title: "Washing Machine Repair Service",
    href: "/washing-machine-service",
  },
  {
    title: "Gyser Repair Service",
    href: "/gyser-repair-service",
  },
  {
    title: "Chimney Repair Service",
    href: "/chimney-repair-service",
  },
  {
    title: "RO Repair Service",
    href: "/ro-repair-service",
  },
];

const Footer = () => {
  const pathName = usePathname();

  return (
    <div className="p-4 bg-header">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <h5 className="text-navlink text-3xl mb-4">About Us</h5>
          <p className="text-justify text-slate-300">
            <strong>Home Technician</strong>was established in{" "}
            <strong>2010</strong> as a Gurgaon-based Company. We are one of the
            trusted names in the industry for providing efficient AC repair
            services to our esteemed clients. We provide Repairing Services for
            both residential & commercial as well as for domestic purposes. Our
            experienced personnel use their vast industry knowledge while
            providing AC Repair Services.
          </p>
        </div>
        <div className=" flex flex-col">
          <h5 className="text-navlink text-3xl mb-4">Quick Links</h5>

          {quickLinks.map((item, index) => {
            const isActive = pathName.startsWith(item.href);

            return (
              <Link
                key={index}
                href={item.href}
                className={
                  isActive
                    ? "text-navlink font-semibold "
                    : "text-slate-300 hover:text-green-300 "
                }
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className=" flex flex-col">
          <h5 className="text-navlink text-3xl mb-4">Service We Provide</h5>
          {services.map((services,index) => (
            <Link key={index}
              href={services.href}
              className="block px-4 py-2 text-gray-300 hover:text-gray-100"
            >
              {services.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-col">
          <h5 className="text-navlink text-3xl mb-4">Get in Touch</h5>
          <p className="text-gray-300">
            <strong> Address:-</strong> Shop No. 14-D, Old, Huda Complex, Huda
            market, near sadar bazar, Prem Nagar, Roshan Pura, Gurugram, Haryana
            122001
          </p>
          <p className="text-gray-300">
            <strong>Contact No.-</strong> <a href="tel:73033 87506">+91-73033 87506</a>
          </p>
          <p className="text-gray-300">
            <strong>Mail id:-</strong> <a href="mailto:hometechnician@gmail.com">info@hometechnician.in</a>
          </p>
          <p className="text-gray-300">
            <strong>Website:-</strong> hometechnician.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
