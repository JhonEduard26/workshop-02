export function result(element, { calories, name, typeDocument, documentNumber }) {
  element.innerHTML = `
    <div class="modal">
      <div class="modal-content"> 
        <span class="close">&times;</span>
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