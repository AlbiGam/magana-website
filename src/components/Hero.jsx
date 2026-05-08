import './Hero.css';
import { assetUrl } from '../utils/assets';

const KARTING_PHOTO = assetUrl('main_picture.jpeg');

export default function Hero() {
  return (
    <section className="hero">
      {/* Left: Photo */}
      <div className="hero-photo">
        <img src={KARTING_PHOTO} alt="Magana Luusa karting" />
        <div className="hero-photo-fade" />
      </div>

      {/* Right: Text content */}
      <div className="hero-content">
        <div className="hero-label">
          <span className="label-line" />
          <span className="label-text">PROFESSIONAL RACING DRIVER</span>
        </div>

        <h1 className="hero-title">
          <span className="title-first">MAGANA</span>
          <span className="title-last">LUUSA</span>
        </h1>

        <p className="hero-sub">Racing driver from Kenya</p>

        <a href="#about" className="hero-btn">LEARN MORE</a>
      </div>

      {/* Side dots navigation */}
      <div className="side-dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
}
