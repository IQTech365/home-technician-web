import Image from "next/image";
import WelcomeImg from "../../../public/images/air-conditioner-technician-repair-service-600nw-2304576719.webp";
// import whyChooseUsCardContent from '../../lib/utils'

import banner from "../../../public/images/about-us-banner.png";
import { whyChooseUsCardContent } from "@/lib/utils";

const AboutUs = () => {
  return (
    <div>
      <Image src={banner} alt="image" className="w-full " />
      <h2 className="text-center text-2xl font-semibold my-3">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div
          className=" w-full flex-col flex items-center 
        justify-center object-cover px-10 py-6 shadow-lg "
        >
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl mb-4">
              Home Technician Company Profile
            </h3>
            <p className="text-justify">
              <strong>Home Technician </strong> is a trusted name in the field
              of air conditioning (AC) repair, installation, and maintenance,
              dedicated to providing exceptional service to both residential and
              commercial clients. With over 20 years of industry experience, we
              specialize in keeping your cooling and HVAC systems running at
              peak efficiency. Our expertise extends to a range of services,
              including water coolers, RO systems, and other essential
              electrical equipment, ensuring that all your service needs are met
              under one roof. We take pride in using only the highest-quality
              components sourced from reputable vendors to guarantee reliable
              and lasting repairs. Our team of experienced technicians is
              equipped with the latest tools and techniques to diagnose issues
              accurately and provide effective solutions, whether it’s a quick
              repair, a detailed installation, or routine maintenance to enhance
              the longevity and efficiency of your equipment. At Home
              Technician, our mission goes beyond just fixing problems; we aim
              to optimize your systems to improve comfort and reduce energy
              costs. As an environmentally conscious company, we incorporate
              sustainable practices and advanced technology to ensure efficient,
              eco-friendly solutions for our clients. No matter the scope of the
              project, our commitment to excellence and customer satisfaction
              remains unwavering. When it comes to AC, HVAC, and other
              electronic systems, Home Technician is your reliable partner for
              all repair, servicing, and installation needs—delivering comfort,
              efficiency, and peace of mind.
            </p>
          </div>
        </div>
        <div className=" w-full flex items-center  justify-center object-cover px-10 py-6 shadow-lg ">
          <Image src={WelcomeImg} alt="image" className="rounded-md" />
        </div>
      </div>
      <h2 className="text-2xl text-center mt-4 font-semibold">Why Choose US</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10 ">
        {whyChooseUsCardContent.map((item, index) => (
          <div
            className="flex flex-col items-center 
            justify-center min-w-[350px] 
            shadow-md py-3 px-2 rounded-md"
            key={index}
          >
            <Image src={item.src} alt="image" />
            <h2 className="text-lg text-gray-800 my-2 font-semibold">
              {item.title}
            </h2>
            <p className="text-center my-2">{item.dicription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
