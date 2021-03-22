(function() {
  const
    section = document.querySelector("section.gallery"),
    gallery_container = section.querySelector(".grid"),
    btns = section.querySelectorAll("button"),
    imgs = [
      {
        src: "assets/img/person1.jpg",
        alt: "Person 1"
      },
      {
        src: "assets/img/person2.jpg",
        alt: "Person 2"
      },
      {
        src: "assets/img/person3.jpg",
        alt: "Person 3"
      },
      {
        src: "assets/img/person4.jpg",
        alt: "Person 4"
      },
      {
        src: "assets/img/place1.jpg",
        alt: "Place 1"
      },
      {
        src: "assets/img/place2.jpg",
        alt: "Place 2"
      },
      {
        src: "assets/img/place3.jpg",
        alt: "Place 3"
      },
      {
        src: "assets/img/place4.jpg",
        alt: "Place 4"
      },
      {
        src: "assets/img/place5.jpg",
        alt: "Place 5"
      },
      {
        src: "assets/img/place6.jpg",
        alt: "Place 6"
      },
      {
        src: "assets/img/place7.jpg",
        alt: "Place 7"
      },
      {
        src: "assets/img/place8.jpg",
        alt: "Place 8"
      },
      {
        src: "assets/img/place9.jpg",
        alt: "Place 9"
      },
      {
        src: "assets/img/place10.jpg",
        alt: "Place 10"
      }
    ];

  // Button onclick
  btns.forEach(element => {
    element.addEventListener("click", () => {
      const btn_actived = section.querySelector("button.actived");

      // Button actived class manipulation
      btn_actived.classList.remove("actived");
      element.classList.add("actived");

      // Gallery filter
    });
  });

  // Add imgs to gallery dynamically
  imgs.forEach(data => {
    const img = document.createElement("img");

    img.src = data.src;
    img.alt = data.alt;

    gallery_container.appendChild(img);
  });
})();
