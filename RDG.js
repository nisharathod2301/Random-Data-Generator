const stateCodes = [
  "AN", "AP", "AR", "AS", "BR", "CH", "DN", "DD", "DL", "GA",
  "GJ", "HR", "HP", "JK", "KA", "KL", "LD", "MP", "MH", "MN",
  "ML", "MZ", "NL", "OD", "PY", "PN", "RJ", "SK", "TN", "TR",
  "UK", "UP", "WB"
];

const vehicleSizes = ["2 wheeler", "4 wheeler", "4 wheeler XL"];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomRegistrationNumber() {
  const stateCode = stateCodes[generateRandomNumber(0, stateCodes.length - 1)];
  const rtoCode = generateRandomNumber(1, 99).toString().padStart(2, "0");
  const series = String.fromCharCode(65 + generateRandomNumber(0, 25));
  const uniqueNumber = generateRandomNumber(1, 9999).toString().padStart(4, "0");
  const vehicleSize = vehicleSizes[generateRandomNumber(0, vehicleSizes.length - 1)];

  const registrationNumber = `${stateCode} ${rtoCode} ${series}${uniqueNumber} (${vehicleSize})`;

  const timestamp = new Date().toISOString();
  return `${registrationNumber} - ${timestamp}`;
}

setInterval(() => {
  const registrationNumber = generateRandomRegistrationNumber();
  console.log(registrationNumber);
}, 1000); // Generate a new registration number every second
