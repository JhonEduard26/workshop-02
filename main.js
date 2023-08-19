import './style.css'
import { calculateCalories } from './calculateCalories.js'
import { result } from './result'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Calculadora de Calorias</h1>
    <form id="form" method="POST">
      <label for="name">Nombre</label>
      <input id="name" type="text" name="name" minLength="2" autofocus required/>

      <label for="type-document">Tipo documento</label>
      <select id="type-document" name="type-document">
        <option value="CC">Cedúla de ciudadania</option>
        <option value="TI">Tarjeta de identidad</option>
        <option value="PA">Pasaporte</option>
      </select>

      <label for"document">Número de documento</label>
      <input id="document" type="number" name="document" min="0" max="99999999999" required />

      <label for="age">Edad (años)</label>
      <input id="age" type="number" name="age" min="0" max="100" required />

      <label for="weight">Peso (kg)</label>
      <input id="weight" type="number" name="weight" min="0" max="200" required />

      <label for="height">Altura (cm)</label>
      <input id="height" type="number" name="height" min="0" max="250" required />

      <label for="activity">Actividad</label>
      <select id="activity" name="activity">
        <option value="1.2">Poco o ningún ejercicio</option>
        <option value="1.375">Ejercicio ligero (1-3 días a la semana)</option>
        <option value="1.55">Ejercicio moderado (3-5 días a la semana)	</option>
        <option value="1.725">Ejercicio fuerte (6-7 días a la semana)</option>
        <option value="1.9">Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)</option>
      </select>

      <fieldset>
        <legend>Sexo</legend>
        <div>
          <input type="radio" id="female" name="genre" value="female" checked />
          <label for="female">Femenino</label>
        </div>
        <div>
          <input type="radio" id="male" name="genre" value="male" />
          <label for="male">Masculino</label>
        </div>
      </fieldset>

      <button id="calculate" type="submit">Calcular</button>
    </form>
    <div id="result"></div>
  </div>`

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault()

  const data = Object.fromEntries(new FormData(e.target))

  result(document.getElementById('result'), {
    calories: calculateCalories(data),
    name: data.name,
    typeDocument: data['type-document'],
    documentNumber: data.document
  })
  e.target.reset()
})
