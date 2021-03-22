function resizeMasonryItem(item) {
  var grid = document.querySelector('section.gallery .grid'),
    rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap')),
    rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  var rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllMasonryItems() {
  var allItems = document.querySelectorAll('section.gallery .grid img');

  allItems.forEach(element => {
    resizeMasonryItem(element);
  });
}

var masonryEvents = ['load', 'resize'];
masonryEvents.forEach(function (event) {
  addEventListener(event, resizeAllMasonryItems);
});

