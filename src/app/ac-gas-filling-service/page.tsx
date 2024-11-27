import Image from "next/image";
import BannerImage from "../../../public/images/ac-installation-service.png";
import AcGasFillingImage from "../../../public/images/ac-gas-filling-image.png";

import { Metadata } from "next";
export const metadata:Metadata={
  title: "Ac Gas Filling Service",
}

const AcGasFillingService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        AC Gas Filling Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        All brand air conditioners repairing, Gas filling by &nbsp;
        <strong>Home Technician</strong> AC Technicians in all over Gurgaon. As
        a Gurgaon resident, we know that the weather can be extremely hot even
        from end of march till October. When the brutal summer heat arrives, you
        and your family find relief in a cool, split air conditioned home. And
        when those winter months bring on the cold weather , you need a reliable
        heating system to keep your home warm and toasty. But what happens if
        your home’s heating or cooling system fails when you need it most?
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">Certified Technicians</h2>
          <p className="text-gray-700">
            Our team has extensive experience with all AC brands and models,
            ensuring safe and accurate gas refilling.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Quick and Reliable
          </h2>
          <p className="text-gray-700">
            We pride ourselves on providing quick service so that you can enjoy
            a comfortable indoor climate without delays.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Eco-Friendly Practices
          </h2>
          <p className="text-gray-700">
            Our technicians follow eco-friendly procedures and use top-quality,
            eco-safe refrigerants.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={AcGasFillingImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default AcGasFillingService;
