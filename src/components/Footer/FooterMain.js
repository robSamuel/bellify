import Image from "next/image";
import GooglePlayStore from "@/assets/images/google-play-store.svg";
import AppStore from "@/assets/images/app-store.svg";

const FooterMain = () => {
  return (
    <div className="FooterMain">
      <div className="FooterMain-section">
        <h3 className="FooterMain-title">App</h3>
        <Image src={GooglePlayStore} width="auto" height="auto" alt="Google Play Store" />
        <Image src={AppStore} width="auto" height="auto" alt="App Store" />
      </div>
    </div>
  );
};

export default FooterMain;
