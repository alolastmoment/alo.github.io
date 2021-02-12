var doc = document;

var container = doc.getElementById("container"),
  greet = doc.getElementById("greet"),
  date = doc.getElementById("date"),
  weatherContainer = doc.getElementById("weatherContainer"),
  weather = doc.getElementById("weather"),
  battery = doc.getElementById("battery");

function loadTime(systemData) {
  var twelveHour = systemData.isTwentyFourHourTimeEnabled ? false : true;
  theTime({
    amPm: twelveHour,
    addZero: true,
    done: function (timeObj) {
      date.innerHTML = `${timeObj.dayText()}, ${timeObj.monthText()} ${timeObj.dateNth()}`;
    },
  });
}

function checkBattery(resourceData) {
  var battState;
  if (resourceData.battery.state === 0) {
    battState = "unplugged";
  } else if (resourceData.battery.state === 1) {
    battState = "charging";
  } else {
    battState = "fully charged";
  }
  battery.innerHTML = `${battState} ${resourceData.battery.percentage}%`;
}

function loadWeather(weatherData) {
  weather.innerHTML = `${weatherData.now.temperature.current}&deg${weatherData.units.temperature} | ${weatherData.now.condition.description}`;
}

greet.innerHTML = `hello, ${username}`;

if (hideWeather === true) {
  weatherContainer.style.display = "none";
  container.classList.toggle("hiddenWeather");
}
