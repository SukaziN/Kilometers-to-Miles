let kilometers = document.getElementById("kilometers").valueAsNumber;
console.log(typeof kilometers); //returns number but the value still fetched is NaN instead of the user's input
//kilometers = Number(kilometers);
console.log(kilometers);
//let button = document.getElementById("toMiles"); not really using this variable

function convertDistance() {
  let miles = kilometers * 1.60934;
  //console.log(kilometers);
  let message = console.log(`${kilometers} kms is equal to ${miles} miles`);
  let answer = document.createElement("p");
  answer.innerText = message;
  document.body.appendChild(answer);
}
//everything works, except the value of kilometers isn't being fetched from the input as it should
