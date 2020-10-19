const bars = document.querySelector('.bars');
const navBar = document.querySelector('#navbar');
bars.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
    bars.classList.toggle('rotate');
})


var state = false;
function expand(){
  if(state==false){
    document.getElementById("menu-one-js").style.height='250px';
    document.getElementById("arrow-menu").style.transform ='rotate(-180deg)';
    document.getElementById("menu-one-js").style.visibility='visible';
      document.getElementById("menu-one-js").style.opacity='1';
    state=true;
  }
  else {
    document.getElementById("menu-one-js").style.height='0';
      document.getElementById("arrow-menu").style.transform ='rotate(0deg)';
    document.getElementById("menu-one-js").style.visibility='hidden';
    document.getElementById("menu-one-js").style.opacity='0';
    state=false;
  }
}
