const shippingCost = [["Sweden", 1.3], ["China", 4], ["Brazil", 8.6], ["Australia", 7.2]];

function displayPackages(response) {
    var result = JSON.parse(response);
    var table = document.getElementById("boxes");
    for (var i = 0; i < result.length; i++) {

        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        cell1.innerHTML = result[i].boxID;

        var cell2 = row.insertCell(1);
        cell2.innerHTML = result[i].receiver;

        var cell3 = row.insertCell(2);
        cell3.innerHTML = result[i].weightKG.toFixed(2) + " kg";
        cell3.style.textAlign="right";

        var cell4 = row.insertCell(3);
        cell4.style.backgroundColor = result[i].colour;

        var cell5 = row.insertCell(4);
        cell5.innerHTML = result[i].destinationcountry;

        if(result[i].destinationcountry=="Error") {
            cell5.style.color = "red";
        }

        var shippingMultiplier = 0;
        for (var j = 0; j < shippingCost.length; j++) {
            if (result[i].destinationcountry == shippingCost[j][0]) {
                shippingMultiplier = shippingCost[j][1];
            }
        }
        var cell6 = row.insertCell(5);
        cell6.style.textAlign="right";
        if (shippingMultiplier == 0) {
            cell6.innerHTML = "ERROR";
            cell6.style.color="red";
        }
        else
            cell6.innerHTML = (result[i].weightKG * shippingMultiplier).toFixed(2) + " SEK";
    }
}