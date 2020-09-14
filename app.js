var time=document.getElementById('time');
var greeting=document.getElementById('greeting');
var focus=document.getElementById('focus');
var name=document.getElementById('name');


//Function to show the time

function showTime(amPm){
const today=new Date()
    hours=today.getHours(),
    minutes=today.getMinutes(),
    seconds=today.getSeconds();

    amPm=hours<12?'AM':'PM';
    time.innerHTML=`${hours} : ${addZero(minutes)} : ${addZero(seconds)}  ${amPm}`;

    setTimeout(showTime,1000);
}

function addZero(n){
return (parseInt(n,10)< 10?"0" :'') + n
}
function BgImage(today){
      today=new Date(),
      hour=today.getHours();


 if(hour<12){
     greeting.textContent='Good morning';
     document.body.style.backgroundImage="url('./img/Morning.jpg')"
 }else if(hour<18){
    greeting.textContent='Good afternoon';
    document.body.style.backgroundImage="url('./img/Afternoon.jpg')"
 }else{
    greeting.innerHTML='Good Night';
    document.body.style.backgroundImage="url('./img/Night.jpg')"
 }

}
function getName(){
    if(localStorage.getItem('name')===null){
    name.textContent='[Enter Name]'
    }else{
        name.textContent=localStorage.getItem('name');
    }
}
function addName(e){
    if(e.type==='keypress'){
        //Making sure enter is pressed
        if(e.keyCode==13){
            localStorage.setItem('name',e.target.innerText);
            name.blur()
    } 
        }

    else{
        localStorage.setItem('name',e.target.innerText);
    }
}


focus.addEventListener('blur',addName)
// name.addEventListener('keypress',addName)


function getFocus(){
    if(localStorage.getItem('focus')===null){
    focus.textContent='[Enter Focus]'
    }else{
        focus.textContent=localStorage.getItem('focus');
    }
}

BgImage();
showTime();
getName();
getFocus();