import './Contact.css';
import { assetUrl } from '../utils/assets';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="contact-kicker">04 - CONTACT</span>

            <h2>
              <span>LET&apos;S BUILD</span>
              <span>THE NEXT</span>
              <span>CHAPTER</span>
            </h2>

            <p>
              For partnerships, media, racing opportunities, or direct enquiries, reach out by email.
            </p>

            <a className="contact-email" href="mailto:maganaluusa@gmail.com">
              maganaluusa@gmail.com
            </a>

            <div className="contact-notes">
              <span>Available for sponsor conversations and racing collaborations.</span>
              <span>Communication available in English and Swahili.</span>
            </div>
          </div>

          <div className="contact-visual">
            <img src={assetUrl('contact.jpeg')} alt="Magana Luusa racing at dusk" />
          </div>
        </div>
      </div>
    </section>
  );
}