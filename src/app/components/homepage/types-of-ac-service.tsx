import Image from "next/image";
import Image1 from "../../../../public/images/serviceType1.webp";
import Image2 from "../../../../public/images/ac-installation.png";
import Image3 from "../../../../public/images/adcard.png";


const serviceList = [
  {
    urlImage: Image1,
    title: "AC Repair Services",
    href: "tel:7303387506",
  },
  {
    urlImage: Image2,
    title: "AC Installation Services by Professionals ",
    href: "tel:7303387506",
  },
  {
    urlImage: Image3,
    title: "Maintenance & AMC Service",
    href: "tel:7303387506",
  },
];

const TypesofServicesSec = () => {
  return (
    <div className="my-3 bg-slate-100 px-6 py-8 items-center">
      <div className="flex flex-col justify-center items-center mb-2">
        <h2 className="font-semibold mb-2 text-2xl text-primary text-center">
          All Types of AC Services
        </h2>
        <div className="h-[3px] bg-primary w-[300px] hover:bg-green-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3  md:gap-6  rounded-lg ">
        {serviceList.map((item, index) => (
          <div
            key={index}
            className="bg-slate-100 flex flex-col  rounded-lg shadow-md min-h-80"
          >
            <div className="p-2 ">
              <Image
                src={item.urlImage}
                alt="service1"
                className="object-fill rounded-md"
                //   width={350}
                //   height={350}
              />
            </div>
            <div className="flex items-center justify-between px-4 mb-2">
              <p className="my-3 text-lg font-semibold text-primary">
                {item.title}
              </p>
              <div className="p-2 bg-white rounded-md shadow-lg">
                <a
                  href={item.href}
                  className="text-red-500 font-medium hover:text-blue-500"
                >
                 Call us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypesofServicesSec;
