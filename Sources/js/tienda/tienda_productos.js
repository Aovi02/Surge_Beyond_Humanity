// Function to load XML file
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

// Function to update product details
function updateProductDetails(products, startIndex) {
    var productList = products.getElementsByTagName("product");
    for (var i = 0; i < 6; i++) {
        var productIndex = startIndex + i;
        if (productIndex < productList.length) {
            //Aquí hay que sacar el nombre, el path de la imagen y el precio del producto
            var product = productList[productIndex];
            var name = product.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var image = product.getElementsByTagName("image")[0].childNodes[0].nodeValue;
            var price = product.getElementsByTagName("price")[0].childNodes[0].nodeValue;

            //Actualizar el elemento
            document.getElementById("item" + (i + 1)).style.backgroundImage = "url(" + image + ")";
            document.querySelectorAll(".product-data h3")[i].textContent = name;
            document.querySelectorAll(".purchase-button")[i].textContent = price;
        } else {
            // If there are fewer than 6 products left, hide remaining product slots
            document.getElementById("item" + (i + 1)).style.display = "none";
        }
    }
    // Update counter
    var counter = document.querySelector(".counter");
    counter.textContent = Math.ceil((startIndex + 1) / 6); // Calculate the current page number
}

// Load XML file and set up initial product details
//Para el servidor Apache usar \\Surge_Beyond_Humanity\\Sources\\xml\\tienda\\products.xml
var xmlDoc = loadXMLDoc("../../xml/tienda/products.xml");
var products = xmlDoc.documentElement;
var currentIndex = 0; // Starting index
updateProductDetails(products, currentIndex);

// Event listener for next button
document.getElementById("next-page").addEventListener("click", function() {
    if (currentIndex + 6 < products.getElementsByTagName("product").length) {
        currentIndex += 6; // Move to the next batch of 6 products
    } else {
        currentIndex = 0; // Loop back to the beginning
    }
    updateProductDetails(products, currentIndex);
});

// Event listener for previous button
document.getElementById("prev-page").addEventListener("click", function() {
    if (currentIndex - 6 >= 0) {
        currentIndex -= 6; // Move to the previous batch of 6 products
    } else {
        // Calculate the starting index for the last batch of products
        var numProducts = products.getElementsByTagName("product").length;
        var remainingProducts = numProducts % 6;
        currentIndex = numProducts - remainingProducts;
    }
    updateProductDetails(products, currentIndex);
});