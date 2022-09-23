var inputAngle = document.querySelectorAll("#input-ang");
var buttonCheck = document.querySelector("#check-tri");
var outputAngle = document.querySelector("#output-ang");

function validTriangleCheck() {
  let sumOfAngles = Number(inputAngle[0].value) + Number(inputAngle[1].value) + Number(inputAngle[2].value);
  if (sumOfAngles === 180) {
    outputAngle.innerText = "This is a triangle";
  } else {
    outputAngle.innerText = "This is not a triangle";
  }
}

buttonCheck.addEventListener("click", validTriangleCheck);