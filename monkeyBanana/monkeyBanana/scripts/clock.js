var clock = document.getElementById("clock");

// Clock Calculations
// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date()
    let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let hour = now.getHours();
    clock.innerHTML = hour + ":" + minutes;

}, 50);


