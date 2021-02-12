function getTime() {

const element = document.getElementById('hour');

const now = new Date().toLocaleTimeString();
const parts = now.split(" ");

const timeparts = parts[0].split(":");
            element.innerHTML = timeparts[0] + ":" + timeparts[1] + " "+parts[1];

}


function initTime(){
 getTime();
setInterval(getTime, 1000);
}