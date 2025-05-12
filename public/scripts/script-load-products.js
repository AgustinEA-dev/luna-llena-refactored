// Load products


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(products => {
            const productsGrid = document.querySelector('.products-grid');

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card'; // usalo para estilos

                productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <strong>$${product.price.toFixed(2)}</strong>
        `;

                productsGrid.appendChild(productCard);
            });
        })
        .catch(err => {
            console.error('Error al cargar productos:', err);
        });
});