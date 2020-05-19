//This is my script file
console.log("This script works")

//fetch('http://localhost:8080/donuts',
//{  mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}})
fetch('/donuts')
  .then(response => response.json())
  //.then(json => json)
  .then(json => {
    for (el in json) {
      console.log(json[el])
      // console.log(json[el].name)
      // //${json[el].frosted}
      //${json[el].frosted ? "frosted" : "not frosted"}
      let tbody = document.querySelector("tbody")
      let tr = document.createElement("tr")
      tr.setAttribute("contenteditable","false")
      tr.classList = `row-${json[el].id} item`
      tr.innerHTML = `<td>${json[el].id}</td> 
      <td id="${json[el].id}-name">${json[el].name}</td>
      <td id="${json[el].id}-frosted">
     
         
            <label class="checkbox">
            <input id="${json[el].id}-checkbox" type="checkbox" ${json[el].frosted ? "checked" : ""}>
          </label>    
              
      </td>
 <td id="${json[el].id}-type">${json[el].donutType}</td>
 <td><i class="fa fa-trash icon-${json[el].id}" style="cursor:pointer" onclick="deleteItem(${json[el].id})"></i></td>
 <td><i class="fas fa-pencil-alt icon-${json[el].id}" style="cursor:pointer" onclick="updateItem(${json[el].id})"></i></td>
 <td><i class="fas fa-save icon-${json[el].id}" style="cursor:pointer" onclick="saveItem(${json[el].id})"></i></td>`
 tbody.appendChild(tr)
         }

  })

//.then(json => json.array.forEach(element => {
//        document.querySelector(tbody)
//         let tr=document.createElement("tr")
//    }))
// .then(json => JSON.stringify(json))
//   .then(data => Document.querySelector(".dummy").innerHTML = data)
// delete method that is tied to the trashcan icon

const deleteItem = (id) => {
  let item = document.querySelector(`.row-${id}`)
  fetch(`/donut/${id}`, {
    method: 'DELETE',
  })
    .then(item.remove())
    .then(console.log(`this works`))


}

// update method that will be tied to pencil icon

const updateItem = (id) => {
  let item = document.querySelector(`.row-${id}`)
  item.toggleAttribute("contenteditable")

}

const saveItem = (id) => {
  let nameInput = document.getElementById(`${id}-name`).innerText
  let frostedInput = document.getElementById(`${id}-frosted`).innerText
  let typeInput = document.getElementById(`${id}-type`).innerText

  let sampleDonut = {
    name: nameInput,
    frosted: frostedInput,
    donutType: typeInput
  }
  console.log(sampleDonut)
  fetch(`/donut/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(sampleDonut)

    
  })
  .then (response => response.json)
  .then(json => console.log(json))
  .then(location.reload())


}




const addItem = () => {

  let nameInput = document.getElementById("name").value
  //let frostedInput = document.getElementById("frosted").value
  let frostedInput = (document.getElementById(`checkbox`).checked ? true : false)
  let typeInput = document.getElementById("type").value


  let sampleDonut = {
    name: nameInput,
    frosted: frostedInput,
    donutType: typeInput
  }

  console.log(sampleDonut)
  fetch(`/donut`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(sampleDonut)

  })
  .then(console.log("cake posted!"))
  .then(location.reload())
}