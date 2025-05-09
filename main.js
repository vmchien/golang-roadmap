
document.addEventListener("DOMContentLoaded", function () {
  const tocLinks = document.querySelectorAll("nav a");
  const sections = Array.from(document.querySelectorAll("main h1, main h2"));

  function clearActive() {
    tocLinks.forEach((link) => link.classList.remove("active"));
  }

  function setActive(id) {
    clearActive();
    const activeLink = document.querySelector('nav a[href="#' + id + '"]');
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach((section) => {
      const offset = section.offsetTop - 100;
      if (window.scrollY >= offset) {
        currentId = section.id;
      }
    });
    if (currentId) {
      setActive(currentId);
    }
  });

  // Optional: highlight on click immediately
  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").substring(1);
      setActive(id);
    });
  });
});
