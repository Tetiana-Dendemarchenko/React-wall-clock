document.addEventListener('DOMContentLoaded', function() {
});

document.addEventListener('DOMContentLoaded', function() {
    let move = document.querySelector('.carousel__move');
    let items = document.querySelectorAll('.carousel__item');
    let left = document.querySelector('.carousel__left');
    let right = document.querySelector('.carousel__right');
});

document.addEventListener('DOMContentLoaded', function() {
    let move = document.querySelector('.carousel__move');
    let items = document.querySelectorAll('.carousel__item');
    let left = document.querySelector('.carousel__left');
    let right = document.querySelector('.carousel__right');
    left.addEventListener('click', function() {
        move.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.carousel__item');
    });
    right.addEventListener('click', function() {
        move.appendChild(items[0]);
        items = document.querySelectorAll('.carousel__item');
    });
});

