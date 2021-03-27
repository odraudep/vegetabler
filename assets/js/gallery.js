(function () {
  const
    section = document.querySelector("section.gallery"),
    gallery_container = section.querySelector(".grid"),
    btns = section.querySelectorAll(".btns-group button"),
    imgs = [
      {
        src: "assets/img/person1.jpg",
        alt: "Person 1",
        class: "workers"
      },
      {
        src: "assets/img/person2.jpg",
        alt: "Person 2",
        class: "workers"
      },
      {
        src: "assets/img/person3.jpg",
        alt: "Person 3",
        class: "workers"
      },
      {
        src: "assets/img/person4.jpg",
        alt: "Person 4",
        class: "workers"
      },
      {
        src: "assets/img/place1.jpg",
        alt: "Place 1",
        class: "place"
      },
      {
        src: "assets/img/place2.jpg",
        alt: "Place 2",
        class: "place"
      },
      {
        src: "assets/img/place3.jpg",
        alt: "Place 3",
        class: "place"
      },
      {
        src: "assets/img/place4.jpg",
        alt: "Place 4",
        class: "place"
      },
      {
        src: "assets/img/place5.jpg",
        alt: "Place 5",
        class: "place"
      },
      {
        src: "assets/img/place6.jpg",
        alt: "Place 6",
        class: "place"
      },
      {
        src: "assets/img/place7.jpg",
        alt: "Place 7",
        class: "place"
      },
      {
        src: "assets/img/place8.jpg",
        alt: "Place 8",
        class: "place"
      },
      {
        src: "assets/img/place9.jpg",
        alt: "Place 9",
        class: "place"
      },
      {
        src: "assets/img/place10.jpg",
        alt: "Place 10",
        class: "place"
      }
    ];

  // Add imgs to gallery dynamically
  imgs.forEach(data => {
    const
      div = document.createElement("div"),
      img = document.createElement("img");

    div.classList.add("img");

    img.src = data.src;
    img.alt = data.alt;
    img.classList.add(data.class);

    div.appendChild(img);

    gallery_container.appendChild(div);
  });

  // Button onclick
  btns.forEach(element => {
    element.addEventListener("click", () => {
      const
        btn_actived = section.querySelector("button.actived"),
        images = gallery_container.querySelectorAll(".img img"),
        name = element.innerText.toLowerCase();

      // Button actived class manipulation
      btn_actived.classList.remove("actived");
      element.classList.add("actived");

      // Gallery filter
      images.forEach(img => {
        const parent = img.parentElement;

        parent.classList.remove("hide");
        parent.classList.add("show");

        if (name == "all")
        return;

        if (img.classList.contains(name))
        return;

        parent.classList.remove("show");
        parent.classList.add("hide");
      });
    });
  });
})();
