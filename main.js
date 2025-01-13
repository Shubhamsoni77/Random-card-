let data = ()=>{
return fetch('https://randomuser.me/api/?results=12')
.then((data)=> data.json())
.then((data)=> {return data})
}

// data().then((data)=>{
//    // console.log(data.results);
   
//  data.results.map((data) => {
//    //  console.log(data)
//    // let body = document.querySelector("body")
//    let container = document.querySelector(".container")

//    const card = document.createElement("div")
//    card.className="card"

//    card.innerHTML = `
//    <img src="${data.picture.large}" alt="">

//    <h1> ${data.name.first}</h1>
//    <p> ${data.email}</p>
//    <h3> ${data.phone}</h3>`


//    container.appendChild(card) 
//  })

// })


// data().then()


data().then((data)=>{
  data.results.map((data)=>{
   let container = document.querySelector(".container")
   // console.log(container)
   
   const card = document.createElement('div')
   card.className = "card"
   
   card.innerHTML = ` <img src="${data.picture.large}" alt="">
       <h1> ${data.name.title} ${data.name.first} ${data.name.last} </h1> 
       <p> ${data.email} </p>
       <h3> ${data.phone} </h3>

        <div class="anchor">

        <a href=""><i class="fa-solid fa-phone-volume"></i>  </a>
        <a href=""><i class="fa-solid fa-envelope"></i></a>

       </div> 

       
   `
   let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
   card.style.backgroundColor = randomColor
     
   container.appendChild(card)
  }) 

})

