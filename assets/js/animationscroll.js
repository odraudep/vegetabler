(function() {
  const target = document.querySelectorAll("[animate]");

  (function scrollAnimate() {
    const
      scroll = pageYOffset,
      viewY = innerHeight * .75;

    target.forEach(element => {
      const offsetTop = element.getBoundingClientRect().top + scrollY;

      element.parentElement.style.overflow = "hidden";

      if (scroll + viewY > offsetTop) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }

    });

    addEventListener("scroll", scrollAnimate);
  })();
})();
