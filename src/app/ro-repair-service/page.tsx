import Image from "next/image";
import BannerImage from "../../../public/images/ro-repair-service.png";
import RoRepairImage from "../../../public/images/ro-service-image.png";

const RoRepairService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        RO Repair & Installation Service – Clean, Pure Water at Your Fingertips!
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        Is your RO water purifier not working as it should? Or are you looking
        to install a new RO system in your home or office? Our team of experts
        is here to provide top-quality RO repair and installation services,
        ensuring you always have access to safe, purified water.
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">Certified Technicians</h2>
          <p className="text-gray-700">
            Our skilled professionals are experienced with all RO brands and
            models, providing reliable repair and installation services.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Affordable & Transparent Pricing
          </h2>
          <p className="text-gray-700">
            Enjoy premium service without hidden fees. Our pricing is
            straightforward and budget-friendly.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Quick & Efficient Service
          </h2>
          <p className="text-gray-700">
            We prioritize fast, same-day service to minimize disruption and
            ensure clean water is readily available.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={RoRepairImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
        <div className="p-4 md:px-14">
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Professional RO Installation Services
          </h2>
          <p className="text-gray-700">
            Looking to install a new RO system? We handle the entire
            installation process, from setting up the purifier to connecting
            plumbing and checking filtration, ensuring your RO operates smoothly
            and efficiently from day one.
          </p>
        </div>
      </div>
    </>
  );
};
export default RoRepairService;
