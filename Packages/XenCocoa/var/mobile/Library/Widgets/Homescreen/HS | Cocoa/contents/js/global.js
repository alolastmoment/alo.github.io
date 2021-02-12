var doc = document;

var touchMoved = false;
changingApp = false;
target = null;

var time = doc.getElementById("time"),
  timeString = doc.getElementById("timeString"),
  date = doc.getElementById("date"),
  batteryPercent = doc.getElementById("battery"),
  altBatteryPercent = doc.getElementById("altBattery"),
  iconHolder = doc.getElementById("iconHolder"),
  topHolder = doc.getElementById("topHolder"),
  midHolder = doc.getElementById("midHolder"),
  bottomHolder = doc.getElementById("bottomHolder"),
  timeQuote = doc.getElementById("timeQuote"),
  greetQuote = doc.getElementById("greetQuote"),
  altGreet = doc.getElementById("altGreet"),
  hello = doc.getElementById("hello"),
  username = doc.getElementById("username"),
  timeContainer = doc.getElementById("timeContainer"),
  altTimeContainer = doc.getElementById("altTimeContainer"),
  iconRow = doc.getElementById("iconRow"),
  bottomPortion = doc.getElementById("bottomPortion"),
  dockContainer = doc.getElementById("dockContainer"),
  buttons = doc.getElementById("buttons"),
  mediaButton = doc.getElementById("mediaButton"),
  homeButton = doc.getElementById("homeButton"),
  homeIconContainer = doc.getElementById("homeIconContainer"),
  homeContainer = doc.getElementById("homeContainer"),
  homeRowTop = doc.getElementById("homeRowTop"),
  homeRowMiddle = doc.getElementById("homeRowMiddle"),
  homeRowBottom = doc.getElementById("homeRowBottom"),
  pfp = doc.getElementById("pfp"),
  textGreetContainer = doc.getElementById("textGreetContainer"),
  musicContainer = doc.getElementById("musicContainer"),
  musicPlayContainer = doc.getElementById("musicPlayContainer"),
  musicArtwork = doc.getElementById("musicArtwork"),
  musicTitle = doc.getElementById("musicTitle"),
  musicArtist = doc.getElementById("musicArtist"),
  musicButtons = doc.getElementsByClassName("musicButtons"),
  play = doc.getElementById("play");

function createDOM(params) {
  var element = doc.createElement(params.type);
  if (params.id) {
    element.id = params.id;
  }
  if (params.className) {
    element.className = params.className;
  }
  if (params.innerHTML) {
    element.innerHTML = params.innerHTML;
  }
  if (params.styleImg) {
    element.style.backgroundImage = "url(" + params.styleImg + ")";
  }
  if (params.appender) {
    for (let i = 0; i < params.appender.length; i++) {
      element.appendChild(params.appender[i]);
    }
  }
  return element;
}

//* Time Configuration

function loadTime(systemData) {
  var twelveHour = systemData.isTwentyFourHourTimeEnabled ? false : true;
  theTime({
    amPm: twelveHour,
    addZero: true,
    done: function (timeObj) {
      time.innerHTML = `current time is ${timeObj.hours()}:${timeObj.minutes()}:${timeObj.seconds()}`;
      timeString.innerHTML = `${timeObj.hours()}${timeObj.minutes()}${timeObj.seconds()}`;
      date.innerHTML = `it's ${timeObj.dayText()}, ${timeObj.monthShortText()} ${timeObj.dateNth()}`;
      altGreet.innerHTML = timeObj.greet();
    },
  });
}

//* Battery Configuration

function checkBattery(resourceData) {
  batteryPercent.innerHTML = `battery life ${resourceData.battery.percentage}%`;
  altBatteryPercent.innerHTML = resourceData.battery.percentage;
}

//* App Storage

function loadStorage() {
  theStorage.init({
    title: "cocoaStorage",
    extraStorage: {
      dockIcons: [
        "com.apple.Preferences",
        "com.apple.MobileSMS",
        "com.apple.mobilesafari",
        "com.apple.mobileslideshow",
        "com.apple.mobilephone",
      ],
      homeIcons: [
        "placeholder0",
        "placeholder1",
        "placeholder2",
        "placeholder3",
        "placeholder4",
        "placeholder5",
        "placeholder6",
        "placeholder7",
        "placeholder8",
        "placeholder9",
        "placeholder10",
        "placeholder11",
        "placeholder12",
        "placeholder13",
        "placeholder14",
        "placeholder15",
      ],
    },
  });
}

