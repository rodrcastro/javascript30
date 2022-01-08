window.addEventListener('keydown', playSound)

function playSound(element) {
  const audio = document.querySelector(`audio[data-key="${element.code}"]`);
  if (!audio) return; //stop the function from running if no code associated with the key pressed
  audio.currentTime = 0;
  audio.play();

  // Select the specific key to add a class
  const key = document.querySelector(`.key[data-key="${element.code}"]`);
  key.classList.toggle('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
})

function removeTransition(event){
  if(event.propertyName !== 'transform') return;
  event.srcElement.classList.remove('playing');
}

// window.addEventListener('keyup', function(element) {
//   const keys = document.querySelector(`div[data-key="${element.code}"]`);
//   keys.classList.remove('playing')
// })