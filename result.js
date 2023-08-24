export function result(element, { age, calories, name, typeDocument, documentNumber }) {

  let group = ''

  if (age >= 15 && age <= 29) {
    group = 'Joven'
  } else if (age >= 30 && age <= 59) {
    group = 'Adulto'
  } else if (age >= 60 && age <= 74) {
    group = 'Adulto mayor'
  } else if (age >= 75) {
    group = 'Anciano'
  }


  element.innerHTML = `
    <div class="modal">
      <div class="modal-content"> 
        <span class="close">&times;</span>
        <h2>Grupo poblacional: <strong>${group}</strong></h2>
        <p>
          El paciente ${name} identificado con ${typeDocument}
          No. ${documentNumber}, requiere un total de <strong>${calories}</strong> kcal
          para el sostenimiento de su TBM
        </p>
      </div>
    </div>
  `
}

document.addEventListener('click', e => {
  if (e.target.className === 'close') {
    document.querySelector('.modal').style.display = 'none'
  }
})