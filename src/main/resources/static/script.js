console.log("This script works")

//fetch('http://localhost:8080/donuts',
//{  mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}})
fetch('http://localhost:8080/donuts')
    .then(response => response.json())
   //.then(json => json)
   .then(json => {
   for(el in json){
         console.log(json[el])
         // console.log(json[el].name)
         let tbody = document.querySelector("tbody")
         let tr = document.createElement("tr")
 tr.innerHTML = `<td>${json[el].id}</td><td>${json[el].name}</td><td>${json[el].frosted? 'frosted':'Not frosted'}</td>
 <td>${json[el].donutType}</td>
 <td><i class="fa fa-trash" style="cursor:pointer" onclick="deleteItem(${json[el].id})"></i></td>
             <td><i class="fas fa-pencil-alt" onclick="updateItem()"></i></td>`
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
 fetch(`http://localhost:8080/donut/${id}`, {
     method: 'DELETE',
 })
 .then(item.remove())
 .then(console.log(`this works`))
 

}

// update method that will be tied to pencil icon

const updateItem = () => {
  console.log("update works")
}





const addItem = () => {

let nameInput = document.getElementById("name").value
let frostedInput = document.getElementById("frosted").value
let typeInput = document.getElementById("type").value


let sampleDonut = {
      name: nameInput,
      frosted: frostedInput,
      donutType: typeInput
}

  console.log(sampleDonut)
  fetch(`http://localhost:8080/donut`, {
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
      },
      method: 'POST',
      body: JSON.stringify(sampleDonut)
  
  }).then(console.log("cake posted!"))
}