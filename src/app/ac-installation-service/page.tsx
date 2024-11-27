import Image from "next/image";
import BannerImage from "../../../public/images/ac-installation-service.png";
import AcInstall from "../../../public/images/ac-install-image.png";

import { Metadata } from "next";
export const metadata:Metadata={
  title: "Ac Installation Service",
}

const AcInstallationService = () => {
  return (
    <>
      <Image src={BannerImage} alt="" className="w-full" />
      <h2 className="my-3 text-2xl text-center text-gray-700">
        Ac Installation Service
      </h2>
      <p className="p-4 md:px-14 text-justify text-gray-700">
        All brand air conditioners repairing, installation and servicing by
        &nbsp;<strong>Home Technician</strong> AC Technicians in all over
        Gurgaon. As a Gurgaon resident, we know that the weather can be
        extremely hot even from end of march till October. When the brutal
        summer heat arrives, you and your family find relief in a cool, split
        air conditioned home. And when those winter months bring on the cold
        weather , you need a reliable heating system to keep your home warm and
        toasty. But what happens if your home’s heating or cooling system fails
        when you need it most?
      </p>
      <div className=" flex flex-wrap md:px-24 justify-center">
        <div className="w-full md:w-1/2 p-4 md:px-14 ">
          <h2 className="my-2 text-2xl text-gray-700">AC installation</h2>
          <p className="text-gray-700">
            Pre-service, Post-service checks & Installation of unit 60 days
            warranty Additional spare part cost, gas charges, mason work not
            included.
          </p>
          <h2 className="my-2 text-2xl text-gray-700 md:mt-8">AC uninstallation</h2>
          <p className="text-gray-700">
            Pre-service, Post-service checks & Un-installation of unit Warranty
            not applicable Additional spare part cost, gas charges, mason work
            not included.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 ">
          <Image
            src={AcInstall}
            alt=""
            className="h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default AcInstallationService;
