
"use client";

import "./WebsiteAssembly.css";

export default function WebsitePreview() {
  return (
    <div
      className="assembly-scene"
      role="img"
      aria-label="Animation of a business website assembling from its navigation, hero, and content sections"
    >
      <div className="assembly-glow" aria-hidden="true" />

      <div className="assembly-browser">
        {/* Browser frame */}
        <div className="assembly-browser-bar">
          <div className="assembly-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="assembly-address">
            valis.tech
          </div>
        </div>

        {/* Website navigation */}
        <nav className="assembly-nav">
          <div className="assembly-logo">
            <span className="assembly-logo-mark">V</span>
            <span>VALIS</span>
          </div>

          <div className="assembly-nav-links">
            <span>Home</span>
            <span>Services</span>
            <span>About</span>
          </div>

          <div className="assembly-nav-cta">
            Let's talk
          </div>
        </nav>

        {/* Website hero */}
        <section className="assembly-hero">
          <div className="assembly-hero-copy">
            <div className="assembly-eyebrow">
              AFRICAN ADVANCEMENT
            </div>

            <div className="assembly-heading">
              <span>Ideas into</span>
              <span className="assembly-blue">
                digital reality.
              </span>
            </div>

            <div className="assembly-lines">
              <span />
              <span />
              <span />
            </div>

            <div className="assembly-hero-button">
              Explore our work <span>↗</span>
            </div>
          </div>

          {/* Abstract website image, drawn with CSS */}
          <div className="assembly-art">
            <div className="assembly-art-orbit orbit-one" />
            <div className="assembly-art-orbit orbit-two" />
            <div className="assembly-art-core">
              <span>V</span>
            </div>
            <div className="assembly-art-chip chip-one">WEB</div>
            <div className="assembly-art-chip chip-two">01</div>
            <div className="assembly-art-grid" />
          </div>
        </section>

        {/* Content cards */}
        <section className="assembly-content">
          <div className="assembly-section-heading">
            <span>BUILT FOR WHAT'S NEXT</span>
            <i />
          </div>

          <div className="assembly-cards">
            <article className="assembly-card">
              <div className="assembly-card-icon icon-blue">
                ↗
              </div>
              <div className="assembly-card-line long" />
              <div className="assembly-card-line" />
            </article>

            <article className="assembly-card">
              <div className="assembly-card-icon icon-green">
                ◇
              </div>
              <div className="assembly-card-line long" />
              <div className="assembly-card-line" />
            </article>

            <article className="assembly-card">
              <div className="assembly-card-icon icon-purple">
                ⌘
              </div>
              <div className="assembly-card-line long" />
              <div className="assembly-card-line" />
            </article>
          </div>
        </section>

        {/* Footer strip */}
        <footer className="assembly-footer">
          <span>Built for growth.</span>
          <span className="assembly-footer-dot" />
          <span>Designed for people.</span>
        </footer>
      </div>

      {/* Floating completion indicator */}
      <div className="assembly-status">
        <span className="assembly-status-dot" />
        <span>Website assembled</span>
        <span className="assembly-check">✓</span>
      </div>
    </div>
  );
}
