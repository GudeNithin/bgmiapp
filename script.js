var head=document.querySelector("h1");
var head1=document.querySelector("h2");
var anc=document.querySelector("a");
head.style.color='cyan';
head1.style.color='black';
anc.style.color='white';


function getRandomColor()
{
    var let="0123456789ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
    {
        color+=let[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeColor()
{
    colorI=getRandomColor()
    head.style.color=colorI;
    anc.style.color=colorI;
    head1.style.color=colorI;
}
setInterval("changeColor()",500);

var text = document.getElementById("c1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 600);

function onTick(){
  var span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }


  function complete(){
    clearTimeout(timer);
    timer = null;
  }