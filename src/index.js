startfunc();

function speak() {
  var voices = document.getElementsByClassName("voice");
  var r = Math.floor(Math.random() * voices.length);

  voices[r].play();
}

function startfunc() {
  // 5ミリ秒ごとに話す
  setInterval("speak()", 5000);
}
