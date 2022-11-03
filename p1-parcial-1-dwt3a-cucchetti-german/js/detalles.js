const btnRegresar = document.querySelectorAll('button')[0];
const contenedor = document.querySelector('#contenedor'); 



btnRegresar.addEventListener('click', () => {
    location.href = '../index.html';
} )
   

let id = location.search.split('=')[1];
const endPoint = `https://pokeapi.co/api/v2/pokemon/`+id ;

  
                   
            fetch(endPoint)
                .then(x=>x.json())
                .then(x=>{
                                              
                    contenedor.innerHTML  += `
                    
                     <div>
                     <h1 class="text-center">${(x.name).toUpperCase()}</h1>
                     </div>
                     <div class="container-pokemon-all d-flex justify-content-center ">
                    <div class="contenedor row " id="contenedor2">
                    
                    <div class="col-md-auto py-4 my-4 mx-4 pokeback">
                    <h2 class="text-center">${(x.name).toUpperCase()}</h2>                     
                    <h3 class="text-center">#${x.id}<h3>
                    <div class="imagen-contenedor">
                        <img class="img-fluid mx-auto d-block" src="${x.sprites.front_default}" alt="${x.name}">
                    </div>
                    <h4 class="text-center">Tipo: ${x.types[0].type.name}<h3>
                    <h4 class="text-center">Peso: ${x.weight}<h3>
                    <h4 class="text-center">Status: ${x.stats[0].base_stat}<h3>
                   </div>`;
                ;
                           
            
            })
         




