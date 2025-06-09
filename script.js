document.getElementById('healthForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const heartrate = parseFloat(document.getElementById('heartrate').value);
  const bpSys = parseFloat(document.getElementById('bpSystolic').value);
  const bpDia = parseFloat(document.getElementById('bpDiastolic').value);
  const oxygen = parseFloat(document.getElementById('oxygen').value);
  const sickness = document.getElementById('sickness').value.toLowerCase();

  let result = "";

  // Calculate BMI
  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  if (bmi < 18.5 || bmi > 24.9) {
    result += "⚠️ Your BMI is not in the healthy range. ";
  }

  if (heartrate < 60 || heartrate > 100) {
    result += "⚠️ Abnormal heart rate. ";
  }

  if (bpSys > 130 || bpDia > 85) {
    result += "⚠️ Blood pressure is slightly high. ";
  }

  if (oxygen < 95) {
    result += "⚠️ Oxygen levels are low. ";
  }

  if (sickness !== "none") {
    result += "⚠️ You have a reported illness. ";
  }

  if (result === "") {
    result = "✅ You are in good health based on the provided data!";
  }

  document.getElementById('result').innerText = result;
});