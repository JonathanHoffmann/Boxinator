const backendUrl = 'http://localhost:8082/boxinator_backend_war_exploded/api';
const shippingCost = [["Sweden",1.3],["China",4],["Brazil",8.6],["Australia",7.2]];


async function getAll ()
{
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.debug('response GET board:' + this.responseText);
                displayPackages(this.responseText);

            }
        }
    });
    console.log("Making a Request to " + backendUrl);
    xhr.open('GET', backendUrl + `/listboxes`);

    xhr.send();
}

function displayPackages(response)
{
    var result = JSON.parse(response);
    var table = document.getElementById("boxes");
    for (var i = 0; i<result.length; i++)
    {

        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        cell1.innerHTML=result[i].boxID;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=result[i].receiver;

        var cell3 = row.insertCell(2);
        cell3.innerHTML=result[i].weightKG + " kg";

        var cell4 = row.insertCell(3);
        cell4.style.backgroundColor=result[i].colour;

        var cell5 = row.insertCell(4);
        cell5.innerHTML=result[i].destinationcountry;

        var shippingMultiplier=0;
        for(var j = 0;j<shippingCost.length;j++)
        {
            if(result[i].destinationcountry==shippingCost[j][0])
            {
                shippingMultiplier=shippingCost[j][1];
            }
        }
        var cell6 = row.insertCell(5);
        if(shippingMultiplier==0)
            cell6.innerHTML="ERROR";
        else
            cell6.innerHTML=result[i].weightKG*shippingMultiplier + " SEK";


    }
}