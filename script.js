// State Line Drainage Co. — minimal site script

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var id = this.getAttribute("href");
    if (id.length > 1) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Form: prevent double-submit, basic confirmation
var form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", function () {
    var btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }
  });
}

/*
  HOSTING NOTES (see README.md):
  - Netlify Forms: works automatically with the data-netlify attribute already in index.html.
  - Formspree: set <form action="https://formspree.io/f/XXXX"> and remove data-netlify.
  - No backend at all: the mailto link under the form always works as a fallback.
*/
