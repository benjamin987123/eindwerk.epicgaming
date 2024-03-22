document.getElementById('shopcart').addEventListener('click', function() {
    let cartAside = document.getElementById('cartAside');
    cartAside.style.display = (cartAside.style.display === 'none' || cartAside.style.display === '') ? 'block' : 'none';
  });
  