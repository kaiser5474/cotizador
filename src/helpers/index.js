export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calculoMarca(marca, resultado){
    //Americano 15%
    if(marca === "Americano"){
        resultado = resultado + (resultado * 15/100);
    }

    //Europeo 30%
    if(marca === "Europeo"){
        resultado = resultado + (resultado * 30/100);
    }

    //Asiatico 5%
    if(marca === "Asiatico"){
        resultado = resultado + (resultado * 5/100);
    }
    return resultado;
} 

export function calculoPlan(plan, resultado){
     //Basico 20%        
     if(plan === "1"){
        resultado *= 1.2; 
    }
    //Completo 50%
    if(plan === "2"){
        resultado *= 1.5; 
    }
    return resultado;
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
}