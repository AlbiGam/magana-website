import './AboutMe.css';
import { useState } from 'react';
import { assetUrl } from '../utils/assets';

const ABOUT_PHOTO = assetUrl('about_me.jpeg');

const ABOUT_PARAGRAPHS = [
  'My name is Magana Luusa, and I started karting in 2018, aged 8, in Nairobi, Kenya. My family bought a second-hand kart, and from the very beginning, I knew this was what I wanted to do with my life.',
  'By 2021, in my first professional season, I finished 4th in the Kenya National Karting Championship. The following year, I improved to 3rd. Then came three consecutive Vice Championships - 2023 and 2024 in the National Championship, and 2025 in the Rotax Max Challenge Kenya, where I lost the title by just one point after battling engine failures all season long. I never gave up.',
  'In 2024, I took pole position at the Shenington Annual Race in the UK, proving I could compete internationally. In 2025, everything accelerated. I was awarded the Shell Motorsport Excellence Award - recognition from a global F1 partner that validated everything I\'d worked toward. Then I competed in the Champions of the Future Academy across Europe - Portugal, Spain, UAE, Italy, Slovakia - finishing consistently in the Top 20 despite having zero testing while my rivals had 2-3 weeks of preparation at each circuit.',
  'I also raced the ROK Cup South Africa, finishing P7 on my debut without any practice. That same year, Shell recognized me again - this time as Best Upcoming Racer 2026.',
  'I went from karting in Kenya to competing across Europe and being recognized twice by Shell as exceptional talent. I\'ve proven I can learn faster than drivers with more resources, fight harder than drivers with more advantages, and never quit even when losing by a single point.'
];

export default function AboutMe() {
  const [expanded, setExpanded] = useState(false);
  const visibleParagraphs = expanded ? ABOUT_PARAGRAPHS : ABOUT_PARAGRAPHS.slice(0, 2);

  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-copy">
          <div className="about-kicker">
            <span className="about-kicker-line" />
            <span className="about-kicker-text">01 - MY STORY</span>
          </div>

          <h2 className="about-title">
            <span>ABOUT</span>
            <span>ME</span>
          </h2>

          <div className="about-paragraphs">
            {visibleParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <button
              type="button"
              className="about-toggle"
              onClick={() => setExpanded((state) => !state)}
            >
              {expanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>

        <aside className="about-card" aria-label="Magana Luusa highlights">
          <img src={ABOUT_PHOTO} alt="Magana Luusa karting profile" className="about-card-photo" />

          <div className="about-card-head">
            <h3>
              <span className="card-name-first">MAGANA</span>
              <span className="card-name-last">LUUSA</span>
            </h3>
            <p>KENYA - PROFESSIONAL KARTING DRIVER</p>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <strong>2018</strong>
              <span>KARTING START</span>
            </div>
            <div className="stat-box">
              <strong>P2</strong>
              <span>BEST NATIONAL FINISH</span>
            </div>
            <div className="stat-box">
              <strong>TOP 20</strong>
              <span>COTF ACADEMY EUROPE</span>
            </div>
            <div className="stat-box">
              <strong>2x</strong>
              <span>SHELL AWARD WINNER</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}