function loadApps(apps) {
  dockIcons = theStorage.dockIcons;
  homeIcons = theStorage.homeIcons;
  iconHolder.innerHTML = "";
  topHolder.innerHTML = "";
  midHolder.innerHTML = "";
  bottomHolder.innerHTML = "";
  for (let i = 0; i < dockIcons.length; i++) {
    var bundle = dockIcons[i],
      badge,
      icon,
      theApp = createDOM({
        type: "div",
        id: bundle,
        className: "app",
      });

    if (bundle == "placeholder" + i) {
      theApp.style.backgroundColor = "white";
      theApp.setAttribute("name", "Blank");
    } else {
      icon = apps.applicationForIdentifier(bundle).icon;
      theApp.setAttribute("name", apps.applicationForIdentifier(bundle).name);
      if (apps.applicationForIdentifier(bundle).badge > 0) {
        badge = createDOM({
          type: "div",
          className: "badge",
          innerHTML: apps.applicationForIdentifier(bundle).badge,
        });
        theApp.appendChild(badge);
      }
      theApp.style.backgroundImage = "url(" + icon + ")";
    }

    iconHolder.appendChild(theApp);
  }
  for (let i = 0; i < homeIcons.length; i++) {
    var bundle = homeIcons[i],
      badge,
      icon,
      theApp = createDOM({
        type: "div",
        id: bundle,
        className: "app",
      });

    if (bundle == "placeholder" + i) {
      theApp.style.backgroundColor = "white";
      theApp.setAttribute("name", "Blank");
    } else {
      icon = apps.applicationForIdentifier(bundle).icon;
      theApp.setAttribute("name", apps.applicationForIdentifier(bundle).name);
      if (apps.applicationForIdentifier(bundle).badge > 0) {
        badge = createDOM({
          type: "div",
          className: "badge",
          innerHTML: apps.applicationForIdentifier(bundle).badge,
        });
        theApp.appendChild(badge);
      }
      theApp.style.backgroundImage = "url(" + icon + ")";
    }

    if (i < 4) {
      topHolder.appendChild(theApp);
    } else if (i > 3 && i < 12) {
      midHolder.appendChild(theApp);
    } else {
      bottomHolder.appendChild(theApp);
    }
  }
}

//* Drawer & Changing Apps

function tapHoldOnIcon(element) {
  changingApp = true;
  target = element;
  parent = element.parentElement.id;
  // console.log(parent);
  thePrompter({
    type: "confirm",
    message: "Change app for " + element.getAttribute("name"),
    promptYesText: "Set App",
    promptNoText: "Cancel",
    promptYes: function () {
      changingApp = false;
      theDrawer({
        appChanger: true,
        container: document.getElementById("drawer"),
        title: "App Changer",
        done: function (theApp) {
          console.log(parent);
          if (parent === "iconHolder") {
            theStorage.replaceAppFromLS("dockIcons", target.id, theApp);
          } else {
            theStorage.replaceAppFromLS("homeIcons", target.id, theApp);
          }
          loadApps(api.apps);
        },
      });
    },
    promptNo: function () {
      changingApp = false;
    },
  });
}

//* Music Configuration

function loadMusic(musicData) {
  if (musicData.nowPlaying.artwork) {
    musicArtwork.style.backgroundImage =
      "url(" + musicData.nowPlaying.artwork + ")";
  } else {
    musicArtwork.style.backgroundImage =
      "url(contents/mediaIcons/noartwork.png)";
  }

  if (!musicData.isStopped) {
    if (musicData.isPlaying) {
      play.style.backgroundImage = "url(contents/mediaIcons/pause.png)";
    } else {
      play.style.backgroundImage = "url(contents/mediaIcons/play.png)";
    }
    musicTitle.innerHTML = musicData.nowPlaying.title;
    musicArtist.innerHTML = `${musicData.nowPlaying.artist} &mdash; ${musicData.nowPlaying.album}`;
  } else {
    play.style.backgroundImage = "url(contents/mediaIcons/play.png)";
    musicTitle.innerHTML = "No Media Playing";
    musicArtist.innerHTML = "No Artist";
  }
}

for (let i = 0; i < musicButtons.length; i++) {
  musicButtons[i].addEventListener("click", function (el) {
    switch (el.target.id) {
      case "prev":
        api.media.previousTrack();
        break;

      case "play":
        api.media.togglePlayPause();
        break;

      case "next":
        api.media.nextTrack();
        break;
    }
  });
}

//* Launching Apps

iconHolder.addEventListener("touchend", function (el) {
  if (el.target.classList.contains("app")) {
    if (!changingApp && !touchMoved) {
      api.apps.launchApplication(el.target.id);
    }
    touchMoved = false;
  }
});

