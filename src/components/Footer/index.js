import FooterMain from "./FooterMain";
import FooterNewsletter from "./FooterNewsletter";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterMain />
      <div className="Footer-divider" />
      <FooterNewsletter />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;