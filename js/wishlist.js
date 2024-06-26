document.addEventListener('DOMContentLoaded', () => {
    const wishlistCenter = document.getElementById('wishlist-center');
  
    const products = [
      { id: 1, name: 'Paisley Diamond Earrings', price: '$700', image: './images/e1a.jpg' },
      { id: 2, name: 'Sonata White Men’s Shirt', price: '$800', image: './images/product-3.jpg' },
      { id: 3, name: 'Concepts Solid Pink Men’s Polo', price: '$150', image: './images/product-2.jpg' }
      // Add more products as needed
    ];
  
    // Function to add item to wishlist
    function addToWishlist(product) {
      const wishlistItem = document.createElement('div');
      wishlistItem.classList.add('wishlist-item');
      wishlistItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
      `;
      wishlistCenter.appendChild(wishlistItem);
    }
  
    // Mock function to simulate adding items to wishlist
    // In a real application, you would use event listeners to handle this
    products.forEach(product => {
      addToWishlist(product);
    });
  });
  