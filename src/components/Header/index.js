import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import favorite from "@/assets/images/heart.png";
import cart from "@/assets/images/cart.png";

import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-container">
        <Link href="/">
          <figure className="Header-logo">
            <Image src={Logo} width="auto" height="auto" alt="Smbs logo" />
          </figure>
        </Link>
        <label className="Header-hamburger" htmlFor="menuCheck">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input
          type="checkbox"
          name="menuCheck"
          id="menuCheck"
          className="Header-hamburgerCheck d-none"
        />
        <div className="Header-row">
          <nav className="Header-menu">
            <ul className="Header-links">
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Servicios
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Productos
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Bodas
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Estilos
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Header-row">
          <nav className="Header-menu">
            <ul className="Header-links">
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Iniciar sesión
                </Link>
              </li>
              <Link href="/" className="Header-button">
                Reserva
              </Link>
              <li className="Header-icons">
                <Link href="/" className="Header-icon">
                  ES
                </Link>
                <Link className="Header-icon heart" href="/">
                  <Image
                    alt="favorites"
                    src={favorite}
                    width={24}
                    height={21}
                  />
                </Link>
                <Link className="Header-icon store" href="/">
                  <Image alt="cart" src={cart} width={24} height={21} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
