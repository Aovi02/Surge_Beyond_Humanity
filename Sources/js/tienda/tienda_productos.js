//Función para cargar XML
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

//Función para actualizar los productos
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

            //Actualizar el elemento usando los mismos 6 ids pero usando el startIndex para deducir cuál subir
            document.getElementById("item" + (i + 1)).style.backgroundImage = "url(" + image + ")";
            document.querySelectorAll(".product-data h3")[i].textContent = name;
            document.querySelectorAll(".purchase-button")[i].textContent = price;
        } else {
            //Esto es por si no es múltiplo de 6 y entonces escondo los que sobren
            document.getElementById("item" + (i + 1)).style.display = "none";
        }
    }
    //Actualizar el contador
    var counter = document.querySelector(".counter");
    counter.textContent = Math.ceil((startIndex + 1) / 6);
}

//Cargar XML
//Para el servidor Apache usar \\Surge_Beyond_Humanity\\Sources\\xml\\tienda\\products.xml
var xmlDoc = loadXMLDoc("../../xml/tienda/products.xml");
var products = xmlDoc.documentElement;
var currentIndex = 0; // Starting index
updateProductDetails(products, currentIndex);

//Event listener para next
document.getElementById("next-page").addEventListener("click", function() {
    if (currentIndex + 6 < products.getElementsByTagName("product").length) {
        currentIndex += 6; //Mover por lotes de 6
    } else {
        currentIndex = 0; //Esto es para volver al principio
    }
    updateProductDetails(products, currentIndex);
});

// Event listener for previous button
document.getElementById("prev-page").addEventListener("click", function() {
    if (currentIndex - 6 >= 0) {
        currentIndex -= 6; //Mover hacia atrás 6
    } else {
        //Calcular el índice de donde empieza el siguiente lote de 6 por si llaman al next
        var numProducts = products.getElementsByTagName("product").length;
        var remainingProducts = numProducts % 6;
        currentIndex = numProducts - remainingProducts;
    }
    updateProductDetails(products, currentIndex);
});