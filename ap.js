
// aca van todos los productos que necesite agregar a la lista cada vez que se modifique
const productos = [
    { nombre: "Comida" },
    { nombre: "Ropa" },
    { nombre: "Material" }
]; //array

const carrito = []; //array que va acumulando objetos

function actualizarCarrito() {
    const list = document.getElementById('carrito');
    let total = 0;
    const totalEl = document.getElementById('carrito_total');

    list.innerHTML = '';
    for(let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
        list.innerHTML += `
        <div>
            <div class="card-body col-12" name="factura"><strong>${carrito[i].nombre}</strong>:
                <a href="#" style="float:right" class="far fa-trash-alt" name="delete"></a>
                <span class="mr-3" style="float:right">$ ${carrito[i].precio.toFixed(2)}</span>
            </div>
        </div>
        `;
    }
    totalEl.innerHTML = total.toFixed(2);
}

function submitHandler(e) {
    e.preventDefault();
    const clickedForm = e.target;
    const hInput = clickedForm.firstElementChild;
    const precio = document.getElementById('precio').value;

    if(!precio){
        return false;
    }

    // esta accion se ejecuta cuando se hace click porque se le asignó esta funcion a traves de la funcion submitHandler
    // la variable carrito es un array que va acumulando objetos
    carrito.push({      //esto agrega OBJETOS al array 'carrito'
        nombre: hInput.name, //este es el nombre del primer elemento hijo del producto
        precio: parseFloat(precio) // el valor del input que tiene como id la palabra 'precio'
    });

    document.getElementById('precio').value = '';

    actualizarCarrito();

}

function inicio() {
    const contenedor = document.getElementById("productos"); //selecccionar el elemento desde donde se muestra la lista de productos
        //con este bucle inserto un formulario por cada producto
    for(let i = 0; i < productos.length; i++) {
        contenedor.innerHTML += `
        <form action="guardar.php" method="POST" id="dos" name="dos" class="producto">
            <input type="hidden" id="uno" name="${productos[i].nombre}">
            <button class="btn btn-primary btn-block mb-2" type="submit">${productos[i].nombre}</button>
        </form>    
        `;
    }

    
    const col = document.getElementsByClassName("producto");
    let forms = [...col]

    forms.forEach(function(form){
        form.addEventListener('submit', submitHandler);
        
        
    })
   
    

}    



inicio();

