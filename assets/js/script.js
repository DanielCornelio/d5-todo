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

  let html = "";
  tasks.map(task =>{
    html += `
      <tr>
        <td><input type="checkbox" name="" id="" readonly ${task.completada?'checked':''}></td>
        <td>${task.id}</td>
        <td>${task.descripcion}</td>
        <td></td>
        <td></td>
      </tr>
    `
  })
  tbody.innerHTML += html