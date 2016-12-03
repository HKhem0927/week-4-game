var randomNumber = 0;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;
var crystalNum1 = Math.floor(Math.random() * 12) + 1;
var crystalNum2 = Math.floor(Math.random() * 12) + 1;
var crystalNum3 = Math.floor(Math.random() * 12) + 1;
var crystalNum4 = Math.floor(Math.random() * 12) + 1;

//Click Functions

$("#buttonRed").click(function() {
  totalScore=totalScore+crystalNum1; 		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonBlue").click(function() {
  totalScore=totalScore+crystalNum2;		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonYellow").click(function() {
	totalScore=totalScore+crystalNum3;		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonGreen").click(function() {
	totalScore=totalScore+crystalNum4;
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

//Main Process
newGame();

function newGame() {
totalScore = 0;	
randomNumber =  Math.floor(Math.random() * (102) + 19);
crystalNum1 = Math.floor(Math.random() * 12) + 1;
crystalNum2 = Math.floor(Math.random() * 12) + 1;
crytalNum3 = Math.floor(Math.random() * 12) + 1;
crystalNum4 = Math.floor(Math.random() * 12) + 1;
$("#compNum").html(randomNumber);
$("#scoreNum").html(totalScore);
$("#message").html()
};


function scoreCheck() {
	if (totalScore==randomNumber){
		winCount++;
		$("#winCount").html(winCount);
		$("#message").html("You win!");
		newGame();
	}else if(totalScore>randomNumber){
		lossCount++;
		$("#lossCount").html(lossCount);
		$("#message").html("You lose! Try again.");
		newGame();
	}
}; 




