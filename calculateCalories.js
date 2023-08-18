export function calculateCalories(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Calcular`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


// * Hombres	TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
// * Mujeres	TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161