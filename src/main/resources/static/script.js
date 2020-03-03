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
 <td>${json[el].donutType}</td>`
tbody.appendChild(tr)
}

})

//.then(json => json.array.forEach(element => {
//        document.querySelector(tbody)
//         let tr=document.createElement("tr")
//    }))
   // .then(json => JSON.stringify(json))
 //   .then(data => Document.querySelector(".dummy").innerHTML = data)