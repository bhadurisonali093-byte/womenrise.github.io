/* ==============
   Base styles
   ============== */

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --bg: #05020a;
  --bg-alt: #0d0716;
  --card: #140c23;
  --accent: #f86fb6;
  --accent-soft: rgba(248, 111, 182, 0.16);
  --accent-strong: #ff9bd5;
  --text: #f7f2ff;
  --muted: #b9a9d8;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.55);
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 999px;
  --transition-fast: 180ms ease-out;
  --max-width: 1100px;
}

html,
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
  background: radial-gradient(circle at top, #2c1345 0, #05020a 42%, #020006 100%);
  color: var(--text);
  line-height: 1.6;
}

/* Layout helpers */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 4.5rem 0;
}

.section.alt {
  background: radial-gradient(circle at top left, #231137 0, #05020a 55%);
}

/* ==============
   Typography
   ============== */

h1,
h2,
h3 {
  margin: 0 0 0.75rem;
  font-weight: 650;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: 0.02em;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
}

h3 {
  font-size: 1.15rem;
}

p {
  margin: 0 0 0.8rem;
  color: var(--muted);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: var(--accent-strong);
  font-weight: 600;
}

/* ==============
   Buttons
   ============== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast),
    background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
}

.btn.primary {
  background: linear-gradient(120deg, #f86fb6, #ffba68);
  color: #190616;
  box-shadow: 0 14px 28px rgba(248, 111, 182, 0.45);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 36px rgba(248, 111, 182, 0.6);
}

.btn.ghost {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text);
}

.btn.ghost:hover {
  border-color: var(--accent-soft);
  background: rgba(255, 255, 255, 0.03);
}

.btn.full-width {
  width: 100%;
}

/* ==============
   Navbar
   ============== */

.site-header {
  position: relative;
  padding-top: 0.75rem;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background: linear-gradient(to right, rgba(5, 2, 10, 0.93), rgba(12, 3, 24, 0.93));
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.6);
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
}

.logo-icon {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0, #ffe2fd 0, #f86fb6 40%, #7a3cff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.08);
}

.logo-text {
  letter-spacing: 0.06em;
  font-size: 0.95rem;
  text-transform: uppercase;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav-links a:hover {
  color: var(--accent-strong);
}

/* Mobile nav button */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
}

.nav-toggle-bar {
  width: 20px;
  height: 2px;
  background: var(--text);
  margin: 3px 0;
  border-radius: 999px;
}

/* ==============
   Hero
   ============== */

