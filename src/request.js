
var redSlider = document.getElementById('redSlider');
var greenSlider = document.getElementById('greenSlider');
var blueSlider = document.getElementById('blueSlider');

fetch('http://192.168.1.22:7777/getLedStatus')
.then(response => response.json())
.then(data => {
    console.log(data.value);
    
    document.getElementById('redValue').innerHTML= data.value.red;
    document.getElementById('greenValue').innerHTML= data.value.green;
    document.getElementById('blueValue').innerHTML= data.value.blue;

    redSlider.value=data.value.red;
    greenSlider.value=data.value.green;
    blueSlider.value=data.value.blue;
});

redSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?red='+redSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('redValue').innerHTML = data.success==1?redSlider.value : "Error" ;
    })

});

greenSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?green='+greenSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('greenValue').innerHTML = data.success==1?greenSlider.value : "Error" ;
    })
});

blueSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?blue='+blueSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('blueValue').innerHTML = data.success==1?blueSlider.value : "Error" ;
    })
});