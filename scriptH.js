var inputHyp = document.querySelectorAll("#input-hyp");
var getHyp = document.querySelector("#get-hyp");
var outputHyp = document.querySelector("#output-hyp");

function getTheHypotenus() {
  let hypotenus = Math.sqrt((Number(inputHyp[0].value) * Number(inputHyp[0].value)) + (Number(inputHyp[1].value) * Number(inputHyp[1].value)));
  outputHyp.innerText = "The lenght of hypotenus is" + hypotenus;
}
getHyp.addEventListener("click", getTheHypotenus);
