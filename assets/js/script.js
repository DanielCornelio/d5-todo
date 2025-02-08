const tasks = [
  {
    "id": 1,
    "descripcion": "Estudiar para el examen de matemáticas",
    "completada": true
  },
  {
    "id": 2,
    "descripcion": "Hacer ejercicio por 30 minutos",
    "completada": false
  },
  {
    "id": 3,
    "descripcion": "Comprar víveres en el supermercado",
    "completada": true
  },
  {
    "id": 4,
    "descripcion": "Leer un capítulo de un libro",
    "completada": false
  }
]

const tbody = document.querySelector('.tb')
const agregarBtn = document.querySelector('.btnAgregar')
let input = document.querySelector('.inputTask')


const mostrarTareas = () => {
  let html = "";
  tasks.forEach(task => {
    html += `
      <tr>
        <td><input type="checkbox" name="" id="" readonly ${task.completada ? 'checked' : ''}></td>
        <td>${task.id}</td>
        <td>${task.descripcion}</td>
        <td></td>
        <td></td>
      </tr>
    `
  })
  tbody.innerHTML = html
}
mostrarTareas()


const agregarTarea = (e) => {
  e.preventDefault()

  const valor = input.value;
  if (!valor) {
    alert('Debes ingresar un valor')
    return
  }

  const tarea = {
    id: tasks.length + 1,
    descripcion: valor,
    completada: false
  }
  tasks.push(tarea)
  input.value = ''
  mostrarTareas()

  console.log(tarea)
  console.log(tasks)

}
console.log(tasks)

agregarBtn.addEventListener('click', agregarTarea)
