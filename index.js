var number = document.querySelectorAll(".drum").length;

for(var i =0; i < number; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var storeButton = this.innerHTML;
    onClicked(storeButton);
    buttonAnimation(storeButton);
  });
}



document.addEventListener("keydown", function(event){
  var storeButton = event.key;
  onClicked(storeButton);
  buttonAnimation(storeButton);

});

function onClicked(storeButton){
  switch(storeButton){
    case "w":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    case "a":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    case "s":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    case "d":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    case "j":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    case "k":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    case "l":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function buttonAnimation(pressedKey){
  var activeButton = document.querySelector("."+pressedKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
