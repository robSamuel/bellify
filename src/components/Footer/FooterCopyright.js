import Image from "next/image";
import Beonshop from "@/assets/images/beonshop.svg";

const FooterCopyright = () => {
  return (
    <div className="FooterCopyright">
      <p className="FooterCopyright-text">&#169; {new Date().getFullYear()}. Bellify. All rights reserved.</p>
      <div className="FooterCopyright-block">
        <p className="FooterCopyright-text">Work done by</p>
        <Image src={Beonshop} height="auto" width="auto" alt="beonshop logo" />
      </div>
    </div>
  )
}

export default FooterCopyright