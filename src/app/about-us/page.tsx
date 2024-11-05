import Image from "next/image";
import WelcomeImg from "../../../public/images/air-conditioner-technician-repair-service-600nw-2304576719.webp";

import banner from "../../../public/images/about-us-banner.png";

const AboutUs = () => {
  return (
    <div>
      <Image src={banner} alt="image" className="w-full " />
      <h2 className="text-center text-2xl font-semibold my-3">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" w-full flex-col flex items-center  justify-center object-cover px-10 py-6 shadow-lg ">
            <div className="flex flex-col">
            <h3 className="font-semibold text-2xl mb-4">Home Technician Company Profile</h3>
            <p className="text-justify">
              <strong>Home Tecnician</strong> is one of the leading names in the sales and
              Services of electrical, AC, HVAC system, Water Cooler, RO system
              and electronic products and systems used in a broad range of
              fields and applications. As a global, leading green company, we’re
              applying our technologies to contribute to society and daily life
              around the world. As a team we are well experienced with more than
              20 years in the above mentioned field. We avail each component of
              AC from reputed and trustworthy vendors of the market to assure
              that we use only the best quality products while at the time of
              rendering repair services. Alfa Enterprises has a significant
              presence in the field of transmission and distribution of
              electrical energy. It offers a complete range of service on
              supply, execution, testing & commissioning of all above products.
              Also the company is engaged in Engineering, Procurement and
              Construction of Industrial Electrical and HVAC Projects in India.
            </p>
            </div>
          </div>
          <div className=" w-full flex items-center  justify-center object-cover px-10 py-6 shadow-lg ">
            <Image src={WelcomeImg} alt="image" className="rounded-md" />
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
