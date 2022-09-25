var quizInput = document.querySelector("#quiz-tri");
var buttonInput = document.querySelector("#check-ans");
var outputScore = document.querySelector("#output-score");

var correctAnswer = ["90°", "right angle","equilateral","√3/2a2","Isosceles"];
function getScore() {
  var score = 0;
  let index = 0;
  const formResult = new FormData(quizInput);
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index++;
  }
  outputScore.innerText = "Your score is : " + score;
}

buttonInput.addEventListener("click", getScore);