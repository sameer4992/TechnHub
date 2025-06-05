const subComment = document.querySelector('.sub-succ');
const subButton = document.getElementById('sub-button');

subButton.addEventListener("click", function (e) {
        e.preventDefault();

        subComment.style.display = 'block';

    });

