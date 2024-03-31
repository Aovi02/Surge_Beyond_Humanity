document.addEventListener("DOMContentLoaded", function() {
    const purchaseButtons = document.querySelectorAll(".purchase-button");
    
    //Para TODOS los botones de compra
    purchaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (!button.classList.contains("added-to-cart")) {
                button.classList.add("added-to-cart");
                button.textContent = "Added to cart";
                
                //Creamos un botón nuevo
                const checkCartButton = document.createElement("button");
                checkCartButton.textContent = "Check cart";
                checkCartButton.classList.add("check-cart-button");
                
                //Añadimos el botón al documento
                document.body.appendChild(checkCartButton);
                
                //Para redirigir al carrito
                checkCartButton.addEventListener("click", function() {
                    window.location.href = "cesta.html";
                });
            }
        });
    });
});