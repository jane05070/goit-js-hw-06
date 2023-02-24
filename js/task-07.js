const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

function hendlerInputChange(event) {
    output.style.fontSize = `${input.value}px`;
}

input.addEventListener('input', hendlerInputChange);