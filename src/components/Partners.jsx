import './Partners.css';
import { assetUrl } from '../utils/assets';

const PARTNERS = [
  {
    name: 'Vivo Energy Kenya',
    type: 'Official Sponsor',
    logo: assetUrl('vivo_energy.png'),
    description:
      'Established in November 2012 after acquiring Shell\'s downstream business in Kenya, Vivo Energy Kenya is a market leader serving retail and commercial customers with automotive fuels, lubricants, aviation fuels, LPG, and black fuels.',
    highlights: [
      'Bulk storage terminals in Nairobi, Mombasa, and Nanyuki',
      'Aviation services at JKIA, Wilson, Mombasa, and Malindi',
      'Community investment programmes creating long-term social and economic impact',
      'Communicates in Kenya\'s national languages: English and Swahili'
    ]
  },
  {
    name: 'AIMotor',
    type: 'Technical Partner',
    logo: assetUrl('aimotor.png'),
    description:
      'AIMotor supports Magana Luusa as technical partner, bringing a technology-first identity to the racing programme and strengthening the project with focused technical backing.',
    highlights: [
      'Technical partner to the 2026 racing programme',
      'Performance-driven brand presence across the project',
      'Supports a modern engineering-led image around Magana Luusa'
    ]
  }
];

export default function Partners() {
  return (
    <section id="partners" className="partners-section">
      <div className="partners-shell">
        <div className="partners-hero">
          <div className="partners-copy">
            <span className="partners-kicker">02 - PARTNERS</span>

            <h2>
              <span>OFFICIAL</span>
              <span>SPONSORS AND</span>
              <span>TECHNICAL</span>
              <span>PARTNERS</span>
            </h2>

            <p>
              Backed by ambitious brands investing in performance, reliability, and long-term impact on and off the track.
            </p>
          </div>

          <div className="partners-visual">
            <img src={assetUrl('partners.jpeg')} alt="Magana Luusa with partner section feature image" />
          </div>
        </div>

        <div className="partners-grid">
          {PARTNERS.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-card-logo-wrap">
                <img src={partner.logo} alt={`${partner.name} logo`} className="partner-card-logo" />
              </div>

              <div className="partner-card-body">
                <span className="partner-card-type">{partner.type}</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>

                <ul className="partner-card-highlights">
                  {partner.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}