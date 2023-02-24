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