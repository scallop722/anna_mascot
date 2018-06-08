startfunc();

function voice() {
  var voices = document.getElementsByClassName("voice");
  var r = Math.floor(Math.random() * voices.length);

  voices[r].play();
}

function startfunc() {
  setInterval("voice()", 5000);
}