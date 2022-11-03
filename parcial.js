'use strict';

/*
 *  Cucchetti
 */

let productos = [
    {
        id: 1,
        nombre: 'Amd Ryzen 9 5900X',
        descripcion: 'Procesador AMD RYZEN 9 5900X 4.8 Ghz - AM4',
        precio: 74499,
        imagen: 'img/producto1.jpeg',
        categoria: '1',
    },
    {
        id: 2,
        nombre: 'Radeon RX 6900 XT 16Gb',
        descripcion: 'Placa De Video Radeon RX 6900 XT 16Gb Gigabyte Gaming Oc',
        precio: 245199,
        imagen: 'img/producto2.jpeg',
        categoria: '2',
    },
    {
        id: 3,
        nombre: 'Monitor Gamer 24" Viewsonic Curvo',
        descripcion: 'Monitor Gamer 24" Viewsonic Curvo Full Hd 165Hz 1Ms Dp Vx2468-PC-MHD',
        precio: 47999,
        imagen: 'img/producto3.jpeg',
        categoria: '3',
    },
    {
        id: 4,
        nombre: 'Monitor Gamer 27" Viewsonic Curvo',
        descripcion: 'Monitor Gamer 27" Viewsonic Curvo Full Hd 165Hz 1Ms VX2768-PC-MHD',
        precio: 62799,
        imagen: 'img/producto4.jpeg',
        categoria: '3',
    },
    {
        id: 5,
        nombre: 'Amd Ryzen 5 5600G',
        descripcion: 'Procesador Amd Ryzen 5 5600G 4.4 Ghz - AM4',
        precio: 33199,
        imagen: 'img/producto5.jpeg',
        categoria: '1',
    },
    {
        id: 6,
        nombre: 'LHR GeForce RTX 3060',
        descripcion: 'Placa De Video LHR GeForce RTX 3060 12Gb Galax Oc',
        precio: 99999,
        imagen: 'img/producto6.jpeg',
        categoria: '2',
    },
];


const d        = document;
let contenedor = d.getElementsByTagName('main')[0];
let footer     = d.getElementsByTagName('footer')[0];
let carrito    = [];

let div, divConPro, divConPro2, divConPro3, divInfoCarrito, divModalCarrito, divResumenChek, divModalCheckout, divInputNombre, divInputNumero, divInputMail, divInputFecha, divInputDom, divInputPago, divInputSend, form, label, input, datalistPago, optionValue1, optionValue2,optionValue3,p, p2, p3, imag, h2, h3, hr, ul, buttonVerCarrito, buttonVerProducto, buttonAgregar, buttonVaciar, buttonCheck, span1, span2, link1, link2, link3, linkCarrito, mensajeA;


//CREO EL DOM DE INFOCARRITO


divInfoCarrito = d.createElement('div');
divInfoCarrito.setAttribute('id','minicarrito');
contenedor.append(divInfoCarrito);

p = d.createElement('p');
divInfoCarrito.append(p);

span1 = d.createElement('span');
p.innerHTML=  'ítems agregados: ';
p.setAttribute('id', 'cant1');
p.append(span1);
span1.innerHTML= 0;

p2 = d.createElement('p');
p.after(p2);
p2.setAttribute('id', 'total1');
span2 = d.createElement('span');
p2.append(span2);
 

p3 = d.createElement('p');
p3.innerHTML=`Filtrar por <a class='filtroa' data-categoria="1" href="#">Procesadores</a> | <a class='filtroa'  data-categoria="2" href="#">Placas de video</a> | <a class='filtroa'  data-categoria="3" href="#">Monitores</a> | <a class='filtroa'  data-categoria="0" href="#">Sin filtros</a>`;
p2.after(p3);


buttonVerCarrito = d.createElement('button');
buttonVerCarrito.innerHTML=`Ver carrito`;
p3.after(buttonVerCarrito);

buttonVerCarrito.addEventListener ('click', (e) => {
    divModalCarrito.style.display='flex';

}); 


h2 = d.createElement('h2');
h2.setAttribute('class', 'titulo');
h2.innerHTML="Productos";
divInfoCarrito.after(h2);

//Fin del mini carrito
let h2Class = d.getElementsByClassName('titulo')[0];

let filtrosA = d.querySelectorAll('.filtroa')

//FILTTROS HASTA LINEA 166

for (let filtro of filtrosA) {

filtro.addEventListener('click', e => {
    e.preventDefault();
    Filtrar(e.target);
    
    


    if (!div || div <=1) {

        div = d.createElement('div');
        div.setAttribute('class', 'imgbanner');
        imag = d.createElement('img');
        imag.setAttribute('src', 'img/banner.jpg');
        imag.style.width='100%'
        div.style.margin='auto';
        div.append(imag);
        h2Class.before(div);


        setTimeout(() =>{
          
                     
            div.remove();
                     
                
    
    }, 10000);
    

    }
})
}


