export function result(element, calories) {
  element.innerHTML = `
    <div class="modal">
      <div class="modal-content"> 
        <span class="close">&times;</span>
        <p>Calorías mínimas necesarias: ${calories}</p>
      </div>
    </div>
  `
}

document.addEventListener('click', e => {
  if (e.target.className === 'close') {
    document.querySelector('.modal').style.display = 'none'
  }
})