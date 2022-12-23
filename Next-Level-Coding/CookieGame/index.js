var video = document.getElementById("full");
const clip = document.querySelectorAll(".full");

window.onload = () => {
    setInterval(gifMake(), 100);
}


document.addEventListener('mousemove', function(e){
    can = document.getElementById("can");

    let left = e.pageX -150;
    let top = e.pageY -150;

    can.style.left = left + 'px';
    can.style.top = top + 'px';

})

let timeStamp = parseInt(getCookie("cookie_timestamp")) || 0;

video.currentTime = timeStamp;

for(let i = 0; i < clip.length; i++){
    can.addEventListener('mousedown', function(e){
        clip[i].play()
    })
    can.addEventListener('mouseup', function(e){
        clip[i].pause()
        console.log (video.currentTime);
        
    })
    }
    

can.addEventListener('mouseup',function(){

    timeStamp = video.currentTime;

    setCookie("cookie_timestamp", timeStamp, 999);
})



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};

timeStamp = video.currentTime;

let angel1 = document.getElementById("angel1");
let angel2 = document.getElementById("angel2");
let angel3 = document.getElementById("angel3");
let angelgirl = document.getElementById("angelgirl");
let bee = document.getElementById("bee");
let beetle = document.getElementById("beetle");
let butterfly1 = document.getElementById("butterfly1");
let butterfly3 = document.getElementById("butterfly3");
let butterfly4 = document.getElementById("butterfly1");
let dolphin = document.getElementById("dolphin");
let dove = document.getElementById("dove");
let fallingleaves = document.getElementById("leaves");
let flower = document.getElementById("flower");
let giphy = document.getElementById("giphy");

function gifMake() {
    if (parseInt(timeStamp) > 9){
        angel1.style.display = "block";
    } else {
        angel1.style.display = "none"
    }
    
    if (parseInt(timeStamp) > 15){
        angel2.style.display = "block";
        angel3.style.display = "block";
    }
    
    if (parseInt(timeStamp) > 17){
        fallingleaves.style.display = "block";
    }
    
    if (parseInt(timeStamp) > 19){
        bee.style.display = "block";
    }
    
    if (parseInt(timeStamp) > 21){
        beetle.style.display = "block";
    }
    
    
    if (parseInt(timeStamp) > 23){
        butterfly3.style.display = "block";
    }
    
    if (parseInt(timeStamp) > 25){
        dolphin.style.display = "block";
    }
    
    if (parseInt(timeStamp) > 27){
        angelgirl.style.display = "block";
    }

    if (parseInt(timeStamp) > 29){
        flower.style.display = "block";
    }

    if (parseInt(timeStamp) > 31){
        giphy.style.display = "block";
    }

}

video.addEventListener('play', () => {
    gifMake();
})


