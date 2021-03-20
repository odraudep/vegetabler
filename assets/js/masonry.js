(function() {
  function resizeGridItem(item) {
    const
      grid = item.parentElement,
      rowHeight = parseInt(getComputedStyle(grid).gridAutoRows),
      rowGap = parseInt(getComputedStyle(grid).rowGap),
      rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllGridItems() {
    const allItems = document.querySelectorAll("section.gallery .grid img");

    allItems.forEach(element => {
      resizeGridItem(element);
    });
  }

  resizeAllGridItems();
  addEventListener("resize", resizeAllGridItems);
})();
