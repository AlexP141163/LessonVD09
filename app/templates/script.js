document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
    let squares = Array.from(container.children);
    shuffleArray(squares);
    container.innerHTML = ''; // Очищаем контейнер

    squares.forEach(square => {
        container.appendChild(square); // Добавляем каждый квадратик обратно в контейнер
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Перестановка элементов массива
    }
}


let container= document.querySelector('.container');
let previousElement = '';

container.addEventListener('click', function (event) {
        let currentElement = event.target;
        // действия, которые делаются,
        // мы кликнули по нашему элементу .container

        // event - описание событий (объект события), в котором
        // храняться все сведения о произошедшем событии

        // из этого объекта можно достать
        // элемент, по которому событие и произошло
        // event.target

        if (currentElement.classList.contains("square_closed")) {
            currentElement.classList.remove("square_closed");

            if (previousElement == '') {
                previousElement = currentElement;
            } else if (
                previousElement.classList.contains("blue")
                &&
                currentElement.classList.contains("blue")
            ) {
                //нашли пару синих квадратов
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = '';
            } else if (
                previousElement.classList.contains("pink")
                &&
                currentElement.classList.contains("pink")
            ) {
                //нашли пару синих квадратов
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = '';
            } else {
                previousElement.classList.add("square_closed");
                previousElement = currentElement;
            }
        }
})
