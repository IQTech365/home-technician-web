import Image from "next/image";
import BannerImage from "../../../public/images/wshing-machine-service.png";
import WashingMachineRepairImage from "../../../public/images/washing-machine-repair-image.png";

import { Metadata } from "next";
export const metadata:Metadata={
  title: "Washing Machine Repair Service",
}

const WashingMachineRepairService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Washing Machine Repair Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        Whether it&apos;s leaking, vibrating, or not spinning, our expert repair
        service is here to solve the issue quickly and efficiently. We repair
        all types and brands, ensuring your washing machine gets back to peak
        performance in no time!
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">Skilled Technicians</h2>
          <p className="text-gray-700">
            Our team has years of experience handling a wide range of washing
            machine issues for all major brands.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Fast and Efficient Repairs
          </h2>
          <p className="text-gray-700">
            We understand the urgency, so we prioritize fast, same-day repairs
            to minimize downtime.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Transparent and Affordable Pricing
          </h2>
          <p className="text-gray-700">
            No hidden costs! We offer competitive, straightforward pricing for
            all repairs.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Quality Parts and Guaranteed Work
          </h2>
          <p className="text-gray-700">
            We use only high-quality parts and back our work with a service
            guarantee.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={WashingMachineRepairImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
        <p className="text-gray-700 p-4 md:px-14
        ">
          <strong> Book Your Repair Today!</strong><br/>
          Don’t let washing machine issues disrupt your routine. Contact us for
          a fast, affordable, and professional washing machine repair service
          you can count on. Get back to fresh, clean clothes with ease!
        </p>
      </div>
    </>
  );
};
export default WashingMachineRepairService;
