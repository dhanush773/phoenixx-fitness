import { useState } from "react";
import "./App.css";
import heroImage from "./assets/hero.png";
import AIDietCoach from "./AIDietCoach";

const DRIVE_RESOURCES_URL =
  "https://drive.google.com/drive/folders/1upmRJgiGUu64u8naD56UZ2KspDHEqRM8?usp=sharing";

/* =========================
   SOCIAL ICONS
========================= */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="4"
        fill="currentColor"
      />
      <path d="M10 8.5L16 12L10 15.5Z" fill="white" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 7L12 13L20 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   FITNESS CALCULATOR ICONS
========================= */

function FlameIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
    >
      <path
        d="M50 8C70 35 88 45 88 68C88 88 71 96 50 96C29 96 12 83 12 63C12 45 27 35 38 20C39 38 49 42 52 54C65 38 57 23 50 8Z"
        fill="currentColor"
      />
      <path
        d="M50 47C64 62 67 72 58 82C51 89 37 83 37 72C37 62 45 57 50 47Z"
        fill="white"
        opacity="0.85"
      />
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
      <path d="M24 34L28 84Q29 91 36 91H64Q71 91 72 84L76 34" />

      {/* Left Measurement Mark */}
      <path d="M27 42H38" strokeWidth="3" />

      {/* Right Highlight */}
      <path d="M68 45L65 72" strokeWidth="3" />
    </svg>
  );
}

function Vo2Icon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
    >
      <path
        d="M15 70A35 35 0 0 1 85 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M50 70L72 38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="70" r="7" fill="currentColor" />
      <path
        d="M20 82H80"
        stroke="currentColor"
        strokeWidth="3"
      />
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
      >
        VO2
      </text>
    </svg>
  );
}

function BarbellIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
    >
      <path
        d="M15 42V58M23 35V65M32 39V61M68 39V61M77 35V65M85 42V58"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M32 50H68"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StrengthIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
    >
      <path
        d="M15 85V60H35V85Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M40 85V40H60V85Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M65 85V18H85V85Z"
        fill="currentColor"
      />
      <path
        d="M15 35L38 20L55 27L84 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

function CreatineIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="neon-icon"
      aria-hidden="true"
    >
      {/* Main container */}
      <rect
        x="25"
        y="28"
        width="50"
        height="62"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Simple lid */}
      <rect
        x="25"
        y="10"
        width="50"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Simple lid grooves */}
      <line
        x1="34"
        y1="14"
        x2="34"
        y2="24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="43"
        y1="14"
        x2="43"
        y2="24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="14"
        x2="52"
        y2="24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="61"
        y1="14"
        x2="61"
        y2="24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Neck band */}
      <line
        x1="25"
        y1="34"
        x2="75"
        y2="34"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* Simple label */}
      <line
        x1="25"
        y1="43"
        x2="75"
        y2="43"
        stroke="currentColor"
        strokeWidth="2"
      />

      <text
        x="50"
        y="63"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        CREATINE
      </text>

      <line
        x1="25"
        y1="72"
        x2="75"
        y2="72"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Bottom base */}
      <rect
        x="22"
        y="88"
        width="56"
        height="7"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

/* =========================
   RESOURCE ICONS
========================= */

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="essential-svg"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 28H39L47 38H90V78Q90 84 84 84H16Q10 84 10 78Z" />
      <path d="M10 28V22Q10 16 16 16H36L44 26H84Q90 26 90 32V38" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="essential-svg"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Antenna */}
      <path d="M50 12V22" />
      <circle cx="50" cy="8" r="4" fill="currentColor" />

      {/* Head */}
      <rect
        x="18"
        y="22"
        width="64"
        height="48"
        rx="12"
      />

      {/* Eyes */}
      <circle cx="37" cy="44" r="5" fill="currentColor" />
      <circle cx="63" cy="44" r="5" fill="currentColor" />

      {/* Mouth */}
      <path d="M36 57Q50 64 64 57" />

      {/* Body */}
      <path d="M32 70V86" />
      <path d="M68 70V86" />
      <path d="M22 78H78" />
    </svg>
  );
}

/* =========================
   ESSENTIAL ICONS
========================= */

function BookIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="essential-svg"
      aria-hidden="true"
    >
      <path
        d="M12 18Q31 10 50 24Q69 10 88 18V82Q69 74 50 88Q31 74 12 82Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M50 24V88"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

function LiftingIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="essential-svg"
      aria-hidden="true"
    >
      <path
        d="M12 38V62M22 28V72M32 35V65M68 35V65M78 28V72M88 38V62"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M32 50H68"
        stroke="currentColor"
        strokeWidth="7"
      />
    </svg>
  );
}

function MealIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="essential-svg"
      aria-hidden="true"
    >
      <path
        d="M15 48Q20 30 38 34Q50 14 62 34Q80 30 85 48L80 73Q50 88 20 73Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M22 53H78"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M35 27Q38 17 48 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

/* =========================
   AMAZON ICON
========================= */

function AmazonIcon() {
  return (
    <div className="amazon-icon" aria-label="Amazon">
      <span className="amazon-letter">a</span>

      <svg
        className="amazon-smile"
        viewBox="0 0 40 12"
        aria-hidden="true"
      >
        <path
          d="M3 3C12 10 27 10 37 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 2L37 3L35 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* =========================
   CALCULATORS
========================= */

const calculators = [
  {
    icon: FlameIcon,
    title: "TDEE / CALORIE",
    subtitle: "CALCULATOR",
    description: "Find your maintenance and calorie goals.",
    color: "pink",
  },
  {
    icon: ShakerIcon,
    title: "PROTEIN",
    subtitle: "CALCULATOR",
    description: "Calculate your daily protein needs.",
    color: "blue",
  },
  {
    icon: BarbellIcon,
    title: "1-REP MAX",
    subtitle: "CALCULATOR",
    description: "Find your true strength potential.",
    color: "pink",
  },
  {
    icon: CreatineIcon,
    title: "CREATINE",
    subtitle: "CALCULATOR",
    description: "Explore creatine dosage guidance.",
    color: "purple",
  },
];

/* =========================
   FAVORITES & ESSENTIALS
========================= */

const essentials = [
  {
    title: "My Favorite Books",
    label: "BOOK LIST",
    description:
      "Books that have helped my mindset, discipline and lifestyle.",
    color: "purple",
    icon: BookIcon,
    url: "https://amzn.to/4xErZYJ",
  },
  {
    title: "Lifting Accessories",
    label: "LIFTING ESSENTIALS",
    description:
      "Belts, straps, wraps and more. Lift better, train smarter.",
    color: "blue",
    icon: LiftingIcon,
    url: "https://amzn.to/4yJVBoC",
  },
  {
    title: "Meal Prep Essentials",
    label: "MEAL PREP ESSENTIALS",
    description:
      "My go-to kitchen tools, containers and meal prep must-haves.",
    color: "pink",
    icon: MealIcon,
    url: "https://amzn.to/3VJIhlR",
  },
];

/* =========================
   SOCIAL LINKS
========================= */

function SocialLinks({ footer = false }) {
  return (
    <div
      className={`socials ${
        footer ? "footer-socials" : "hero-socials"
      }`}
    >
      <a
        href="https://www.instagram.com/phoenixx._fit?stkn=dGZ2dndvNzBxeWkx"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>

      <a
        href="https://youtube.com/@phoenixx._fit"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >
        <YouTubeIcon />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanush.d43715@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
      >
        <MailIcon />
      </a>
    </div>
  );
}

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <a
      href="#"
      className="logo"
      aria-label="Phoenixx Fitness home"
    >
      PHOENIXX
      <span>FITNESS</span>
    </a>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  const [coachOpen, setCoachOpen] = useState(false);

  return (
    <main className="app">

      {/* =========================
          HEADER
      ========================= */}

      <header className="header">
        <Logo />
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-text">
          <p className="eyebrow">
            TRAIN • LEARN • IMPROVE
          </p>

          <h1>
            DISCIPLINE
            <br />
            BUILDS A
            <br />
            BETTER <span>YOU.</span>
          </h1>

          <p className="hero-description">
            Sharing my fitness journey, practical knowledge and
            resources to help you build a stronger, healthier life.
          </p>

          <SocialLinks />
        </div>

        <div className="hero-visual">
          <img
            src={heroImage}
            alt="Phoenixx Fitness athlete"
            className="hero-image"
          />
        </div>

        <div className="mobile-logo">
          <Logo />
        </div>

      </section>
      {/* =========================
          FREE RESOURCES
      ========================= */}

      <section className="section resources-section">

        <div className="section-heading">
          <h2>FREE RESOURCES</h2>

          <p>
            Free tools and resources to help you build your
            fitness journey.
          </p>
        </div>

        <div className="resources-grid">

          {/* Google Drive */}
          <a
            className="resource-card drive-card"
            href={DRIVE_RESOURCES_URL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="resource-icon">
              <FolderIcon />
            </div>

            <div className="resource-content">
              <span className="resource-label">
                FREE DOWNLOADS
              </span>

              <h3>
                Diet &amp; Fitness Resources
              </h3>

              <p>
                Access my free diet, fitness and educational
                resources.
              </p>
            </div>

            <span className="resource-arrow">↗</span>
          </a>

          {/* AI Diet Coach */}
          <button
            type="button"
            className="resource-card ai-card"
            onClick={() => setCoachOpen(true)}
          >
            <div className="resource-icon">
              <RobotIcon />
            </div>

            <div className="resource-content">
              <span className="resource-label">
                PHOENIXX AI
              </span>

              <h3>
                AI Diet Plan Coach
              </h3>

              <p>
                Create your personalized
                AI prompt.
              </p>
            </div>

            <span className="resource-arrow">↗</span>
          </button>

        </div>
      </section>

      {/* =========================
          FITNESS CALCULATORS
      ========================= */}

      <section className="section calculators-section">

        <div className="section-heading">
          <h2>FREE FITNESS CALCULATORS</h2>

          <p>
            Practical tools to help you train, eat and improve
            with real numbers.
          </p>
        </div>

        <div className="calculator-grid">

          {calculators.map((item) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                className={`calculator-card ${item.color}`}
                key={item.title}
                onClick={() =>
                  alert(`${item.title} coming soon`)
                }
              >
                <div className="card-glow" />

                <div className="card-icon">
                  <Icon />
                </div>

                <div className="card-content">
                  <h3>
                    {item.title}
                    <br />
                    {item.subtitle}
                  </h3>

                  <p>{item.description}</p>
                </div>

                <span className="arrow">↗</span>
              </button>
            );
          })}

        </div>
      </section>

      {/* =========================
          FAVORITES & ESSENTIALS
      ========================= */}

      <section className="section essentials-section">

        <div className="section-heading">
          <h2>
            FAVORITES &amp; ESSENTIALS
          </h2>

          <p>
            Tools, books and foods I personally use and recommend.
          </p>
        </div>

        <div className="essentials-list">

          {essentials.map((item) => {
            const Icon = item.icon;

            return (
              <a
                className={`essential-card ${item.color}`}
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >

                <div className="essential-icon">
                  <Icon />
                  <span>{item.label}</span>
                </div>

                <div className="essential-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="essential-actions">

                  <AmazonIcon />

                  <span
                    className="essential-arrow"
                    aria-hidden="true"
                  >
                    ›
                  </span>

                </div>

              </a>
            );
          })}

        </div>
      </section>

      {/* =========================
          BUSINESS CONTACT
      ========================= */}

      <a
        className="business-card"
        href="mailto:dhanush.d43715@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Send business inquiry by email"
      >
        <div>
          <h2>
            Business &amp; Partnership Inquiries
          </h2>

          <p>
            For brand collaborations and opportunities.
          </p>
        </div>

        <span
          className="arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>

      {/* =========================
          PERSONAL EMAIL
      ========================= */}

      <a
        className="business-card personal-business-card"
        href="mailto:luffy43715@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Send personal email"
      >
        <div>
          <h2>Personal Email</h2>

          <p>
            For personal messages and general inquiries.
          </p>
        </div>

        <span
          className="arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>

      {/* =========================
          MOBILE CONTACT
      ========================= */}

      <section className="mobile-contact-section">

        <h2>Contact Me</h2>

        <a
          className="mobile-contact-card"
          href="mailto:dhanush.d43715@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="mobile-contact-icon">
            <MailIcon />
          </span>

          <span>
            Business &amp; Partnership Inquiries
          </span>
        </a>

        <a
          className="mobile-contact-card"
          href="mailto:luffy43715@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="mobile-contact-icon">
            <MailIcon />
          </span>

          <span>
            Personal Email
          </span>
        </a>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <SocialLinks footer />

        <h3>PHOENIXX FITNESS</h3>

        <p>
          TRAIN SMART • LIVE BETTER
        </p>

      </footer>

      {/* =========================
          AI DIET COACH MODAL
      ========================= */}

      {coachOpen && (
        <AIDietCoach
          onClose={() => setCoachOpen(false)}
        />
      )}

    </main>
  );
}

export default App;