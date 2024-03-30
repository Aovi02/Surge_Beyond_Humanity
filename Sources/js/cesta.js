window.onload = function() {
    var table = document.getElementById("cesta");
    var rows = table.getElementsByTagName("tr");
    var total = 0;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length >= 2) {
            var price = cells[1].innerText.replace("$", "");
            total += parseFloat(price);
        }
    }

    // Update the total in the last row
    var totalRow = document.querySelector(".total-row td:last-child");
    totalRow.innerText = "$" + total.toFixed(2);
};