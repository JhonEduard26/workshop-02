import './style.css'
import { calculateCalories } from './calculateCalories.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Calculadora de Calorias</h1>
    <form>
      <label for="age">Edad</label>
      <input id="age" type="number" min="0" max="100" />

      <label for="weight">Peso</label>
      <input id="weight" type="number" min="0" max="200" />

      <label for="height">Altura</label>
      <input id="height" type="number" />

      <label for="activity">Actividad</label>
      <select id="activity">
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

      <button id="calculate" type="button"></button>
    </form>
    </div>`

calculateCalories(document.querySelector('#calculate'))
