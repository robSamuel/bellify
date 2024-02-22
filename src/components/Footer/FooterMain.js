import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import GooglePlayStore from "@/assets/images/google-play-store.svg";
import AppStore from "@/assets/images/app-store.svg";
import Twitter from "@/assets/images/twitter.svg";
import Facebook from "@/assets/images/facebook.svg";
import Instagram from "@/assets/images/instagram.svg";
import { storeLinks, aboutLinks, helpLinks } from "@/data/footer";

const FooterMain = () => {
  const renderList = ({title, items}) => {
    const listItems = items.map((item) => (
      <Link key={v4()} className="FooterMain-link" href={item.url}>
        {item.text}
      </Link>
    ));

    return (
      <div className="FooterMain-section">
        <h3 className="FooterMain-title">{title}</h3>
        {listItems}
      </div>
    );
  };

  return (
    <div className="FooterMain">
      <div className="FooterMain-section">
        <h3 className="FooterMain-title">App</h3>
        <Image className="FooterMain-store" src={GooglePlayStore} width="auto" height="auto" alt="Google Play Store" />
        <Image className="FooterMain-store" src={AppStore} width="auto" height="auto" alt="App Store" />
      </div>
      {renderList(storeLinks)}
      {renderList(aboutLinks )}
      {renderList(helpLinks)}
      <div className="FooterMain-section">
        <h3 className="FooterMain-title">Síguenos</h3>
        <div className="FooterMain-icons">
          <Image className="FooterMain-icon" src={Twitter} alt="Twitter icon" height="auto" width="auto" />
          <Image className="FooterMain-icon" src={Facebook} alt="Facebook icon" height="auto" width="auto" />
          <Image className="FooterMain-icon" src={Instagram} alt="Instagram icon" height="auto" width="auto" />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
