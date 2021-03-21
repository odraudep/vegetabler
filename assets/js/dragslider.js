const products = document.querySelector("section.products .products");

function dragSlider(element) {
  let
    pressed = false,
    startX,
    scrollLeft;

  element.addEventListener("mousedown", e => {
    pressed = true;

    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });

  element.addEventListener("mouseup", () => {
    pressed = false;
  });

  element.addEventListener("mouseleave", () => {
    pressed = false;
  });

  element.addEventListener("mousemove", e => {
    if (!pressed)
      return;

    e.preventDefault();

    const
      x = e.pageX - element.offsetLeft,
      step = x - startX;

    element.scrollLeft = scrollLeft - step;
  });
}

dragSlider(products);
