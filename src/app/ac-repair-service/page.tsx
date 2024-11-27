import Image from "next/image";
import BannerImage from "../../../public/images/air-conditioner-repair.png";
import AcrepairImage from "../../../public/images/ac-repair-image.png";

import { Metadata } from "next";
export const metadata:Metadata={
  title: "Ac Repair Service",
}

const AcRepairService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Ac Reapir & AMC Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        When you need AC Service And Maintenance, our many qualified specialists
        will provide you with excellent service. You can go out to our friendly
        team of technicians. You can also have your services done for an
        affordable price without sacrificing efficiency. We will turn up at your
        doorstep and complete repairs in your homes and offices. Each AC has its
        own set of specifications, instructions, and support structures. Our
        professionals who are familiar with every aspect of the AC.
        <strong>Home Technician</strong> ensure that you have a smooth
        experience. We provide the best services of split air conditioner,
        window AC, central air conditioner, or industrial air conditioner.
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">
            Services we provide&nbsp;:-
          </h2>
          <p className="text-gray-700">Air conditioner service</p>
          <p className="text-gray-700">Ac repair Service</p>
          <p className="text-gray-700">AC installation</p>
          <p className="text-gray-700">AC maintenance</p>
          <p className="text-gray-700">Commercial AC Repair</p>
          <p className="text-gray-700">Air conditioning replacement</p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={AcrepairImage}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
      <div className=" flex flex-wrap md:px-24 justify-center">
        <div className="w-full md:w-1/2 py-2 px-4  ">
          <h2 className="my-2 text-2xl text-gray-700">
            Power jet window service
          </h2>
          <p className="text-gray-700">
            It includes Complete servicing of filter, cooling coil and drain
            tray 3X servicing with Jet-Pump Technology Reduced power
            consumption.
          </p>
          <h2 className="my-2 text-2xl text-gray-700">AC uninstallation</h2>
          <p className="text-gray-700">
            Pre-service, Post-service checks & Un-installation of unit Warranty
            not applicable Additional spare part cost, gas charges, mason work
            not included.
          </p>
          <h2 className="my-2 text-2xl text-gray-700">
            Foam & Power Jet AC Service
          </h2>
          <p className="text-gray-700">
            Advanced foam jet removes dust & dirt Improves airflow and enhances
            cooling
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8  py-2 px-4 ">
          <h2 className="my-2 text-2xl text-gray-700">AC installation</h2>
          <p className="text-gray-700">
            Pre-service, Post-service checks & Installation of unit 60 days
            warranty Additional spare part cost, gas charges, mason work not
            included.
          </p>
          <h2 className="my-2 text-2xl text-gray-700">
            Anti-rust deep clean AC service
          </h2>
          <p className="text-gray-700">
            Deep cleaning of indoor & outdoor unit before the anti-rust
            protection is applied Specialised anti-rust coating for copper coils
            to prevent gas leakage Additional spare part cost and gas charges
            not included.
          </p>
          <h2 className="my-2 text-2xl text-gray-700">AC repair service</h2>
          <p className="text-gray-700">
            Accurate diagnosis, inspection and quotation 180 days warranty on
            all parts & 30 days warranty on services Additional spare part cost
            and gas charges not included.
          </p>
        </div>
      </div>
    </>
  );
};
export default AcRepairService;
