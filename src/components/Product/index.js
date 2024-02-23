import Image from "next/image";
import React from "react";

import product from "@/assets/images/product.png";
import preview1 from "@/assets/images/preview-1.png";
import preview2 from "@/assets/images/preview-2.png";
import play from "@/assets/images/play.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ProductService from "./ProductService";
import corte from "@/assets/images/peluqueria.png";
import maquillaje from "@/assets/images/maquillaje.png";
import cuidados from "@/assets/images/cuidados.png";

const Product = () => {
  return (
    <section className="Product">
      <div className="Product-imageWrapper">
        <Image
          src={product}
          width="auto"
          height="auto"
          alt="Product-primary"
          className="Product-image"
        />
        <div className="Product-previews">
          <div className="Product-preview">
            <Image
              src={preview1}
              width={122}
              height={122}
              alt="Product peview one"
            />
          </div>
          <div className="Product-preview">
            <Image
              src={preview2}
              width={122}
              height={122}
              alt="Product-primary"
            />
          </div>
          <div className="Product-preview play">
            <Image src={play} width={20} height={20} alt="Product-peview" />
          </div>
        </div>
      </div>
      <div className="Product-details">
        <h3 className="Product-title">
          <span>Lorem ipsum</span>
        </h3>
        <h5 className="Product-subtitle">
          <span>Núm. Ref: 223344</span>
        </h5>
        <p className="Product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          convallis dictum tellus, in rutrum purus ultricies ac. Vivamus a
          lobortis tellus, nec pulvinar mi. Sed bibendum vitae velit nec
          hendrerit. Morbi quis elementum arcu. Etiam placerat, sem a suscipit
          rutrum, nulla erat tincidunt odio, at vehicula mauris magna vel erat.
          Nunc mollis, neque a porttitor sodales, nisl sapien tincidunt odio, ut
          pellentesque turpis eros ac quam. Nunc pellentesque diam sed augue
          ullamcorper condimentum.
        </p>
        <div className="Product-form">
          <div className="Product-count">
            <span className="Product-label">Cantidad:</span>
            <div className="Product-counter">
              <div className="Product-minus">-</div>
              <div className="Product-quantity">1</div>
              <div className="Product-plus">+</div>
            </div>
          </div>
          <div className="Product-share">
            <span className="Product-label">Comparte este producto en:</span>
            <div className="Product-social">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="Product-services">
          <ProductService
            image={corte}
            alt="corte de pelo"
            text="Nombre del servicio"
          />
          <ProductService
            image={maquillaje}
            alt="maquillaje"
            text="Nombre del servicio"
          />
          <ProductService
            image={cuidados}
            alt="cuidados"
            text="Nombre del servicio"
          />
        </div>
        <div className="Product-buttons">
          <buttton className="Button outline">
            Recomendar este producto
          </buttton>
          <buttton className="Button outline">
            Añadir a la wishlist
          </buttton>
        </div>
          <buttton className="Button">Añadir a la cesta</buttton>
      </div>
    </section>
  );
};

export default Product;
