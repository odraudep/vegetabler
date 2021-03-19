(function() {
  const
    navbar = document.querySelector("header.navbar"),
    toggler = document.querySelector(".toggler"),
    links = document.querySelectorAll("header.navbar .menu a");

  // Toggler event
  toggler.addEventListener("click", function() {
    const target = this.parentNode.querySelector(this.getAttribute("target"));

    this.toggleAttribute("open");
    target.classList.toggle("open");

    document.querySelector("html").classList.toggle("hide");
  });

  // Scroll for menu to be fixed on top
  addEventListener("scroll", fixed);

  function fixed() {
    const
      scroll = pageYOffset,
      hero = document.querySelector("section.hero"),
      heroHeight = Math.round(getComputedStyle(hero).height.slice(0, this.length - 2));

    if (scroll > heroHeight) {
      navbar.style.position = "sticky";
      navbar.style.top = 0;
      navbar.style.boxShadow = "0 1px 5px #00000030";
    } else if (scroll == 0) {
      navbar.removeAttribute("style");
    }
  }

  // Scroll to sections
  links.forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();

      changeActived(element);
    });
  });

  function changeActived(element) {
    const active = document.querySelector("header.navbar .menu a.active");

    active.classList.remove("active");
    element.classList.add("active");
  }
})();
