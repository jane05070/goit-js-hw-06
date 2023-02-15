const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
  const categoryTitle = element.firstElementChild.textContent;
  const listElements = element.lastElementChild.children;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${listElements.length}`);
});