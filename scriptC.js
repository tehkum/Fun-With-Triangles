var inputAngle = document.querySelectorAll("#input-ang");
var buttonCheck = document.querySelector("#check-tri");
var outputAngle = document.querySelector("#output-ang");

function validTriangleCheck() {
  if(inputAngle[0].value > 0 && inputAngle[1].value > 0 && inputAngle[2] > 0){
  let sumOfAngles = Number(inputAngle[0].value) + Number(inputAngle[1].value) + Number(inputAngle[2].value);
  if (sumOfAngles === 180) {
    outputAngle.innerText = "This is a triangle";
  } else {
    outputAngle.innerText = "This is not a triangle";
  }
} else{
  outputAngle.innerText = "angle field cannot be negetive or empty";
}
}

buttonCheck.addEventListener("click", validTriangleCheck);