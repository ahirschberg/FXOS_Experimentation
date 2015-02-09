window.addEventListener("load", function() {
  console.log("Push The Button now loaded.");
});
var clicks = 0;
var coins = 0;
var gems = 0;
var exp = 1;
var points = 0;
var level = 1;
var expneeded = 0;
var buttonPressed = document.getElementById('buttonPressed');
var faderId = document.getElementById('faderId');
var textId = document.getElementById('textId');
var expId = document.getElementById('expId');
var coinsId = document.getElementById('coinsId');
var gemsId = document.getElementById('gemsId');
var levelId = document.getElementById('levelId');
var expToNextLevelId = document.getElementById('expToNextLevelId');
buttonPressed.onclick = function(){
  clicks++;
  exp++;
  $("#faderId").fadeTo("fast", 1);
  $("#clicksId").text(clicks);
  $("#expId").text(exp);
  $("#levelId").text(level);
  checkExp();
  switch(clicks){
    case 1:
      $("#textId").text("Good start");
      giveExp(10);
      break;
    case 5:
      giveExp(10);
      break;
    case 10:
      $("#textId").text("Check out the store below to get some upgrades!");
      giveExp(25);
      break;
    case 15:
      setText("Nice! 15! You can afford some more upgrades now!");
      giveExp(25);
      break;
    case 25:
      setText("Ooooh! 25! Keep going!");
      giveExp(50);
      break;
    case 50:
      setText("50! Wow!");
      giveExp(50);
      break;
    case 76:
      setText("You may now fish lobster. -Aki");
      giveExp(100);
      break;
    case 100:
      setText("100 already? That was fast!");
      giveExp(100);
      break;
    case 250:
      setText("Congradulations, you beat Aki's record.");
      giveExp(500);
      break;
    case 500:
      setText("500? This is going on the highscores!");
      giveExp(500);
      break;
    case 1000000000:
      setText("YOU'VE ACHIEVED AN AWARD: GOOFY GOOBER");
      giveExp(50000);
      // Give achievement, 1000 coins, 5 gems, 2 minutes of 'premium' gameplay, and an award
      break;
  }
    
};
function setText(newtext){
  $("#textId").text(newtext);
}
function exp(amount){
  exp = exp + amount;
}
function finishFade(){
  $("#faderId").text("");
  $("#faderId").fadeTo(1, 1);
}
function fade(text){
  $("#faderId").text(text);
  $("#faderId").fadeTo(100, .01);
  $("#faderId").promise().done(function(){
    finishFade();
  })
}
function giveExp(amount){
  exp += amount;
  $("#expId").text(exp);
  fade("+" + amount + "exp");
}
function level(amount){
  level = level + amount;
  $("#levelId").slideToggle().promise().done(function(){
    $("#levelId").text(level);
    $("#levelId").slideToggle();
  })
}
function checkExp(){
  expNeeded = Math.floor(level + 300 * Math.pow(2, level / 7));
  console.log("expneeded is " + expNeeded);
  $("#expToNextLevelId").text(expNeeded - exp);
  if(exp / expNeeded >= 1){
    if(level == 99){
      // Do nothing
    }
    else{
      level++;
      $("#levelId").slideToggle().promise().done(function(){
        $("#levelId").text(level);
        $("#levelId").slideToggle();
      })
    }
  }
}
function coins(amount){
  coins = coins + amount;
}
function gems(amount){
  gems = gems + amount;
}