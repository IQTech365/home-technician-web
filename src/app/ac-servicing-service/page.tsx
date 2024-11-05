import Image from "next/image";
import BannerImage from "../../../public/images/air-conditioner-service.png";
import AcServiceImage from "../../../public/images/ac-service-image.png";

const AcGasFillingService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Professional AC Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        Dust, dirt, and pollutants can build up inside your air conditioner,
        affecting performance and air quality. Our specialized AC washing
        service removes all the grime, ensuring your AC not only cools
        effectively but also circulates clean, healthy air. Perfect for homes
        and offices alike!
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">
            Experienced Technicians
          </h2>
          <p className="text-gray-700">
            Our team is trained to carefully clean all types and brands of air
            conditioners.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Comprehensive Cleaning
          </h2>
          <p className="text-gray-700">
            We go beyond surface cleaning to wash internal components, ensuring
            long-lasting performance.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Boost Efficiency
          </h2>
          <p className="text-gray-700">
            Regular cleaning helps your AC cool better, reducing energy
            consumption and lowering electricity bills
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={AcServiceImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default AcGasFillingService;
