var button = $('button');
var message=$('.message');
button.on('click', pickBall);
var answers = ["Don't count on it.", "My response is no.",
"My sources say no.", "Very doubtful.", "As I see it, yes.", "Yes",
"Signs point to yes.", "Most likely.", "It is certain.",
"Yes-definitely.", "You may rely on it.", "Without a doubt.",
"Better not to tell you.", "Cannot predict now.",
"Ask Karlie Kloss!", "Boss Kloss knows better."];

  function pickBall() {
    var random = Math.random() * answers.length;
    var rounded = Math.floor(random);
    var answer = answers[rounded];
    message.text(answer);
  }
