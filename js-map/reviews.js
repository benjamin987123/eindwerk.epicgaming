// reviews.js
document.addEventListener('DOMContentLoaded', function () {
    let sendButton = document.querySelector('.product_sent_review button');
    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        verplaatsBericht();
    });

    function verplaatsBericht() {
        let productFieldset = document.querySelector('.product_fieldset');
        let bericht = productFieldset.querySelector('textarea[name="Bericht"]').value;
        let reviewsContainer = document.querySelector('.reviews-container');
        let reviewElement = document.createElement('p');
        reviewElement.classList.add('reviews');
        reviewElement.innerHTML = bericht;
        reviewsContainer.appendChild(reviewElement);
        productFieldset.querySelector('textarea[name="Bericht"]').value = '';
    }
});
