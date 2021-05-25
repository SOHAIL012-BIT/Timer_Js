// function Timer(){
//     console.log("Running")
// }
// // setInterval(Timer,1000)
// setTimeout(Timer,5000)
var minHead=document.getElementById("min")
var secHead=document.getElementById("sec")
var msecHead=document.getElementById("msec")
var btn=document.getElementById("disabled")

var min =+prompt("Enter minutes")
var sec=60;
var msec=100;
min = min - 1
msecHead.innerHTML=msec;
secHead.innerHTML=sec;
minHead.innerHTML=min;

function stopWatch(){
    msec--;
    msecHead.innerHTML=msec;
    if(msec==0)
    {
        sec--;
        secHead.innerHTML=sec;
        msec=60;
        if(sec==0)
        {
            min--;
            sec=5;
            minHead.innerHTML=min;
            if (min==0 && sec==0 && msec==0){
                msec=00;
                sec=00;
                min=00;
                msecHead.innerHTML=msec;
                secHead.innerHTML=sec;
                minHead.innerHTML=min;
                clearInterval(interval)  
                         
            }
        }
    }
}
var interval

function start()
{
    interval=setInterval(stopWatch,10)
    btn.disabled=true;
}
function pause()
{
    clearInterval(interval)
    btn.disabled=false;
}
function reset(){
    msec=00;
    sec=00;
    min=00;
    msecHead.innerHTML=msec;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
    clearInterval(interval)
    btn.disabled=false;
    min =+prompt("Enter minutes")
    
}


