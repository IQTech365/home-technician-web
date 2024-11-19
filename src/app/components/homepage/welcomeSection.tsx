import Image from "next/image";
import WelcomeImg from "../../../../public/images/air-conditioner-technician-repair-service-600nw-2304576719.webp";

const Welcomesection = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="w-full text-gray-800 px-10 py-6  shadow-sm ">
        <h3 className="font-semibold mb-4 text-xl text-primary">
          Welcome to Home Technician
        </h3>
        <p className="text-justify">
          {/* <strong>Home Technician </strong>is one of the leading names in the
          sales and Services of electrical, AC, HVAC system, Water Cooler, RO
          system and electronic products and systems used in a broad range of
          fields and applications. As a global, leading green company, we’re
          applying our technologies to contribute to society and daily life
          around the world. As a team we are well
          <strong> experienced with more than 20 years</strong> in the above
          mentioned field. We avail each component of AC from reputed and
          trustworthy vendors of the market to assure that we use only the best
          quality products while at the time of rendering repair services. */}
          <strong>Home Technician </strong> is a trusted name in the field of
          air conditioning (AC) repair, installation, and maintenance, dedicated
          to providing exceptional service to both residential and commercial
          clients. With over 20 years of industry experience, we specialize in
          keeping your cooling and HVAC systems running at peak efficiency. Our
          expertise extends to a range of services, including water coolers, RO
          systems, and other essential electrical equipment, ensuring that all
          your service needs are met under one roof. We take pride in using only
          the highest-quality components sourced from reputable vendors to
          guarantee reliable and lasting repairs. Our team of experienced
          technicians is equipped with the latest tools and techniques to
          diagnose issues accurately and provide effective solutions, whether
          it’s a quick repair, a detailed installation, or routine maintenance
          to enhance the longevity and efficiency of your equipment. At Home
          Technician, our mission goes beyond just fixing problems; we aim to
          optimize your systems to improve comfort and reduce energy costs. As
          an environmentally conscious company, we incorporate sustainable
          practices and advanced technology to ensure efficient, eco-friendly
          solutions for our clients. No matter the scope of the project, our
          commitment to excellence and customer satisfaction remains unwavering.
          When it comes to AC, HVAC, and other electronic systems, Home
          Technician is your reliable partner for all repair, servicing, and
          installation needs—delivering comfort, efficiency, and peace of mind.
        </p>
      </div>
      <div className=" w-full flex items-center  justify-center object-cover px-10 py-6 shadow-lg ">
        <Image src={WelcomeImg} alt="image" className="rounded-md" />
      </div>
    </div>
  );
};

export default Welcomesection;
