
var redSlider = document.getElementById('redSlider');
var greenSlider = document.getElementById('greenSlider');
var blueSlider = document.getElementById('blueSlider');
var timeSlider = document.getElementById('timeSlider');
var brightnessSlider = document.getElementById('brightnessSlider');
var startRainbow = document.getElementById('startRainbow');
var stopRainbow = document.getElementById('stopRainbow');

fetch('http://192.168.1.22:7777/getLedStatus')
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById('response').innerHTML = JSON.stringify(data);

    document.getElementById('redValue').innerHTML= data.red;
    document.getElementById('greenValue').innerHTML= data.green;
    document.getElementById('blueValue').innerHTML= data.blue;
    document.getElementById('timeValue').innerHTML= data.rainbowStatus.time;
    document.getElementById('brightnessValue').innerHTML= data.rainbowStatus.rainbowBrightness;

    redSlider.value=data.red;
    greenSlider.value=data.green;
    blueSlider.value=data.blue;
});

redSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?red='+redSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
        document.getElementById('redValue').innerHTML = data.success==1?redSlider.value : "Error" ;
    })

});

greenSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?green='+greenSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
        document.getElementById('greenValue').innerHTML = data.success==1?greenSlider.value : "Error" ;
    })
});

blueSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setLed?blue='+blueSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
        document.getElementById('blueValue').innerHTML = data.success==1?blueSlider.value : "Error" ;
    })
});

brightnessSlider.addEventListener('change', () => {

    fetch('http://192.168.1.22:7777/setRainbowBrightness?brightness='+brightnessSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
        document.getElementById('brightnessValue').innerHTML = data.success==1?brightnessSlider.value : "Error" ;
    })
});

timeSlider.addEventListener('change', () => {
        document.getElementById('timeValue').innerHTML = timeSlider.value;
});

startRainbow.addEventListener('click',()=>{
    fetch('http://192.168.1.22:7777/setRainbow?time='+timeSlider.value)
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
    })
});
stopRainbow.addEventListener('click',()=>{
    fetch('http://192.168.1.22:7777/stopRainbow')
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
    })
});
