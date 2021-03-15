(function() {
  const toggler = document.querySelector(".toggler");

  toggler.addEventListener("click", function() {
    const target = this.parentNode.querySelector(this.getAttribute("target"));

    this.toggleAttribute("open");
    target.classList.toggle("open");

    document.querySelector("html").classList.toggle("hide");
  });
})();
