import AmericanExpress from "@/assets/images/american-express.svg";
import Maestro from "@/assets/images/maestro.svg";
import Mastercard from "@/assets/images/mastercard.svg";
import Visa from "@/assets/images/visa.svg";
import Image from "next/image";

const FooterNewsletter = () => {
  return (
    <div className="FooterNewsletter">
      <div className="FooterNewsletter-section">
        <h3 className="FooterNewsletter-title">
          Newsletter
        </h3>
        <form action="">
          <input  />
          <input  />
          <button type="submit"></button>
        </form>
      </div>
      <div className="FooterNewsletter-section">
        <Image className="FooterNewsletter-cards" src={Visa} height="auto" width="auto" alt="visa logo" />
        <Image className="FooterNewsletter-cards" src={Mastercard} width="auto" height="auto" alt="mastercard logo" />
        <Image className="FooterNewsletter-cards" src={Maestro} height="auto" width="auto" alt="maestro logo" />
        <Image className="FooterNewsletter-cards" src={AmericanExpress} height="auto" width="auto" alt="american express logo" />
      </div>
    </div>
  );
};

export default FooterNewsletter;