.hero {
  padding: 4.5rem 0 3.5rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-subtitle {
  max-width: 30rem;
}

.hero-actions {
  margin: 1.4rem 0 1rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.hero-badges span {
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.3rem 0.7rem;
  background: rgba(10, 4, 22, 0.85);
  color: var(--muted);
}

.hero-highlight {
  background: radial-gradient(circle at top, #2a1041 0, #140820 55%);
  border-radius: var(--radius-xl);
  padding: 1.6rem 1.5rem;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-highlight h3 {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.hero-highlight ul {
  margin: 0 0 0.8rem 1.1rem;
  padding: 0;
  color: var(--muted);
}

.hero-quote {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--accent-strong);
}

/* ==============
   Grid & Cards
   ============== */

.grid {
  display: grid;
  gap: 1.7rem;
  margin-top: 2rem;
}

.grid.two {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.grid.three {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
  background: linear-gradient(150deg, rgba(19, 8, 35, 0.96), rgba(8, 2, 16, 0.96));
  border-radius: var(--radius-lg);
  padding: 1.4rem 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.55);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(248, 111, 182, 0.22), transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.card:hover::before {
  opacity: 1;
}

.card h3 {
  margin-bottom: 0.3rem;
}

.card ul {
  margin: 0.5rem 0 0 1.1rem;
  padding: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

/* Tags */

.tag-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.6rem 0 0;
  padding: 0;
}

.tag-list li {
  border-radius: var(--radius-pill);
  padding: 0.22rem 0.6rem;
  background: rgba(248, 111, 182, 0.12);
  color: var(--accent-strong);
  font-size: 0.75rem;
}

/* ==============
   Stories
   ============== */

.story-card {
  min-height: 0;
}

.story-card .meta {
  font-size: 0.8rem;
  color: var(--accent-strong);
}

/* ==============
   Books Section
   ============== */

.books-controls {
  margin-top: 1.8rem;
  margin-bottom: 1rem;
}

#book-search {
  width: 100%;
  padding: 0.65rem 0.8rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-subtle);
  background: rgba(6, 2, 14, 0.92);
  color: var(--text);
  font-size: 0.9rem;
  outline: none;
}

#book-search::placeholder {
  color: rgba(185, 169, 216, 0.7);
}

#book-search:focus {
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 1px rgba(248, 111, 182, 0.25);
}

.books-note {
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.books-note code {
  font-size: 0.8em;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.08rem 0.3rem;
  border-radius: 4px;
}

/* Book cards */

.book-card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.book-meta {
  font-size: 0.8rem;
  color: var(--muted);
}

.book-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.3rem;
}

.book-tag {
  font-size: 0.75rem;
  border-radius: var(--radius-pill);
  padding: 0.2rem 0.55rem;
  background: rgba(248, 111, 182, 0.12);
  color: var(--accent-strong);
}

.book-theme {
  font-size: 0.76rem;
  padding: 0.18rem 0.5rem;
  border-radius: var(--radius-pill);
  background: rgba(111, 144, 248, 0.18);
  color: #c2d0ff;
}

.book-link {
  font-size: 0.8rem;
  text-decoration: underline;
  color: var(--accent-strong);
}

/* ==============
   Events / How / Join
   ============== */

.meta {
  font-size: 0.82rem;
  color: var(--muted);
}

.note {
  margin-top: 1.3rem;
  font-size: 0.86rem;
  color: var(--muted);
}

.steps {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  gap: 1.4rem;
}

.steps li {
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(255, 255, 255, 0.16);
  padding: 1rem 1.1rem;
  background: rgba(10, 4, 22, 0.85);
}

.join-container {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
  gap: 2.2rem;
  align-items: flex-start;
}

.join-form label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 0.7rem;
}

.join-form input,
.join-form select,
.join-form textarea {
  margin-top: 0.25rem;
  width: 100%;
  padding: 0.6rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  background: rgba(5, 2, 10, 0.95);
  color: var(--text);
  font-size: 0.9rem;
  outline: none;
}

.join-form input:focus,
.join-form select:focus,
.join-form textarea:focus {
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 1px rgba(248, 111, 182, 0.2);
}

.required {
  color: var(--accent-strong);
  margin-left: 2px;
}

.tiny-note {
  font-size: 0.75rem;
  color: var(--muted);
  margin-top: 0.7rem;
}

.form-status {
  font-size: 0.8rem;
  margin-top: 0.7rem;
}

/* ==============
   Footer
   ============== */

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2.2rem 0 2.4rem;
  background: radial-gradient(circle at top, #1b0d2d 0, #05020a 60%);
}

.footer-content {
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.9rem 0;
}

.footer-links a {
  color: var(--muted);
  font-size: 0.8rem;
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--accent-strong);
}

.footer-note {
  font-size: 0.8rem;
}

.footer-copy {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  color: rgba(185, 169, 216, 0.75);
}

/* ==============
   Responsive
   ============== */

@media (max-width: 800px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .join-container {
    grid-template-columns: 1fr;
  }

  .navbar {
    padding-inline: 1rem;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    background: rgba(4, 0, 10, 0.98);
    padding: 0.7rem 1.25rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    max-height: 0;
    overflow: hidden;
    transition: max-height 180ms ease-out;
  }

  .nav-links.open {
    max-height: 260px;
  }
}

@media (max-width: 500px) {
  .section {
    padding: 3.5rem 0;
  }

  .hero {
    padding-top: 3.2rem;
  }

  .card {
    padding: 1.2rem 1.05rem;
  }
}