function Filtrar(filtro) {
    MostrarProductos(filtro.dataset.categoria);

}

let info           = d.querySelector('#minicarrito');
let modalCarrito   = d.querySelector('#modalCarrito');
let modalProducto  = d.querySelector('#modalProducto');
//CREO EL DOM DE PRODUCTOS
    divConPro = d.createElement('div');
    divConPro.setAttribute('class','productos');
    h2.after(divConPro);


MostrarProductos();

function MostrarProductos (filtro = 0) {
    
  

    divConPro.innerHTML='';

    for (let item of productos.filter((valor) => {return (valor.categoria==filtro || filtro == 0) ? true: false;})) {
    
                  
        let productoList   = d.querySelector('.productos');
   
    
        divConPro2 = d.createElement('div');
        divConPro2.setAttribute('class','cont-pro');
        divConPro.appendChild(divConPro2);
      
        imag= d.createElement('img');
        imag.setAttribute('src', item.imagen);
        divConPro2.append(imag);
        
        divConPro3= d.createElement('div');
        imag.after(divConPro3);


        h3 = d.createElement('h3');
        h3.innerHTML=`${item.nombre}`;
        divConPro3.append(h3);
      
        p = d.createElement('p');
        p.innerHTML=`${item.descripcion}`;
        h3.after(p);
      
        p2 = d.createElement('p');
        p2.innerHTML=`Precio: $`;
        p.after(p2);
        span1 = d.createElement('span');
        p2.append(span1);
        span1.innerHTML=`${item.precio}`;
      
        p3 = d.createElement('p');
        p3.innerHTML=`Categoría: ${item.categoria}`;
        p2.after(p3);
      
        buttonVerProducto = d.createElement('button');
        buttonVerProducto.setAttribute('class','ver');
        buttonVerProducto.setAttribute('data-id', item.id);
        buttonVerProducto.innerHTML="Ver producto";
        p3.after(buttonVerProducto);
      
        buttonVerProducto.addEventListener ('click', CrearModal);
        
      }

    }

// CREO LAS VENTANAS MODAL 1 - AGREGAR PRODUCTO


        
function Agregar (e) {

let idProducto   = e.target.dataset.id;
let producto     = productos.filter((prod) => {return prod.id==idProducto})[0];
let existe       = false;



for (let item of carrito){
    if (item.id == idProducto) {

        item.cantidad++;
        existe = true;
    }
}

if (!existe) {

    producto.cantidad = 1;
    carrito.push(producto);
   }  

localStorage.setItem('Bitcoin', JSON.stringify(carrito));

           let buttonMensaje = d.querySelector('.add')
        mensajeA = d.createElement('p');
        mensajeA.style.color = 'green';
        mensajeA.innerHTML = 'El producto se agregó al carrito';
        buttonMensaje.after(mensajeA);
      
    setInterval( () => {
        mensajeA.remove();
  
    }, 1500);
  
Mostrar();

}



function Mostrar (e) {

    let li;
    let ul          = d.getElementById('ulCarrito');
    let infoCarrito = d.getElementById('infoTotal');
    let infoCarP    = d.getElementById('total1');
    let cantCarS    = d.getElementById('cant1');
   

    if (localStorage.getItem('Bitcoin')!=null) {

        carrito = JSON.parse(localStorage.getItem('Bitcoin'));
    }

        
    let totalCant   = 0;
    let totalPrecio = 0;
    ul.innerHTML='';

    for (let producto of carrito) {

        
        li = d.createElement('li');
        li.setAttribute('class', 'conta');
        li.innerHTML=`${producto.nombre} <span>$${producto.precio}</span> <span>${producto.cantidad}items</span>`;
        
        linkCarrito = d.createElement('a');
        linkCarrito.setAttribute('class', 'btn-adel');
        linkCarrito.setAttribute('href', '#');
        linkCarrito.setAttribute('data-id', producto.id);
        linkCarrito.innerHTML = `Eliminar`;
        li.append(linkCarrito);
        ul.appendChild(li);


        linkCarrito.addEventListener('click', (e) => {
            e.preventDefault();
            let idProducto   = e.target.dataset.id;
            
//ELIMINAR ITEM DE A UNO

          for (let indice in carrito) {
                if (carrito[indice].id == idProducto) {
                    if (carrito[indice].cantidad == 1) {
                        carrito.splice(indice, 1);
                    } else {
                            carrito[indice].cantidad -= 1;
                                                             }
                }
             localStorage.setItem('Bitcoin', JSON.stringify(carrito));
             Mostrar();

          }
               
        })

      
        totalCant   += parseInt(producto.cantidad);
        totalPrecio += parseInt(producto.cantidad*producto.precio);

        infoCarrito.innerHTML= `Items:  <span>${totalCant}</span> Total: $<span> ${totalPrecio}</span>`;
        cantCarS.innerHTML= `Items agregados: ${totalCant}`;
        infoCarP.innerHTML= `El total es $: <span>${totalPrecio}</span>`;


}}



