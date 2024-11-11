import Image from "next/image";
import WhatsappImage from "../../../public/images/WhatsAppIcon.png";

const WhatsappIcon = () => {
  return (
    <div className=" fixed bottom-3 right-4 cursor-pointer">
      <a href="https://api.whatsapp.com/send?phone=7303387506" target="_blank">
        <Image src={WhatsappImage} width={50} height={50} alt="whatsappIcon" />
      </a>
    </div>
  );
};

export default WhatsappIcon;
