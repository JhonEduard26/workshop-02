export function calculateCalories({ weight, height, age, activity, genre }) {
  let tmb = 0
  if (genre === "male") {
    tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5
  } else if (genre === "female") {
    tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161
  } else {
    tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5
  }

  return Math.round(tmb * parseFloat(activity))
}

// * Hombres	TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
// * Mujeres	TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161