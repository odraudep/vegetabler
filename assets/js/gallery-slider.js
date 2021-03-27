(function() {
  const gallery = document.querySelectorAll(".gallery-slider");

  gallery.forEach(element => {
    const
      target = element.getAttribute("target"),
      section = document.querySelector(target),
      imgs = section.querySelectorAll(".img"),
      imgsContainer = element.querySelector(".imgs-container"),
      close = element.querySelector("#close"),
      next = element.querySelector("#next"),
      back = element.querySelector("#back");

    imgs.forEach(img => {
      const image = img.querySelector("img");

      img.addEventListener("click", () => {
        const imgsCopy = [];

        // Copy the imgs into a variable
        imgs.forEach(img => {
          const
            image = img.querySelector("img"),
            imgElement = document.createElement("img");

          imgElement.src = image.getAttribute("src");
          imgElement.alt = image.alt;
          imgElement.classList.add(image.classList.value);

          imgsCopy.push(imgElement);
        });

        // Filter the images
        const filter = section.parentElement.querySelector(".btns-group .actived").textContent.toLowerCase();

        if (filter == "all") {
          imgsCopy.forEach(item => {
            if (item.getAttribute("src") == image.getAttribute("src")) {
              item.classList.add("activedImg");
            }

            imgsContainer.appendChild(item);
          });
        } else {
          const filtered = imgsCopy.filter(item => item.classList.contains(filter));

          filtered.forEach(item => {
            if (item.getAttribute("src") == image.getAttribute("src")) {
              item.classList.add("activedImg");
            }

            imgsContainer.appendChild(item);
          });
        }

        element.classList.add("init");
      });
    });

    // Actions
    next.addEventListener("click", () => {
      actionSlider("go");
    });

    back.addEventListener("click", () => {
      actionSlider("prev");
    });

    close.addEventListener("click", () => {
      element.classList.remove("init");
      imgsContainer.textContent = '';
    });

    // Swiping
    let
      startX = '',
      x = '';

    imgsContainer.addEventListener("touchstart", e => {
      x = '';

      startX = e.touches[0].clientX;
    });

    imgsContainer.addEventListener("touchmove", e => {
      x = e.touches[0].clientX;
    });

    imgsContainer.addEventListener("touchend", () => {
      if (x == '')
        x = startX;

      const
        move = x - startX,
        base = 30;

      if (move < 0 - base) {
        next.click();
      } else if (move > 0 + base) {
        back.click();
      } else {
        return;
      }
    });

    function actionSlider(ac) {
      const imgActived = imgsContainer.querySelector("img.activedImg");

      imgActived.classList.remove("activedImg");

      if (ac == "go") {
        if (imgActived.nextElementSibling) {
          imgActived.nextElementSibling.classList.add("activedImg");
        } else {
          imgActived.parentElement.firstElementChild.classList.add("activedImg");
        }
      } else {
        if (imgActived.previousElementSibling) {
          imgActived.previousElementSibling.classList.add("activedImg");
        } else {
          imgActived.parentElement.lastElementChild.classList.add("activedImg");
        }
      }
    }
  });
})();
