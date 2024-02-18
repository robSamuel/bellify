import AmericanExpress from "@/assets/images/american-express.svg";
import Image from "next/image";

const FooterNewsletter = () => {
  return (
    <div className="FooterNewsletter">
      <div className="FooterNewsletter-section">
        <h3 className="FooterNewsletter-title">
          Newsletter
        </h3>
        <input  />
      </div>
      <div className="FooterNewsletter-section">
        <Image src={AmericanExpress} height="auto" width="auto" alt="american express logo" />
      </div>
    </div>
  );
};

export default FooterNewsletter;