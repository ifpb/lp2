export function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else if (bmi >= 30) {
    return 'Obesity';
  } else {
    return 'Invalid values';
  }
}
