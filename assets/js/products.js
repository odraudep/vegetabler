(function () {
  const
    container = document.querySelector(".products-container"),
    veg_selected_container = container.querySelector(".product-item .img-container .img"),
    vegs_container = container.querySelector(".products-info ul.products");

  // Set the items
  const vegetables = [
    {
      _id: "1",
      src: "assets/img/vegetable1.jpg",
      name: "Tomato",
      price: 5
    },
    {
      _id: "2",
      src: "assets/img/vegetable2.jpg",
      name: "Brocolli",
      price: 3
    },
    {
      _id: "3",
      src: "assets/img/vegetable3.jpg",
      name: "Bell Pepper",
      price: 2
    },
    {
      _id: "4",
      src: "assets/img/vegetable4.jpg",
      name: "Chestnut",
      price: 5
    },
    {
      _id: "5",
      src: "assets/img/vegetable5.jpg",
      name: "Garlic",
      price: 4
    }
  ];

  // Set the items in DOM
  vegetables.forEach((item, index) => {
    const
      li = document.createElement("li"),
      img = document.createElement("img");

    img.src = item.src;
    img.alt = item.name;
    img.setAttribute("_id", item._id);

    // Set the 1st item to the selected item
    if (index == 0) {
      veg_selected_container.appendChild(img);
      return;
    }

    li.appendChild(img);

    vegs_container.appendChild(li);
  });

  // Make changes onclick
  const vegs = vegs_container.querySelectorAll("li");

  vegs.forEach(element => {
    element.addEventListener("click", () => {
      const
        clickElement = element.querySelector("img"),
        vegSelected = container.querySelector(".product-item .img-container .img"),
        vegSelectedImg = vegSelected.querySelector("img");

      element.replaceChild(vegSelectedImg, clickElement);
      vegSelected.appendChild(clickElement);

      updateInf();
    });
  });

  function updateInf() {
    const
      txt = container.querySelector(".products-info .product-info"),
      txt_data = {
        name: txt.querySelector("span.name"),
        price: txt.querySelector("span.price span")
      },
      vegSelected = container.querySelector(".product-item .img-container .img img"),
      veg = vegetables.filter(item => item._id == vegSelected.getAttribute("_id"));

    txt_data.name.innerHTML = veg[0].name;
    txt_data.price.innerHTML = veg[0].price;
  }

  updateInf();
})();
