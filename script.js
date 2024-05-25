const formed = document.querySelector('form');
const thankYouMessage = document.querySelector('#thank-you-message');

formed.addEventListener("click", (e) => {
    e.preventDefault();
    thankYouMessage.classList.add('show');
    setTimeout(() => 2000);
});