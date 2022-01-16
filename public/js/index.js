
function lightmode() {
    document.body.style.backgroundColor = "#FFFFFF";
    var x = document.getElementsByClassName("title");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("mt-3");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("changecolor");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-map-marked-alt");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-facebook");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-instagram");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-phone");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-envelope");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("fa-discord");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    var x = document.getElementsByClassName("panel");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
        x[i].style.borderColor = "white";
    }
    document.getElementById("cards_landscape_wrap-2").style.backgroundColor = "white";
    document.getElementById("theme-toggle").src = "img/sun.svg";
    document.getElementById("code_of_conduct").style.color = "#000000"
}
function darkmode() {
    document.body.style.backgroundColor = "#0F131C";
    document.getElementById("about").style.color = "#FFFFFF";
    var x = document.getElementsByClassName("title");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "#FFFFFF";
    }
    var x = document.getElementsByClassName("mt-3");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "#FFFFFF";
    }
    var x = document.getElementsByClassName("changecolor");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-facebook");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-instagram");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-map-marked-alt");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-phone");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-envelope");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("fa-discord");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    var x = document.getElementsByClassName("card-flyer");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.borderColor = "white";
    }
    var x = document.getElementsByClassName("panel");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#0F131C";
        x[i].style.borderColor = "#0F131C";
    }
    document.getElementById("cards_landscape_wrap-2").style.backgroundColor = "#0F131C";
    document.getElementById("theme-toggle").src = "img/moon.svg";
    document.getElementById("code_of_conduct").style.color = "#ffffff"
}
function themechange() {
    if (document.body.style.backgroundColor == "rgb(15, 19, 28)") {
        lightmode();
    }
    else {
        darkmode();
    }
}
var path= window.location.pathname
if(path === "/judges" || path=== "/mentors" || path=== "/teams" || path==="/code"){
    window.onload = function () {
        lightmode();
    };
}else{
    window.onload = function () {
        darkmode();
    };
}