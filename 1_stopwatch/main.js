/******   Açıklama   *******/
/*
javascript setInterval fonksiyonu , milisaniye cinsinden tanımlanan süreyle belirli aralıkta tanımlanan fonksiyonu çalıştırmaktadır . 

Javascript setInterval fonksiyonunu durdurmak için clearInterval() şeklinde çağırmanız gerekmekte.  Durdurmak için  setInterval fonksiyonunu bir değişkene atamanız gerekmektedir.

setTimeout fonksiyonu javascript ile birlikte gelen yerel bir fonksiyondur . setTimeout fonksiyonu milisaniye cinsinden hesaplama yapar ve belirlenen süre sonunda fonksiyonu çalıştırır yani bir fonksiyonu belirli bir süre sonra çalıştırmak istiyorsanız setTimeout kullanabilirsiniz.
*/


window.onload=function () {
    let seconds=00;
    let tens=00;

    let appendTens=document.querySelector("#tens");
    let appendSeconds=document.querySelector("#seconds");
    let buttonStart=document.querySelector("#button-start");
    let buttonStop=document.querySelector("#button-stop");
    let buttonReset=document.querySelector("#button-reset");
    let interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
         interval= setInterval(startTimer, 10);
      }

    buttonStop.onclick = function () {
        clearInterval(interval);
      }


    buttonReset.onclick = function() {
       clearInterval(interval);
       tens="00";
       seconds="00";
       appendSeconds.innerHTML=seconds;
       appendTens.innerHTML=tens;
    }


   function startTimer () {
    tens++;
    if(tens<=9)
    {
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+ 0;
    }
    if(seconds>9)
    {
        appendSeconds.innerHTML=seconds;
    }
   }

}