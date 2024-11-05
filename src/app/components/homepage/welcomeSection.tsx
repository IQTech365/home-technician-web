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
          <strong>Home Technician </strong>is one of the leading names in the
          sales and Services of electrical, AC, HVAC system, Water Cooler, RO
          system and electronic products and systems used in a broad range of
          fields and applications. As a global, leading green company, we’re
          applying our technologies to contribute to society and daily life
          around the world. As a team we are well
          <strong> experienced with more than 20 years</strong> in the above
          mentioned field. We avail each component of AC from reputed and
          trustworthy vendors of the market to assure that we use only the best
          quality products while at the time of rendering repair services.
        </p>
      </div>
      <div className=" w-full flex items-center  justify-center object-cover px-10 py-6 shadow-lg ">
        <Image src={WelcomeImg} alt="image" className="rounded-md" />
      </div>
    </div>
  );
};

export default Welcomesection;
