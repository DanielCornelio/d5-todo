const tbody = document.querySelector('.tb')
const agregarBtn = document.querySelector('.btnAgregar')
const toggleTask = document.querySelector('#toggleTask')
let input = document.querySelector('.inputTask')
const creadas = document.querySelector('.count__creadas')
const concluidas = document.querySelector('.count__concluidas')

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


const contar = ()=>{
  let total = tasks.length
  let terminadas = tasks.filter((task) => task.completada).length
  creadas.innerText = total
  concluidas.innerText = terminadas
}
const generarIdUnico = () => {
  if (tasks.length === 0) return 1;
  return Math.max(...tasks.map(task => task.id)) + 1;
};
const actualizarEstado = (id) =>{
  const task = tasks.find((task) => task.id === id);
  task.completada = !task.completada;
  mostrarTareas();

}
const eliminarTarea = (id) =>{
  const indeceTarea = tasks.findIndex(task => task.id ===id)
  tasks.splice(indeceTarea, 1);
  mostrarTareas()

}

const mostrarTareas = () => {
  let html = "";
  tasks.forEach(task => {
    
    html += `
      <tr>
        <td><span id="toggleTask" onclick='actualizarEstado(${task.id})'>${task.completada ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle"></i>'}</span></td>
        <td>${task.id}</td>
        <td>${task.descripcion}</td>
        <td><span class='eliminar' onclick='eliminarTarea(${task.id})'><i class="fa-solid fa-trash-can"></i></span></td>
      </tr>
    `
  })
  contar()
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
    id: generarIdUnico(),
    descripcion: valor,
    completada: false
  }
  tasks.push(tarea)
  input.value = ''
  mostrarTareas()

}



agregarBtn.addEventListener('click', agregarTarea)
