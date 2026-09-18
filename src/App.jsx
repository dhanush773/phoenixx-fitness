
import "./App.css";
import heroImage from "./assets/hero.png";

/* =========================
   SOCIAL ICONS
========================= */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path d="M10 8.5L16 12L10 15.5Z" fill="white" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7L12 13L20 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* =========================
   FITNESS CALCULATOR ICONS
========================= */

function FlameIcon() {
  return (
    <svg viewBox="0 0 100 100" className="neon-icon" aria-hidden="true">
      <path d="M50 8C70 35 88 45 88 68C88 88 71 96 50 96C29 96 12 83 12 63C12 45 27 35 38 20C39 38 49 42 52 54C65 38 57 23 50 8Z" fill="currentColor" />
      <path d="M50 47C64 62 67 72 58 82C51 89 37 83 37 72C37 62 45 57 50 47Z" fill="white" opacity="0.85" />
    </svg>
  );
}

function ShakerIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Flip Cap */}
      <path d="M31 18V7H27" />
      <path d="M27 7Q45 3 64 10L72 13" />
      <path d="M38 18V10" />

      {/* Cap Support */}
      <path d="M64 10V5Q64 2 68 2Q72 2 72 6V17" />

      {/* Shaker Dome */}
      <path d="M23 25Q27 13 42 11Q57 13 62 25" />

      {/* Lid Rim */}
      <rect
        x="20"
        y="25"
        width="60"
        height="9"
        rx="2"
        fill="currentColor"
        stroke="currentColor"
      />

      {/* Lid Inner */}
      <path d="M24 29H76" stroke="#0B0B12" strokeWidth="2" />

      {/* Shaker Body */}
      <path
        d="M24 34L28 84Q29 91 36 91H64Q71 91 72 84L76 34"
      />

      {/* Left Measurement Mark */}
      <path d="M27 42H38" strokeWidth="3" />

      {/* Right Highlight */}
      <path d="M68 45L65 72" strokeWidth="3" />
    </svg>
  );
}

function Vo2Icon() {
  return (
    <svg viewBox="0 0 100 100" className="neon-icon" aria-hidden="true">
      <path d="M15 70A35 35 0 0 1 85 70" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M50 70L72 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="70" r="7" fill="currentColor" />
      <path d="M20 82H80" stroke="currentColor" strokeWidth="3" />
      <text x="50" y="92" textAnchor="middle" fontSize="10" fill="currentColor">VO2</text>
    </svg>
  );
}

