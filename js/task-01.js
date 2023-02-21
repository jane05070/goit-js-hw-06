// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
  const categoryTitle = element.firstElementChild.textContent;
  const listElements = element.lastElementChild.children;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${listElements.length}`);
});