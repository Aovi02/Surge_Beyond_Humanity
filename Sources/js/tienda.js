document.addEventListener("DOMContentLoaded", function() {
    const purchaseButtons = document.querySelectorAll(".purchase-button");
    
    purchaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (!button.classList.contains("added-to-cart")) {
                button.classList.add("added-to-cart");
                button.textContent = "Added to cart";
                
                // Create a "Check cart" button
                const checkCartButton = document.createElement("button");
                checkCartButton.textContent = "Check cart";
                checkCartButton.classList.add("check-cart-button");
                
                // Append the "Check cart" button to the document body
                document.body.appendChild(checkCartButton);
                
                // Add event listener to "Check cart" button
                checkCartButton.addEventListener("click", function() {
                    // Redirect to cart.html
                    window.location.href = "cesta.html";
                });
            }
        });
    });
});