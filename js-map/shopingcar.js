document.addEventListener('DOMContentLoaded', function() {
  let cartButtons = document.querySelectorAll('.shop_button_cart');
  let productCounts = {};

  cartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          let productElement = button.closest('article');
          let productName = productElement.querySelector('h2').innerText;
        
          // Bijhouden van het aantal van elk product
          productCounts[productName] = (productCounts[productName] || 0) + 1;

          // Bijwerken van cartAside met het aantal van elk product
          updateCartAside();
      });
  });

  function updateCartAside() {
      let cartAside = document.getElementById('cartAside');
      cartAside.innerHTML = '';

      // Itereren over productCounts en de HTML bijwerken
      for (let productName in productCounts) {
          cartAside.innerHTML += `<p>${productName}: ${productCounts[productName]}</p>`;
      }
  }
});
