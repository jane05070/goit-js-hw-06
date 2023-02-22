// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.




const counterValue = {
  value: 0,
  onIncrementBtnClick() {
    this.value += 1;
  },
  onDecrementBtnClick() {
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const changedValue = document.querySelector('#value');

incrementBtn.addEventListener('click', function () {
  counterValue.onIncrementBtnClick();
  changedValue.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', function () {
  counterValue.onDecrementBtnClick();
  changedValue.textContent = counterValue.value;
});