function BarbellIcon() {
  return (
    <svg viewBox="0 0 100 100" className="neon-icon" aria-hidden="true">
      <path d="M15 42V58M23 35V65M32 39V61M68 39V61M77 35V65M85 42V58" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M32 50H68" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function StrengthIcon() {
  return (
    <svg viewBox="0 0 100 100" className="neon-icon" aria-hidden="true">
      <path d="M15 85V60H35V85Z" fill="currentColor" opacity="0.5" />
      <path d="M40 85V40H60V85Z" fill="currentColor" opacity="0.75" />
      <path d="M65 85V18H85V85Z" fill="currentColor" />
      <path d="M15 35L38 20L55 27L84 8" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function CreatineIcon() {
  return (
    <svg viewBox="0 0 100 100" className="neon-icon" aria-hidden="true">
      <path d="M35 12H65V22L73 30V86Q73 94 65 94H35Q27 94 27 86V30L35 22Z" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M35 12H65V22H35Z" fill="currentColor" />
      <text x="50" y="57" textAnchor="middle" fontSize="11" fill="currentColor">CREATINE</text>
      <path d="M35 68H65" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

/* =========================
   ESSENTIAL ICONS
========================= */

function BookIcon() {
  return (
    <svg viewBox="0 0 100 100" className="essential-svg" aria-hidden="true">
      <path d="M12 18Q31 10 50 24Q69 10 88 18V82Q69 74 50 88Q31 74 12 82Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M50 24V88" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function LiftingIcon() {
  return (
    <svg viewBox="0 0 100 100" className="essential-svg" aria-hidden="true">
      <path d="M12 38V62M22 28V72M32 35V65M68 35V65M78 28V72M88 38V62" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M32 50H68" stroke="currentColor" strokeWidth="7" />
    </svg>
  );
}

function MealIcon() {
  return (
    <svg viewBox="0 0 100 100" className="essential-svg" aria-hidden="true">
      <path d="M15 48Q20 30 38 34Q50 14 62 34Q80 30 85 48L80 73Q50 88 20 73Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M22 53H78" stroke="currentColor" strokeWidth="4" />
      <path d="M35 27Q38 17 48 19" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

const calculators = [
  { icon: FlameIcon, title: "TDEE / CALORIE", subtitle: "CALCULATOR", description: "Find your maintenance and calorie goals.", color: "pink" },
  { icon: ShakerIcon, title: "PROTEIN", subtitle: "CALCULATOR", description: "Calculate your daily protein needs.", color: "blue" },
  { icon: Vo2Icon, title: "VO2 MAX", subtitle: "CALCULATOR", description: "Estimate your cardiovascular fitness.", color: "purple" },
  { icon: BarbellIcon, title: "1-REP MAX", subtitle: "CALCULATOR", description: "Find your true strength potential.", color: "pink" },
  { icon: StrengthIcon, title: "STRENGTH", subtitle: "STANDARDS", description: "See where you stand compared to others.", color: "blue" },
  { icon: CreatineIcon, title: "CREATINE", subtitle: "CALCULATOR", description: "Explore creatine dosage guidance.", color: "purple" },
];

const essentials = [
  { title: "My Favorite Books", label: "BOOK LIST", description: "Books that have helped my mindset, discipline and lifestyle.", color: "purple", icon: BookIcon },
  { title: "Lifting Accessories", label: "LIFTING ESSENTIALS", description: "Belts, straps, wraps and more. Lift better, train smarter.", color: "blue", icon: LiftingIcon },
  { title: "Meal Prep Essentials", label: "MEAL PREP ESSENTIALS", description: "My go-to kitchen tools, containers and meal prep must-haves.", color: "pink", icon: MealIcon },
];

function SocialLinks({ footer = false }) {
  return (
    <div className={`socials ${footer ? "footer-socials" : "hero-socials"}`}>
      <a href="https://www.instagram.com/phoenixx._fit?stkn=dGZ2dndvNzBxeWkx" target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="https://youtube.com/@phoenixx._fit" target="_blank" rel="noreferrer" aria-label="YouTube">
        <YouTubeIcon />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanush.d43715@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
        <MailIcon />
      </a>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="logo" aria-label="Phoenixx Fitness home">
      PHOENIXX
      <span>FITNESS</span>
    </a>
  );
}

function App() {
  return (
    <main className="app">
      <header className="header">
        <Logo />
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">TRAIN • LEARN • IMPROVE</p>
          <h1>
            DISCIPLINE
            <br />
            BUILDS A
            <br />
            BETTER <span>YOU.</span>
          </h1>
          <p className="hero-description">
            Sharing my fitness journey, practical knowledge and resources to help
            you build a stronger, healthier life.
          </p>
          <SocialLinks />
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="Phoenixx Fitness athlete" className="hero-image" />
        </div>

        <div className="mobile-logo">
          <Logo />
        </div>
      </section>

      <section className="section calculators-section">
        <div className="section-heading">
          <h2>FREE FITNESS CALCULATORS</h2>
          <p>Practical tools to help you train, eat and improve with real numbers.</p>
        </div>

        <div className="calculator-grid">
          {calculators.map((item) => {
            const Icon = item.icon;

            return (
              <button
                className={`calculator-card ${item.color}`}
                key={item.title}
                onClick={() => alert(`${item.title} coming soon`)}
              >
                <div className="card-glow" />
                <div className="card-icon"><Icon /></div>
                <div className="card-content">
                  <h3>{item.title}<br />{item.subtitle}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="arrow">↗</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section essentials-section">
        <div className="section-heading">
          <h2>FAVORITES &amp; ESSENTIALS</h2>
          <p>Tools, books and foods I personally use and recommend.</p>
        </div>

        <div className="essentials-list">
          {essentials.map((item) => {
            const Icon = item.icon;

            return (
              <button
                className={`essential-card ${item.color}`}
                key={item.title}
                onClick={() => alert(`${item.title} coming soon`)}
              >
                <div className="essential-icon">
                  <Icon />
                  <span>{item.label}</span>
                </div>

                <div className="essential-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="essential-actions" aria-hidden="true">
                  <span className="essential-arrow">›</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <a
        className="business-card"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanush.d43715@gmail.com&su=Business%20%26%20Partnership%20Inquiry"
        target="_blank"
        rel="noreferrer"
        aria-label="Send business inquiry by email"
      >
        <div>
          <h2>Business &amp; Partnership Inquiries</h2>
          <p>For brand collaborations and opportunities.</p>
        </div>
        <span className="arrow" aria-hidden="true">↗</span>
      </a>

      <a
        className="business-card personal-business-card"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=luffy43715@gmail.com&su=Personal%20Inquiry"
        target="_blank"
        rel="noreferrer"
        aria-label="Send personal email"
      >
        <div>
          <h2>Personal Email</h2>
          <p>For personal messages and general inquiries.</p>
        </div>
        <span className="arrow" aria-hidden="true">↗</span>
      </a>

      <section className="mobile-contact-section">
        <h2>Contact Me</h2>

        <a
          className="mobile-contact-card"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanush.d43715@gmail.com&su=Business%20%26%20Partnership%20Inquiry" target="_blank" rel="noreferrer"
        >
          <span className="mobile-contact-icon"><MailIcon /></span>
          <span>Business &amp; Partnership Inquiries</span>
        </a>

        <a
          className="mobile-contact-card"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=luffy43715@gmail.com&su=Personal%20Inquiry" target="_blank" rel="noreferrer"
        >
          <span className="mobile-contact-icon"><MailIcon /></span>
          <span>Personal Email</span>
        </a>
      </section>

      <footer>
        <SocialLinks footer />
        <h3>PHOENIXX FITNESS</h3>
        <p>TRAIN SMART • LIVE BETTER</p>
      </footer>
    </main>
  );
}

export default App;
