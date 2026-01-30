function convertDistance() {
  let kilometers = document.getElementById("kilometers").valueAsNumber;
  console.log(typeof kilometers); //returns number but the value still fetched is NaN instead of the user's input
  console.log(kilometers);
  let miles = (kilometers * 1.60934).toLocaleString("en-US");
  let message = `${kilometers} km is equal to ${miles} miles`;
  let answer = document.createElement("p");
  answer.innerText = message;
  document.body.appendChild(answer);
}

//alright, so declaring all the selector variables globally made it so the input exists outside the click that invokes the function, therefore not registering the value as part of the calculation declared inside the function.
