startfunc();

function speak() {
  var voices = document.getElementsByClassName("voice");
  var r = Math.floor(Math.random() * voices.length);

  voices[r].play();
}

function startfunc() {
  // 5ƒ~ƒŠ•b‚²‚Æ‚É˜b‚·
  setInterval("speak()", 5000);
}
