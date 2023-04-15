var userName = prompt("Merhaba, adınızı giriniz!");

// console.log("Merhaba, " + userName + " Kodluyoruz sitesine hoş geldin!");

let username = document.querySelector('#username');

username.innerHTML = "Merhaba " + userName + " , Kodluyoruz sitesine hoşgeldin!";


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = date;
}

setInterval(tarihSaat);

var day = new Date();
var gunler = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("day").innerHTML = gunler[day.getDay()];