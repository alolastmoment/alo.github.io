/*
* Script by @ParasKCD, you can follow me on Twitter @ParasKCD https://twitter.com/ParasKCD

* inspired by Junesiphone's clock.js
* Website - http://junesiphone.com/

* Depends on localisation.js, as it links to most of the Variables from that javascript.

Usage: -
theTime({
	amPm: false,
	addZero: true,
	done: function(time) {
		document.getElementById("greet").innerHTML = time.greet();
		document.getElementById("theTime").innerHTML = time.hours() + ":" + time.minutes();
		document.getElementById("theDay").innerHTML = time.dayText();
		document.getElementById("theDate").innerHTML = time.dateNth() + " " + time.monthText();
	}
});
*/

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
})();

function theTime(opts) {
  var showTime = function () {
    var lang = window.navigator.language.split("-")[0];
    var d = new Date(),
      hourText =
        opts.amPm === false
          ? [
              "Twelve",
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten",
              "Eleven",
              "Twelve",
              "Thirteen",
              "Fourteen",
              "Fifteen",
              "Sixteen",
              "Seventeen",
              "Eighteen",
              "Nineteen",
              "Twenty",
              "Twenty One",
              "Twenty Two",
              "Twenty Three",
              "Twenty Four",
            ]
          : [
              "Twelve",
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten",
              "Eleven",
              "Twelve",
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten",
              "Eleven",
              "Twelve",
            ],
      minuteoneText = [
        "o' clock",
        "o' one",
        "o' two",
        "o' three",
        "o' four",
        "o' five",
        "o' six",
        "o' seven",
        "o' eight",
        "o' nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "Sixteen",
        "Seventeen",
        "eighteen",
        "Nineteen",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Twenty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Thirty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Forty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
        "Fifty",
      ],
      minutetwoText = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "",
      ],
      addZeroToTime = function (i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      },
      timeFuncs = {
        greet: function () {
          curHr = d.getHours();
          if (curHr < 12) {
            return greets[0] + " !";
          } else if (curHr < 17) {
            return greets[1] + " !";
          } else {
            return greets[2] + " !";
          }
        },
        hours: function () {
          var hour =
            opts.amPm === true ? ((d.getHours() + 11) % 12) + 1 : d.getHours();
          hour = opts.addZero === true ? addZeroToTime(hour) : hour;
          return hour;
        },
        minutes: function () {
          var minute = d.getMinutes();
          minute = addZeroToTime(minute);
          return minute;
        },
        seconds: function () {
          var seconds = d.getSeconds();
          seconds = addZeroToTime(seconds);
          return seconds;
        },
        hoursText: function () {
          var textHours = hourText[d.getHours()];
          return textHours;
        },
        minutesText: function () {
          var textMinuteOne = minuteoneText[d.getMinutes()],
            textMinuteTwo = minutetwoText[d.getMinutes()];
          return textMinuteOne + " " + textMinuteTwo;
        },
        minuteOneText: function () {
          return minuteoneText[d.getMinutes()];
        },
        minuteTwoText: function () {
          return minutetwoText[d.getMinutes()];
        },
        monthText: function () {
          return months[d.getMonth()];
        },
        monthShortText: function () {
          return monthsShort[d.getMonth()];
        },
        dayText: function () {
          return days[d.getDay()];
        },
        dayShortText: function () {
          return daysShort[d.getDay()];
        },
        dateText: function () {
          var textdate = [
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth",
            "Seventh",
            "Eighth",
            "Ninth",
            "Tenth",
            "Eleventh",
            "Twelfth",
            "Thirteenth",
            "Fourteenth",
            "Fifteenth",
            "Sixteenth",
            "Seventeenth",
            "Eightheenth",
            "Nineteenth",
            "Twentyith",
            "TwentyFirst",
            "TwentySecond",
            "TwentyThird",
            "TwentyFourth",
            "TwentyFifth",
            "TwentySixth",
            "TwentySeventh",
            "TwentyEight",
            "TwentyNinth",
            "Thirtyith",
            "ThirtyFirst",
          ];
          return textdate[this.date() - 1];
        },
        date: function () {
          return d.getDate();
        },
        nth: function (d) {
          if (d > 3 && d < 21) {
            return "th";
          }
          switch (d % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        },
        dateNth: function () {
          if (!(lang == "en")) {
            return this.date();
          } else {
            return this.date() + this.nth(Number(this.date()));
          }
        },
        am: function () {
          var am = opts.amPm === true ? (d.getHours() > 11 ? "pm" : "am") : "";
          return am;
        },
      };
    opts.done(timeFuncs);
    setTimeout(function () {
      window.requestAnimFrame(showTime);
    }, 10000);
  };
  showTime();
}