function CrearModal (e) {
        
    let idProducto = e.target.dataset.id;
    let divModal;
    let producto = productos.filter((prod) => {
        return prod.id==idProducto})[0];

    divModal = d.createElement('div');
    divModal.setAttribute('id', 'modalProducto');
    divModal.setAttribute('class', 'modal');
    footer.after(divModal);
        
    link1 = d.createElement('a');
    link1.setAttribute('href', 'javascript:void(0)');
    link1.setAttribute('class', 'cerrar');
    link1.innerHTML= 'X';
    divModal.append(link1);
        
    imag = d.createElement('img');
    imag.setAttribute('src', producto.imagen);
    link1.after(imag);
    
    h3 = d.createElement('h3');
    h3.innerHTML=`${producto.nombre}`;
    imag.after(h3);
    
    p = d.createElement('p');
    p.innerHTML=`Descripción: ${producto.descripcion}`;
    h3.after(p);
    
    p2 = d.createElement('p');
    p2.innerHTML=`Precio: $${producto.precio}`;
    p.after(p2);
    
    p3 = d.createElement('p');
    p3.innerHTML=`Categoría: ${producto.categoria}`;
    p2.after(p3);
    
    buttonAgregar = d.createElement('button');
    buttonAgregar.setAttribute('class','add');
    buttonAgregar.setAttribute('data-id', producto.id);
    buttonAgregar.innerHTML="Agregar";
    p3.after(buttonAgregar);
    buttonAgregar.addEventListener('click', Agregar);
                
    
    link1.addEventListener('click', (e) => {
        divModal.remove();
    })

  
    divModal.style.display='flex';

}

// CREO LAS VENTANAS MODAL 2 - CARRITO

divModalCarrito = d.createElement('div');
divModalCarrito.setAttribute('id', 'modalCarrito');
divModalCarrito.setAttribute('class', 'modal');
footer.append(divModalCarrito);

link1 = d.createElement('a');
link1.setAttribute('href', 'javascript:void(0)');
link1.setAttribute('class', 'cerrar');
link1.innerHTML= 'X';
divModalCarrito.append(link1);

link1.addEventListener('click', (e) => {
    divModalCarrito.style.display="none";
 } );

p = d.createElement('p');
p.setAttribute('id', 'infoTotal');
link1.after(p);

hr = d.createElement('hr');
p.after(hr);

ul= d.createElement('ul');
ul.setAttribute('id', 'ulCarrito');
hr.after(ul);


buttonVaciar = d.createElement('button');
buttonVaciar.setAttribute('class','hole');
buttonVaciar.innerHTML="Vaciar";
ul.after(buttonVaciar);

buttonVaciar.addEventListener('click', (e) => {
   
    
    localStorage.clear();
    carrito = [];
    ul.innerHTML='';
    window.location.reload();           
    Mostrar();
    



})


buttonCheck = d.createElement('button');
buttonCheck.setAttribute('class','check');
buttonCheck.innerHTML="Ir al checkout";
buttonVaciar.after(buttonCheck);


buttonCheck.addEventListener('click', Modal3)






// CREO LAS VENTANAS MODAL 3 - CHECKOUT
   
