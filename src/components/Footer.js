import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { SiVisa, SiMastercard, SiApplepay, SiGooglepay } from "react-icons/si";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      {/* Logo & Kontakt */}
      <div className="footer-logo-contact">
        <div className="footer-logo">Top Mobile</div>
        <div className="footer-contact">
          <div>Adresa: Ulpiane, Prishtinë</div>
          <div>
            Tel: <a href="tel:+38345407222">045 407 222</a> | <a href="tel:+38344723123">044 723 123</a>
          </div>
          <div>
            Email: <a href="mailto:topmobileshopservice@gmail.com">topmobileshopservice@gmail.com</a>
          </div>
          <div>Orari: 09:00–21:00 (Hënë–Shtunë)</div>
          <div>E diel: Mbyllur</div>
        </div>
      </div>
      {/* Linke Meny */}
      <div className="footer-links">
        <h4>Meny & Shërbime</h4>
        <ul>
          <li><a href="/products">Produktet</a></li>
          <li><a href="/cart">Shporta</a></li>
          <li><a href="/services">Riparime & Bartje të Dhënave</a></li>
          <li><a href="/accessories">Aksesorë & Mbrojtëse</a></li>
          <li><a href="/gift-cards">Gift Cards</a></li>
          <li><a href="https://wa.me/38345407222" target="_blank" rel="noopener noreferrer">Na Kontakto në WhatsApp</a></li>
        </ul>
      </div>
      {/* Social & Pagesat */}
      <div className="footer-links">
        <h4>Na ndiqni</h4>
        <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
          <a href="https://www.facebook.com/topmobile.rks" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/topmobile.rks/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@topmobile.rks" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/38344723123" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <h4>Pagesat e pranuara</h4>
        <div className="footer-payments">
          <SiVisa size={28} />
          <SiMastercard size={28} />
          <SiApplepay size={28} />
          <SiGooglepay size={28} />
        </div>
      </div>
      {/* Newsletter */}
      <div className="footer-subscribe">
        <h4>Abonohu për oferta & lajme</h4>
        <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Email-i juaj" required />
          <button type="submit">OK</button>
        </form>
        <div style={{ fontSize: 13, color: "#7d8299", marginTop: 7 }}>
          Merr ofertat më të fundit direkt në email.
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="footer-copyright">
        © {new Date().getFullYear()} Top Mobile. Të gjitha të drejtat e rezervuara.
      </div>
      <div className="footer-bottom-links">
        <a href="/terms">Privatësia</a>
        <a href="/terms">Kushtet</a>
        <a href="/warranty">Garancia</a>
      </div>
    </div>
  </footer>
);

export default Footer;
