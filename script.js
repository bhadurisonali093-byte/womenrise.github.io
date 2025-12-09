// Smooth scrolling, mobile nav toggle, fake form submission,
// and dynamic rendering + search for the Books section.

document.addEventListener("DOMContentLoaded", () => {
  /* ===== Smooth scroll for internal links ===== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ===== Mobile nav toggle ===== */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  /* ===== Fake form submission (waitlist) ===== */
  const form = document.getElementById("waitlistForm");
  const formMessage = document.getElementById("formMessage");

  if (form && formMessage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();

      formMessage.textContent =
        (name ? `Thank you, ${name}. ` : "Thank you. ") +
        "You’re on the waitlist. This is a demo form — backend will be added later.";
      form.reset();
    });
  }

  /* ===== Books, tools & learnings ===== */
  const books = [
    {
      title: "The Body Is Not an Apology",
      author: "Sonya Renee Taylor",
      theme: "Self-worth & body liberation",
      tags: ["self-worth", "healing"],
      note: "Radical self-love and body acceptance for women who were taught to shrink.",
      link: "https://sonyareneetaylor.com/"
    },
    {
      title: "Untamed",
      author: "Glennon Doyle",
      theme: "Unlearning ‘good girl’ conditioning",
      tags: ["self-worth", "feminism", "relationships"],
      note: "Stories and tools to stop abandoning yourself for approval.",
      link: "https://www.glennondoyle.com/untamed"
    },
    {
      title: "Invisible Women",
      author: "Caroline Criado Perez",
      theme: "Patriarchy in data & systems",
      tags: ["feminism"],
      note: "Shows how the world is literally not designed around women’s lives & bodies.",
      link: "https://carolinecriadoperez.com/book/invisible-women/"
    },
    {
      title: "We Should All Be Feminists",
      author: "Chimamanda Ngozi Adichie",
      theme: "Feminism for everyday life",
      tags: ["feminism"],
      note: "Short, powerful essay to anchor why this community matters.",
      link: "https://www.goodreads.com/book/show/22738563-we-should-all-be-feminists"
    },
    {
      title: "The Wisest One in the Room",
      author: "Thomas Gilovich & Lee Ross",
      theme: "Human behaviour & decision making",
      tags: ["healing", "relationships"],
      note: "Psychology tools to understand people, bias and conflict with more compassion.",
      link: "https://global.oup.com/academic/product/the-wisest-one-in-the-room-9781451677546"
    },
    {
      title: "You’re Not Broke, You’re Pre-Rich",
      author: "Emilie Bellet",
      theme: "Money basics for women",
      tags: ["money"],
      note: "Practical money tools, investing basics and mindset shift for financial independence.",
      link: "https://www.goodreads.com/book/show/43863394-you-re-not-broke-you-re-pre-rich"
    },
    {
      title: "Set Boundaries, Find Peace",
      author: "Nedra Glover Tawwab",
      theme: "Boundaries with family, partners & work",
      tags: ["self-worth", "relationships"],
      note: "Scripts and exercises to stop over-giving and start protecting your energy.",
      link: "https://www.nedratawwab.com/set-boundaries-find-peace"
    }
  ];

  const booksGrid = document.getElementById("booksGrid");
  const searchInput = document.getElementById("bookSearch");
  const tagFilter = document.getElementById("bookTagFilter");

  function renderBooks(list) {
    if (!booksGrid) return;

    if (!list || list.length === 0) {
      booksGrid.innerHTML =
        '<p class="note">No matches yet. Try a different word like <em>money</em>, <em>boundaries</em> or <em>healing</em>.</p>';
      return;
    }

    booksGrid.innerHTML = list
      .map((book) => {
        const tagsHtml = (book.tags || [])
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");

        const linkHtml = book.link
          ? `<a class="book-link" href="${book.link}" target="_blank" rel="noopener noreferrer">Learn more ↗</a>`
          : "";

        return `
          <article class="card">
            <h3>${book.title}</h3>
            <p class="meta">${book.author}</p>
            <p>${book.theme}</p>
            <p class="note">${book.note}</p>
            <div class="book-tags">${tagsHtml}</div>
            ${linkHtml}
          </article>
        `;
      })
      .join("");
  }

  function filterBooks() {
    const term = (searchInput?.value || "").toLowerCase();
    const tag = tagFilter?.value || "";

    const filtered = books.filter((book) => {
      const text =
        `${book.title} ${book.author} ${book.theme} ${book.note}`.toLowerCase();

      const matchesTerm = term ? text.includes(term) : true;
      const matchesTag = tag
        ? (book.tags || []).includes(tag)
        : true;

      return matchesTerm && matchesTag;
    });

    renderBooks(filtered);
  }

  if (booksGrid) {
    renderBooks(books);
  }
  if (searchInput) searchInput.addEventListener("input", filterBooks);
  if (tagFilter) tagFilter.addEventListener("change", filterBooks);
});


