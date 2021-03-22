(function () {
  const
    navbar = document.querySelector("header.navbar"),
    navHeight = navbar.getBoundingClientRect().height,
    toggler = document.querySelector(".toggler"),
    links = document.querySelectorAll("header.navbar .menu a");

  // Toggler event
  toggler.addEventListener("click", function () {
    const target = this.parentNode.querySelector(this.getAttribute("target"));

    this.toggleAttribute("open");
    target.classList.toggle("open");

    document.querySelector("html").classList.toggle("hide");
  });

  // Scroll Event
  addEventListener("scroll", () => {
    fixed();
    changeActive();
  });

  function fixed() {
    const
      scroll = pageYOffset,
      hero = document.querySelector("section.hero"),
      heroHeight = Math.round(hero.getBoundingClientRect().height),
      viewY = innerHeight * .25;

    if (scroll > heroHeight - viewY) {
      navbar.classList.add("fixed");
    } else if (scroll == 0) {
      navbar.classList.remove("fixed");
    }
  }

  function changeActive() {
    const
      scroll = pageYOffset,
      links = document.querySelectorAll("header.navbar .menu a");

    links.forEach(element => {
      const
        id = element.getAttribute("href"),
        section = document.querySelector(id);

      if (scroll > section.offsetTop - navHeight - 1) {
        const lastAc = element.parentElement.parentElement.querySelector(".active");

        lastAc.classList.remove("active");
        element.classList.add("active");
      }
    });
  }

  // Scroll to sections
  links.forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();

      scrollToSection(element);
    });
  });

  function scrollToSection(element) {
    const
      id = element.getAttribute("href"),
      target = document.querySelector(id);

    if (toggler.hasAttribute("open"))
      toggler.click();

    scrollTo({
      left: 0,
      top: target.offsetTop - navHeight,
      behavior: "smooth"
    });
  }
})();