function Modal3(e) {

    divModalCheckout = d.createElement('div');
    divModalCheckout.setAttribute('id', 'modalCarrito');
    divModalCheckout.setAttribute('class', 'modal');
    footer.append(divModalCheckout);
    
    link1 = d.createElement('a');
    link1.setAttribute('href', 'javascript:void(0)');
    link1.setAttribute('class', 'cerrar');
    link1.innerHTML= 'X';
    divModalCheckout.append(link1);

 
    link1.addEventListener('click', (e) => {
        divModalCheckout.remove();
    })
    divModalCheckout.style.display='flex';
      
         
         h2 = d.createElement('h2');
     h2.innerHTML = 'Resumen';
     divModalCheckout.append(h2);
    
    let totalPrecio = 0, totalCant = 0;
    p = d.createElement('p')
    h2.after(p);
    for (let producto of carrito) {

        totalCant += producto.cantidad
        
        totalPrecio += producto.cantidad*producto.precio;
                        
       
       p.innerHTML= `Items:  <span>${totalCant}</span> <span> Precio Final: ${totalPrecio} </span> `;
           
       
     }
   
     Mostrar();

       
    h2 = d.createElement('h2');
    h2.innerHTML = 'Checkout'
    divModalCheckout.append(h2);
    
    form = d.createElement('form');
    h2.after(form);
    
    divInputNombre = d.createElement('div');
    divInputNombre.setAttribute('class', 'form-block');
    form.append(divInputNombre);
    
    label = d.createElement('label');
    label.innerHTML = 'Nombre y apellido:';
    divInputNombre.append(label);
    
    input = d.createElement('input')
    label.setAttribute('type', 'text');
    label.setAttribute('for', 'nombre');
    input.setAttribute('name', 'nombre');
    input.setAttribute('required', 'true');
    input.setAttribute('placeholder', 'Ingresé su nombre y apellido');
    label.after(input);
    
    
    divInputNumero = d.createElement('div');
    divInputNumero.setAttribute('class', 'form-block');
    divInputNombre.after(divInputNumero);
    
    label = d.createElement('label');
    label.innerHTML = 'Teléfono:';
    divInputNumero.append(label);
    
    input = d.createElement('input')
    label.setAttribute('type', 'tel');
    label.setAttribute('for', 'tel');
    input.setAttribute('name', 'tel');
    input.setAttribute('required', 'true');
    
    input.setAttribute('placeholder', 'Ingresé su número de teléfono');
    label.after(input);
    
    
    divInputMail = d.createElement('div');
    divInputMail.setAttribute('class', 'form-block');
    divInputNumero.after(divInputMail);
    
    label = d.createElement('label');
    label.innerHTML = 'Email:';
    divInputMail.append(label);
    
    input = d.createElement('input')
    label.setAttribute('type', 'email');
    label.setAttribute('for', 'email');
    input.setAttribute('name', 'email');
    input.setAttribute('required', 'true');
    
    input.setAttribute('placeholder', 'nombre@dominio.com');
    label.after(input);
    
    
    divInputDom = d.createElement('div');
    divInputDom.setAttribute('class', 'form-block');
    divInputMail.after(divInputDom);
    
    label = d.createElement('label');
    label.innerHTML = 'Domicilio:';
    divInputDom.append(label);
    
    input = d.createElement('input')
    label.setAttribute('type', 'text');
    label.setAttribute('for', 'text');
    input.setAttribute('name', 'text');
    input.setAttribute('required', 'true');
    
    input.setAttribute('placeholder', 'Ej: Av. Cabildo 2000 5C');
    label.after(input);
    
    divInputFecha = d.createElement('div');
    divInputFecha.setAttribute('class', 'form-block');
    divInputDom.after(divInputFecha);
    
    input = d.createElement('input');
    input.setAttribute('type', 'datetime-local');
    input.setAttribute('for', 'datetime-local');
    input.setAttribute('name', 'datetime-local');
    divInputFecha.append(input);
    
    label = d.createElement('label');
    label.innerHTML = 'Fecha de entrega:';
    input.before(label);
    
    
    divInputPago = d.createElement('div');
    divInputPago.setAttribute('class', 'form-block');
    divInputFecha.after(divInputPago);
    
    
    
    label = d.createElement('label');
    label.innerHTML = 'Método de Pago:';
    label.setAttribute('for', 'pago');
    input = d.createElement('input');
    input.setAttribute('for', 'pago');
    input.setAttribute('name', 'pago');
    input.setAttribute('list', 'pagos');
    
    divInputPago.append(label);
    label.after(input);
    
    datalistPago = d.createElement('datalist');
    datalistPago.setAttribute('id', 'pagos')
    optionValue1 = d.createElement('option');
    optionValue1.setAttribute('value', 'Efectivo')
    optionValue2 = d.createElement('option');
    optionValue2.setAttribute('value', 'Tarjeta de Crédito');
    optionValue3 = d.createElement('option');
    optionValue3.setAttribute('value', 'Tarjeta de Débito');
    input.after(datalistPago)
    datalistPago.appendChild(optionValue1);
    optionValue1.after(optionValue2);
    optionValue2.after(optionValue3);
    
    
    divInputSend= d.createElement('div');
    divInputSend.setAttribute('class', 'form-button');
    divInputPago.after(divInputSend);
    
    input = d.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('value', 'Continuar');
    divInputSend.append(input);
    

    
}

Mostrar();

