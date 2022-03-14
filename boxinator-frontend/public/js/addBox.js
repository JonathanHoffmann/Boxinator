var errorBorderColour = "red";
var defaultBorderColour = "white";
var defaultColour = "#0000ff";


function resetBorderColour(element){
    element.style.borderColor = defaultBorderColour;
}

//Ignore keyboard presses in dropdown
//https://stackoverflow.com/questions/1227146/disable-keyboard-in-html-select-tag
function IgnoreAlpha(e) {
    if (!e) {
        e = window.event;
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) // A to Z
    {
        e.returnValue = false;
        e.cancel = true;
    }
}

function submit()
{
    //init variables
    var nameElement = document.getElementById("inputName");
    var weightElement = document.getElementById("inputWeight");
    var colourElement = document.getElementById("inputColour");
    var countryElement = document.getElementById("inputCountry");
    var name = nameElement.value;
    var weight = weightElement.value;
    var colour = colourElement.value;
    var country = countryElement.value;

    //Error handling
    var errors="";

    if(name=="") {
        errors += "You need to provide a name.\n";
        nameElement.style.borderColor = errorBorderColour;
    }
    if(weight=="") {
        errors += "You need to provide a weight.\n";
        weightElement.style.borderColor = errorBorderColour;
    }
    else if(isNaN(weight)) {
        errors += "Weight has to be a number.\n";
        weightElement.style.borderColor = errorBorderColour;
        weightElement.value="";
    }


    if(country=="") {
        errors += "You need to provide a destination country.\n";
        countryElement.style.borderColor = errorBorderColour;
    }

    //Error output
    if(errors!="") {
        alert(errors);
        return 0;
    }

    //warn about colour choice
    if(colour == defaultColour)
    {
        if (confirm("You didn't select a colour. The default is " + defaultColour + ".\nContinue anyway?")) {
            console.log("Confirm default colour")
        }
        else {
            console.log("Cancel because default colour")
            return 0;
        }
    }

    postBackend(name,weight,colour,country);
    window.location.replace("listboxes.html");

}