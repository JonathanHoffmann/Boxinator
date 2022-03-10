/*var countries = ['Sweden','China','Brazil','Australia'];
var list = document.getElementById('countries');

countries.forEach(function (item){
    var option = document.createElement('option');
    option.value = item;
    list.appendChild(option);

})*/
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
    var name = nameElement.value;
    var weightElement = document.getElementById("inputWeight");
    var weight = weightElement.value;
    var colourElement = document.getElementById("inputColour");
    var colour = colourElement.value;
    var countryElement = document.getElementById("inputCountry");
    var country = countryElement.value;
    var optionString = document.getElementById("countries").innerHTML;

    //HTML option List is sent as a string containing HTML. This code splits it into the countries as Strings in an array.
    //This is pretty useless since I blocked keypresses
    var options = optionString.split('"');
    var deleteflag = true;
    var optionDebugString="";
    for(var i = 0;i<options.length;i++)
    {
        if(deleteflag)
        {
            optionDebugString+=("Deleting " + options[i] + "\n");
            options.splice(i, 1);
            i--;
        }
        else
            optionDebugString+=("Keeping " + options[i] + "\n");

        deleteflag = !deleteflag;
    }
    console.log(optionDebugString);

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
    if(country=="") {
        errors += "You need to provide a destination country.\n";
        countryElement.style.borderColor = errorBorderColour;
    }
    else {
        var countryJibberishErrorFlag = true;
        for (var i = 0; i < options.length; i++) {
            if(country==options[i])
                countryJibberishErrorFlag=false;
        }
        if(countryJibberishErrorFlag) {
            errors += "The destination country must be one from the dropdown list.\n"
            countryElement.style.borderColor = errorBorderColour;
        }
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

//TODO connect to Backend here


}