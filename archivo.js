
// var variableAcumuladora = 0;
//     function ejemplo() {
//     var valor = parseInt($("#precio").val());
//     valor = isNaN(valor) ? 0 : valor;

//     //La variableAcumuladora tendrias que declararla fuera de la función
//     //de la forma como lo hacias la inicializabas cada vez
//     variableAcumuladora += valor;

//     $("#precio").val("");
//     $("#precio").focus();
//     $("#lista").text(variableAcumuladora);

//     }
        
        



class Product {
    
    constructor(precio, nombre) {
        this.precio = precio;
        this.nombre = nombre;
    }
}


class UserInterface {
    agregar(sec){
        const lista = document.getElementById("lista");
        const element = document.createElement("div");
        const cada = document.getElementById("segundo").name;
        element.innerHTML =  `
                <div class="card col-12">
                    <div class="">
                    <a href="#" class="btn btn-danger" style="float:right" name="delete">X</a>
                        <strong>${cada}</strong> <span class="btn col-2 float-right"> ${sec.precio}</span>         
                   </div>
                </div>
        `;
        lista.appendChild(element);
        this.resetForm();
        
    }

    otro(ter){
        const lista = document.getElementById("lista");
        const element = document.createElement("div");
        const cad = document.getElementById("tercero").name;
        element.innerHTML =  `
                <div class="card col-12">
                    <div class="">
                    <a href="#" class="btn btn-danger" style="float:right" name="delete">X</a>
                        <strong>${cad}</strong> <span class="btn col-2 float-right"> ${ter.precio}</span>         
                   </div>
                </div>
        `;
        lista.appendChild(element);
    }

    mas(prim){
        
        const intre = document.getElementById("precio").value;    
        const lista = document.getElementById("lista");
        const element = document.createElement("div");
        const ca = document.getElementById("primero").name;
        element.innerHTML =  `
                <div class="card col-12">
                    <div class="">
                    <a href="#" class="btn btn-danger" style="float:right" name="delete">X</a>
                        <strong>${ca}</strong> <span class="btn col-2 float-right"> ${prim.precio}</span>         
                   </div>
                </div>
        `;
        
        lista.appendChild(element);
        // total.innerHTML = `<div><h4>${toti}</h4>
        // </div>
        // `;
    }    
    
    resetForm() {
        document.getElementById("dale").reset();
    }


    delete(element) {
        if(element.name === "delete") {
            element.parentElement.parentElement.remove();
        }
    }

    
       
}


// Eventos del DOM
document.getElementById("dale").addEventListener("submit", function (e) {
    e.preventDefault();

    });

document.getElementById("lista").addEventListener("click", function(e) {
    const ui = new UserInterface();
    ui.delete(e.target);
    
    });
    
document.getElementById("primero").addEventListener("click", function(){
    const v = document.getElementById("precio").value;
    const n = document.getElementById("primero").name; // esta variable es por si la quiero concatenar pero realment no es necesaria para que aparezca el nombre del producto
    const prim = new Product(v);
    const ui = new UserInterface();
    variableAcumuladora = 0;
    if(v === "") {
        // v.setAttribute("placeholder", "Ingresar Importe");
        return false;    
    }
    
    ui.mas(prim);
    ui.resetForm();
    
    });    


document.getElementById("segundo").addEventListener("click", function(){
    
    const valor = document.getElementById("precio").value;
    const nombre = document.getElementById("segundo").name;
    const sec = new Product(valor);
    const ui = new UserInterface();

    if(valor === "") {
        // valor.setAttribute("placeholder", "Ingresar Importe");
        return false;    
    } 
            
    
    ui.agregar(sec);
    ui.resetForm();
    });    


document.getElementById("tercero").addEventListener("click", function() {
    const va = document.getElementById("precio").value;
    const val = document.getElementById("tercero").name;
    const ter = new Product(va);
    const ui = new UserInterface();

    if(va === "") {
        // va.setAttribute("placeholder", "Ingresar Importe");
        return false;    
    }
    ui.otro(ter);
    ui.resetForm();
        
   
    
    });

    
