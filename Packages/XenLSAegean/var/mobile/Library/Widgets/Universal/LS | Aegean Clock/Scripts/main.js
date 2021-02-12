function init() {
    var todayDate = new Date();
    var dateParts = (todayDate.toDateString()).split(" ");

    //set Rings Color
    document.getElementById("Oval").setAttribute('stroke', ringsColor);
    document.getElementById("Oval-Copy").setAttribute('stroke', ringsColor);
    document.getElementById("Oval2").setAttribute('stroke', ringsColor);

    // set Text Color
    $("#mainBody").attr('style','color:'+textColor);

    //set Hour and Minute Hand Color
    $(".hour").attr("style", "border-top-color:" + hourHandColor);
    
    $(".circle").attr("style", "border-color:" + hourHandColor +";background-color:"+centerCircleColor);
    
    $(".minute").attr("style", "border-top-color:" + minuteHandColor);
    
    //set small circles color
    $('#circle1').attr('style','background-color:'+leftCircleColor);
    
    $('#circle2').attr('style','background-color:'+rightCircleColor);


    document.getElementById("date").innerHTML = dateParts[2] + " " + dateParts[1] + " " + dateParts[3];
    timer();
}

var clockElement;
//console.log(document.getElementById("analogClock"));
var offset;



function timer() {
    var clockElement = document.getElementById("analogClock");
    var offset = -90;
    var date = new Date();

    var milliseconds = date.getMilliseconds();
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    seconds += milliseconds / 1000;
    minutes += seconds / 60;
    hours += minutes / 60;

    // Normalize to the 12 hour clock
    if (hours > 12) {
        hours -= 12;
    }

    //clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
    clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
    clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");

    requestAnimationFrame(timer);
}

//timer();