'use client';
import AmericanExpress from "@/assets/images/american-express.svg";
import Maestro from "@/assets/images/maestro.svg";
import Mastercard from "@/assets/images/mastercard.svg";
import Visa from "@/assets/images/visa.svg";
import Image from "next/image";
import { useEffect } from "react";

const FooterNewsletter = () => {
  useEffect(() => {
    console.log('typeof Visa', typeof Visa)
    console.log('Visa', Visa)
  }, [])
  

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
        <Image className="FooterNewsletter-cards" src={Visa.src} height={30} width={60} alt="visa logo" />
        <Image className="FooterNewsletter-cards" src={Mastercard.src} height={30} width={60} alt="mastercard logo" />
        <Image className="FooterNewsletter-cards" src={Maestro.src} height={30} width={60} alt="maestro logo" />
        <Image className="FooterNewsletter-cards" src={AmericanExpress.src} height={30} width={60} alt="american express logo" />
      </div>
    </div>
  );
};

export default FooterNewsletter;