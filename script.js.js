document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bp = document.getElementById("bp").value;
  const hr = parseInt(document.getElementById("hr").value);
  const oxygen = parseInt(document.getElementById("oxygen").value);

  const bmi = weight / ((height / 100) ** 2);
  let result = `Your BMI is ${bmi.toFixed(1)}.<br>`;

  const [sys, dia] = bp.split("/").map(Number);

  if (bmi < 18.5) {
    result += "You are underweight.<br>";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result += "Your weight is normal.<br>";
  } else {
    result += "You may be overweight.<br>";
  }

  if (sys < 90 || dia < 60) {
    result += "Blood Pressure: Low<br>";
  } else if (sys > 140 || dia > 90) {
    result += "Blood Pressure: High<br>";
  } else {
    result += "Blood Pressure: Normal<br>";
  }

  if (hr < 60 || hr > 100) {
    result += `Heart Rate: Abnormal (${hr} bpm)<br>`;
  } else {
    result += `Heart Rate: Normal (${hr} bpm)<br>`;
  }

  if (oxygen < 95) {
    result += `Oxygen Level: Low (${oxygen}%)<br>`;
  } else {
    result += `Oxygen Level: Normal (${oxygen}%)<br>`;
  }

  document.getElementById("result").innerHTML = result;
});