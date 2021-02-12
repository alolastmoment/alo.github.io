(function () {
  loadTime(api.system);
  loadWeather(api.weather);
})();

api.resources.observeData(function (resourcesData) {
  var battState;
  if (resourcesData.battery.state === 0) {
    battState = "unplugged";
  } else if (resourcesData.battery.state === 1) {
    battState = "charging";
  } else {
    battState = "fully charged";
  }
  document.getElementById(
    "battery"
  ).innerHTML = `${battState} ${resourcesData.battery.percentage}%`;
});

api.system.observeData(function (systemData) {
  loadTime(systemData);
});

api.weather.observeData(function (weatherData) {
  loadWeather(weatherData);
});
