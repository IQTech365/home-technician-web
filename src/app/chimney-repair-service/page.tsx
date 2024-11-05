import Image from "next/image";
import BannerImage from "../../../public/images/chimney-repair-service.png";
import GyserRepairImage from "../../../public/images/gyser-Installation-repair-image.png";

const ChimneyRepairService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Chimney Repair & Installation Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        A well-functioning chimney is essential for a clean and odor-free
        kitchen. Whether your chimney needs repairs or you’re looking to install
        a new one, our expert team is here to ensure everything works
        flawlessly, from proper suction to smooth airflow. We specialize in
        chimney repair and installation for all types and brands.
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center mb-10">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">
            Experienced Technicians
          </h2>
          <p className="text-gray-700">
            Our team has years of expertise, handling a range of chimney models
            and brands to keep your kitchen smoke-free.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Affordable and Transparent Pricing
          </h2>
          <p className="text-gray-700">
            We believe in offering fair pricing with no hidden fees, providing
            quality service that fits your budget.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">
            Timely Service
          </h2>
          <p className="text-gray-700">
            We understand the importance of a functional chimney, so we deliver
            quick and efficient repairs and installations.
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
            Chimney Installation Services
          </h2>
          <p className="text-gray-700">
            Looking to install a new chimney? We offer complete chimney
            installation services, ensuring it is set up with secure fittings,
            proper ducting, and reliable electrical connections. Our experts
            also provide guidance on the best chimney models to suit your
            kitchen layout.
          </p>
        </div>
      </div>
    </>
  );
};
export default ChimneyRepairService;
