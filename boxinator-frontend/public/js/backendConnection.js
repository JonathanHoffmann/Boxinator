const backendUrl = 'http://localhost:8082/boxinator_backend_war_exploded/api';


async function getAll() {
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



function postBackend(r, w, c, d) {
    xhr = buildXHR("POST", "/addbox", true);
    var params;

    params = JSON.stringify({colour: c, receiver: r, destinationcountry: d, weightKG: w});

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                location.reload();
            } else {
                alert(xhr.status + "   " + xhr.responseText);
            }
        }
    };
    xhr.send(params);
}

function buildXHR(httpMethod, URLend, contentTypeJson) {
    const xhr = new XMLHttpRequest();
    xhr.open(httpMethod, backendUrl + URLend);
    if(contentTypeJson)
    {
        xhr.setRequestHeader("Content-Type", "application/json");
    }
    console.log("Making a Request to " + backendUrl);
    return xhr;
}