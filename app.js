// Lista de productos
const productos = [
    { nombre: "Comida" },
    { nombre: "Ropa" },
    { nombre: "Material" }
];

// Lista de productos y precio seleccionados
const carrito = [];

function actualizarCarrito() {
    const list = document.getElementById('carrito');

    let total = 0;
    const totalEl = document.getElementById('carrito_total');

    list.innerHTML = '';
    for(let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
        list.innerHTML += `
            <li>${carrito[i].nombre} - ${carrito[i].precio.toFixed(2)}</li>
        `;
    }

    totalEl.innerHTML = total.toFixed(2);
}

// Listener que se le agrega a cada boton de producto.
// Cada vez que se le hace click a alguno se ejecuta esta funcion
function submitHandler(e) {
    e.preventDefault();
    const clickedForm = e.target;
    const hInput = clickedForm.firstElementChild;
    const precio = document.getElementById('precio').value;

    if (!precio){
        return false;
    }

    // Agregar al carrito
    carrito.push({
        nombre: hInput.name, 
        precio: parseFloat(precio)
    });

    document.getElementById('precio').value = '';

    actualizarCarrito()
}

// Funcion que se ejecuta cuando se renderiza la pagina.
function hinyziar(){
    // Elemento que va a contener los productos
    const container = document.getElementById('productos');

    // Por cada producto insertar en el HTML un formulario
    for (let i = 0; i < productos.length; i++) {
        container.innerHTML += `
        <form class="producto">
            <input type="hidden" name="${productos[i].nombre}">
            <button class="btn btn-secondary" type="submit">${productos[i].nombre}</button>
        </form>
        `;
    }

    // Agrega a cada formulario un listener al evento submit
    // y delega a la funcion `agregarAlCarrito` para que controle 
    // lo que pasa al hacer click en uno de los productos
    const col = document.getElementsByClassName('producto');
    let forms = [...col]

    forms.forEach(function(form){
        form.addEventListener('submit', submitHandler);
    })
}

hinyziar();