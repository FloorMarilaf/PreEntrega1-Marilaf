
alert("Ingrese la opcion del producto que desea comprar, para salir ingrese 0")
let seleccionarProducto = Number(prompt( "1-Campera $4000 2-Remera $2000 3-Short $3000"))
let seleccionarCantidad;
let total = 0;


const cantidad =(cant, precio) => {
    return cant * precio
}


while(seleccionarProducto != 0) {
    switch(seleccionarProducto) {
        case 1:
         seleccionarCantidad = Number(prompt("El producto seleccionado es Campera, ingrese la cantidad"))
                    total += cantidad(seleccionarCantidad, 4000)
            break;

            case 2:
            seleccionarCantidad= Number(prompt("El producto seleccionado es Remera, ingrese la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
            break;
        case 3:
            seleccionarCantidad= Number(prompt("El producto seleccionado es Short, ingrese la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
        break;

        default:
            break;
   
    }

    seleccionarProducto = Number(prompt("1-Campera $4000 2-Remera $2000 3-Short $3000"))
}

alert("el total de la compra es : " + total)

const envio =() =>{
    if(total >=10000) {
    alert("El envio es gratis")
    }else{
        total += 1000
        alert("El costo de envio es de 1000, el total es:" + total)
    }
}

envio()