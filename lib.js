export const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop the function from running if there is no audio associated with the keyCode

  audio.currentTime = 0; // rewind to the start of the audio file
  audio.play();

  key.classList.add("playing");
};

export const removeTransition = function removeTrans(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform

  this.classList.remove("playing");
};
