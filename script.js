let kilometers = document.getElementById("kilometers").value;
console.log(typeof kilometers); //this returns a string and thats the issue. Convert the input to a number
kilometers = Number(kilometers);
console.log(kilometers);
let button = document.getElementById("toMiles");

function convertDistance() {
  let miles = kilometers * 1.60934;
  //console.log(kilometers);
  let message = console.log(`${kilometers} kms is equal to ${miles} miles`);
  let answer = document.createElement("p");
  answer.innerText = message;
  document.body.appendChild(answer);
}
button.addEventListener("click", convertDistance());
//everything works, except the value of kilometers isn't being fetched from the input as it should
