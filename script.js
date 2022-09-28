var sideInput = document.querySelectorAll("#side-input");
var calculateArea = document.querySelector("#calculate-area");
var outputArea = document.querySelector("#output-area");

function displayAreaOfTriangle() {
  if(sideInput[0].value >0 && sideInput[1].value >0 && sideInput[2].value >0){
  let semiPerimeter = (Number(sideInput[0].value) + Number(sideInput[1].value) + Number(sideInput[2].value)) / 2;
  // console.log(semiPerimeter)
  let areaOfTriangle = (Math.sqrt((semiPerimeter) * (semiPerimeter - Number(sideInput[0].value)) * (semiPerimeter - Number(sideInput[1].value)) * (semiPerimeter - Number(sideInput[2].value))));
  // console.log(areaOfTriangle)
  outputArea.innerText = "The area of the triangle is : " + areaOfTriangle;
}else{
  outputArea.innerText = "invalid";
}}

calculateArea.addEventListener("click", () => displayAreaOfTriangle());
// console.log(sideInput[0].value + sideInput[1].value + sideInput[2].value)



// var inputHyp = document.querySelectorAll("#input-hyp");
// var getHyp = document.querySelector("#get-hyp");
// var outputHyp = document.querySelector("#output-hyp");

// function getTheHypotenus() {
//   let hypotenus = Math.sqrt((Number(inputHyp[0].value) * Number(inputHyp[0].value)) + (Number(inputHyp[1].value) * Number(inputHyp[1].value)));
//   outputHyp.innerText = "The lenght of hypotenus is" + hypotenus;
// }
// getHyp.addEventListener("click", getTheHypotenus);
