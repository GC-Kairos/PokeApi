const btnMostrarTodo = document.querySelectorAll('button')[0]; 
const contenedor = document.querySelector('#contenedor'); 




   

function traerTodo () {
  
      
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then(res=>res.json())
    .then(res=>{
        contenedor.innerHTML = '';
        for(let i of res.results){ 
            
            fetch(i.url)
                .then(x=>x.json())
                .then(x=>{
                                              
                    contenedor.innerHTML  += `<div class="col-md-auto py-4 my-4 mx-4 pokeback">
                    <h2 class="text-center">${(x.name).toUpperCase()}</h2>                     
                    <h3 class="text-center">#${x.id}<h3>
                    <div class="imagen-contenedor">
                        <img class="img-fluid mx-auto d-block" src="${x.sprites.front_default}" alt="${x.name}">
                    </div>
                    <button type="button" onclick='location.href="../html/detalles.html?id=${x.id}"' class="btn btn-primary my-4 d-flex mx-auto">+INFO</button>
                </div>`;
                ;
                           
            
            })
        } 

})
}