iconHolder.addEventListener("touchmove", () => (touchMoved = true));

for (let holder of [topHolder, midHolder, bottomHolder]) {
  holder.addEventListener("touchend", function (el) {
    if (el.target.classList.contains("app")) {
      if (!changingApp && !touchMoved) {
        api.apps.launchApplication(el.target.id);
        homeContainer.classList.toggle("inactive");
        homeContainer.classList.toggle("visible");
      }
      touchMoved = false;
    }
  });

  holder.addEventListener("touchmove", () => (touchMoved = true));
}

//* Configuration of switch between time views

altTimeContainer.addEventListener("touchend", function () {
  timeContainer.classList.toggle("visible");
  timeContainer.classList.toggle("inactive");
  altTimeContainer.classList.toggle("visible");
  altTimeContainer.classList.toggle("inactive");
});

timeContainer.addEventListener("touchend", function () {
  altTimeContainer.classList.toggle("inactive");
  altTimeContainer.classList.toggle("visible");
  timeContainer.classList.toggle("visible");
  timeContainer.classList.toggle("inactive");
});

//* Configuration of switch between home & music containers

homeButton.addEventListener("touchend", function () {
  if (musicContainer.classList.contains("visible")) {
    musicContainer.classList.toggle("visible");
    musicContainer.classList.toggle("inactive");
    setTimeout(() => {
      homeContainer.classList.toggle("inactive");
      homeContainer.classList.toggle("visible");
    }, 300);
  } else {
    homeContainer.classList.toggle("inactive");
    homeContainer.classList.toggle("visible");
  }
});

mediaButton.addEventListener("touchend", function () {
  if (homeContainer.classList.contains("visible")) {
    homeContainer.classList.toggle("visible");
    homeContainer.classList.toggle("inactive");
    setTimeout(() => {
      musicContainer.classList.toggle("inactive");
      musicContainer.classList.toggle("visible");
    }, 300);
  } else {
    musicContainer.classList.toggle("inactive");
    musicContainer.classList.toggle("visible");
  }
});

//* Appearance configuration

function changeAppearance() {
  for (let el of [
    timeContainer,
    dockContainer,
    musicContainer,
    homeContainer,
  ]) {
    el.classList.toggle("darkBG");
    el.classList.toggle("darkBlurBG");
  }
  for (let el of [homeIconContainer]) {
    el.classList.toggle("lightBG");
    el.classList.toggle("darkBlurBGtrans");
  }
  for (let el of [homeRowTop, homeRowMiddle, homeRowBottom]) {
    el.classList.toggle("darkBG");
    el.classList.toggle("lightBlurBG");
  }
  for (let el of [
    iconRow,
    bottomPortion,
    musicPlayContainer,
    mediaButton,
    homeButton,
  ]) {
    el.classList.toggle("lightBG");
    el.classList.toggle("lightBlurBG");
  }
}

pfp.addEventListener("touchend", changeAppearance);

//* Customization Options

timeQuote.innerHTML = `${timeQuoteText}`;
greetQuote.innerHTML = `${greetQuoteText}`;
hello.innerHTML = `Hello, ${usernameText}!`;
username.innerHTML = `${usernameText}`;
greetQuote.style.color = greetQuoteColor;

var badgeStyle = doc.createElement("style");
badgeStyle.innerHTML = `.app .badge{background:${badgeColor};width:${badgeWidth}px;height:${badgeHeight}px;}`;
doc.body.appendChild(badgeStyle);

if (preferredAppearance === true) {
  changeAppearance();
}

if (hideDockBadges === true) {
  var dockBadgeStyle = doc.createElement("style");
  dockBadgeStyle.innerHTML = `#iconHolder .badge{display:none;}`;
  doc.body.appendChild(dockBadgeStyle);
}

if (hideInfoBoxTime === true) time.style.display = "none";
if (hideMusicButton === true) {
  mediaButton.style.display = "none";
  musicContainer.style.display = "none";
  buttons.classList.remove("spcbtwJ");
  buttons.style.justifyContent = "flex-end";
}
if (hideProfilePicture === true) {
  pfp.style.display = "none";
  textGreetContainer.style.marginLeft = "0";
}
if (hideInfoBoxUsername === true) {
  username.style.display = "none";
  bottomPortion.style.borderRadius = "10px";
}

//* App reset configuration. Making sure it doesn't infinitely loop

function once(fn, context) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = context = null;
    }
    return result;
  };
}

var resetStorage = once(function () {
  theStorage.resetStorage();
});
