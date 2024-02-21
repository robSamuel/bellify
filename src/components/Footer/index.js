import FooterBody from "./FooterMain";
import FooterNewsletter from "./FooterNewsletter";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterBody />
      <div className="Footer-divider" />
      <FooterNewsletter />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;