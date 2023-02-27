// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const formElement = document.querySelector('#validation-input');

formElement.addEventListener('blur', (event) => {
    const target = event.target;
    const length = target.getAttribute('data-length');

    if (target.value.length === Number(formElement.dataset.length)){
        target.classList.add('valid');
        target.classList.remove('invalid');
    }
    else {
            target.classList.remove('valid'); 
            target.classList.add('invalid')
    };
        
    
})