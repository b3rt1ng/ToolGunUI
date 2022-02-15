var container = ["Stacker","Balloons","Fadding Door","Buttons","Duplicator","Emitter","Hoverball","Lamps","Light","Physical Propreties","Thruster","Wheel"];
var index = -1;
var soundPlayer = new Audio();
var valid = new Audio("sounds/button15.wav");
var errors = [new Audio("sounds/combine_button1.wav"),new Audio("sounds/combine_button2.wav"),new Audio("sounds/combine_button3.wav"),new Audio("sounds/combine_button4.wav"),new Audio("sounds/combine_button5.wav"),new Audio("sounds/combine_button6.wav")];

var on = new Audio("sounds/on.wav");
var off = new Audio("sounds/off.wav");
var vol = true;

function gf() {

}
function volume() {
  if (vol==true) {
    off.play();
    document.getElementById('speaker').src='img/speaker_off.png';
  } else {
    on.play();
    document.getElementById('speaker').src='img/speaker_on.png';
  }
  vol = !vol;
}

function menu(bool) {
  if (bool==true) {
    if (index==0) {
      if (vol==true){errors[Math.floor(Math.random() * (errors.length-1))].play();}
    } else {
      if (vol==true){valid.play();}
      index--;
    }
  } else {
    if (index==(container.length-1)) {
      if (vol==true){errors[Math.floor(Math.random() * (errors.length-1))].play();}
    } else {
      if (vol==true){valid.play();}
      index++;
    }
  }
  console.log(index+","+(container.length-1));
  prev=document.getElementById('previous')
  prev.innerText = (container[index-1]!=undefined)?container[index-1]:"Null";
  if (prev.innerHTML=="Null") {
    prev.style.color = "red";
  } else {
    prev.style.color = "blue"
  }
  document.getElementById('current_tool').innerText = container[index];
  next=document.getElementById('next')
  next.innerText = (container[index+1]!=undefined)?container[index+1]:"Null";
  if (next.innerHTML=="Null") {
    next.style.color = "red"
  } else {
    next.style.color = "blue"
  }
}

function playnote() {
  if (vol==true) {
    soundPlayer.src = "sounds/fart.wav";
    soundPlayer.mozPreservesPitch = false;
    soundPlayer.playbackRate = Math.floor(Math.random() * (4 - 0.7 + 1)) + 0.7;
    soundPlayer.play();
  }
}
