// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        nav?.classList.remove("open");
      }
    });
  });

  // Fake waitlist form submission
  const form = document.getElementById("waitlist-form");
  const note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name") || "love";
      const focus = formData.get("focus");

      form.reset();

      if (note) {
        note.textContent = `Thank you, ${name}. You’re on the list. When this space goes live, we’ll email you about circles related to "${focus || "what you need right now"}".`;
      }

      alert(
        "You’re on the (demo) waitlist. In a real version, this would save your details securely. 💌"
      );
    });
  }

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
