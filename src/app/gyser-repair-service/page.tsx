import Image from "next/image";
import BannerImage from "../../../public/images/geyser-service.png";
import GyserRepairImage from "../../../public/images/gyser-Installation-repair-image.png";

const GeyserRepairService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Gyser Repair Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        Is your geyser not heating water as it should? Or do you need a new
        geyser installed professionally? Our expert team is here to ensure your
        water heating system is in top condition, providing reliable repairs and
        seamless installations for all geyser models.
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">
            Experienced Technicians
          </h2>
          <p className="text-gray-700">
            Our skilled technicians are trained to handle a variety of geyser
            models, ensuring safe and effective repair and installation.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Affordable and Transparent Pricing
          </h2>
          <p className="text-gray-700">
            Quality service without breaking the bank! Our pricing is
            competitive and honest, with no hidden charges.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Prompt Service
          </h2>
          <p className="text-gray-700">
            Whether it’s an urgent repair or a new installation, we prioritize
            quick, efficient service to bring you peace of mind.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={GyserRepairImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
        <div className="p-4 md:px-14">
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Professional Geyser Installation Service
          </h2>
          <p className="text-gray-700">
            Installing a new geyser? We ensure your geyser is set up perfectly,
            prioritizing both safety and efficiency. Our installation process
            includes a comprehensive check of plumbing, electrical connections,
            and fittings, ensuring your geyser operates smoothly from day one.
          </p>
        </div>
      </div>
    </>
  );
};
export default GeyserRepairService;
