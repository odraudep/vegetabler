(function() {
  const
    section = document.querySelector("section.gallery"),
    btns = section.querySelectorAll("button");

  btns.forEach(element => {
    element.addEventListener("click", () => {
      const btn_actived = section.querySelector("button.actived");

      // Button actived class manipulation
      btn_actived.classList.remove("actived");
      element.classList.add("actived");

      // Gallery filter
    });
  });
})();
