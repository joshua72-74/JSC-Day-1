
function playsound(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running altogether
    audio.currentTime = 0;  //rewind to start
    audio.play();
    // console.log(key);
    key.classList.add('playing'); 
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;  //skip if it's not a transform
    // console.log("this");
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playsound);