function convertDistance() {
  let kilometers = document.getElementById("kilometers").valueAsNumber;
  let miles = (kilometers * 1.60934).toLocaleString("en-US");
  let message = `${kilometers} km is equal to ${miles} miles`;
  let answer = document.createElement("p");
  answer.innerText = message;
  document.body.appendChild(answer);
}

//alright, so declaring all the selector variables globally made it so the input exists outside the click that invokes the function, therefore not registering the value as part of the calculation declared inside the function. FIXED It!
