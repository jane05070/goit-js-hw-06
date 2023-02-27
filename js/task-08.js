// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const passwordInput = formEl.elements.password;
    const emailInput = formEl.elements.email;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Заповніть всі поля');
    }
    else {
       const formData = {
            email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData);

        formEl.reset();
    }
});
