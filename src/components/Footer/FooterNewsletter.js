import Image from "next/image";
import AmericanExpress from "@/assets/images/american-express.svg";
import Maestro from "@/assets/images/maestro.svg";
import Mastercard from "@/assets/images/mastercard.svg";
import Visa from "@/assets/images/visa.svg";
import RightArrow from "@/assets/images/right-arrow.svg";

const FooterNewsletter = () => {
  return (
    <div className="FooterNewsletter">
      <div className="FooterNewsletter-section">
        <h3 className="FooterNewsletter-title">
          Newsletter
        </h3>
        <form className="FooterNewsletter-form" action="">
          <input
            className="FooterNewsletter-input"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="FooterNewsletter-input"
            type="text"
            placeholder="Correo eléctronico"
          />
          <button className="FooterNewsletter-button" type="submit">
            <Image src={RightArrow} alt="right arrow" />
          </button>
        </form>
      </div>
      <div className="FooterNewsletter-section">
        <Image
          className="FooterNewsletter-payments"
          src={Visa}
          height="auto"
          width="auto"
          alt="visa logo"
        />
        <Image
          className="FooterNewsletter-payments"
          src={Mastercard}
          width="auto"
          height="auto"
          alt="mastercard logo"
        />
        <Image
          className="FooterNewsletter-payments"
          src={Maestro}
          height="auto"
          width="auto"
          alt="maestro logo"
        />
        <Image
          className="FooterNewsletter-payments"
          src={AmericanExpress}
          height="auto"
          width="auto"
          alt="american express logo"
        />
      </div>
    </div>
  );
};

export default FooterNewsletter;