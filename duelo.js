class card{
    constructor(nombre, costo){
        //atributos
        this.nombre = nombre;
        this.costo = costo;
    }
}

class unidad extends card{
    constructor (nombre, costo, power, resistencia){
        //atributos
        super(nombre, costo);
        this.power = power;
        this.resistencia = resistencia;
    }
    //metodo
    atacar (target){
        if (target instanceof unidad){
            target.resistencia -= this.power;
        }
    }
}

class effect extends card{
    constructor(nombre, costo,texto, afecta, magnitud){
        //atributos
        super(nombre, costo);
        this.texto = texto;
        this.afecta = afecta;//o power o resistenica
        this.magnitud = magnitud;
    }
    //metodo
    
    aplicar (target){
        if(target instanceof unidad){
            if (this.afecta === "power"){//si afecta a power
                target.power += this.magnitud;//le suma esta magnitud
            }else if (this.afecta === "resistencia"){//si afecta a resistencia
                target.resistencia += this.magnitud;//le suma esta magnitud
            }
        }
    }
}
const unidad1 = new unidad ("Ninja Cinturon Rojo", 3, 3, 4);
console.log(unidad1);

const effect1= new effect ("Algoritmo dificil", 2, "aumentar la resistencia del objetivo en 3", "resistencia", +3);
console.log(effect1);

effect1.aplicar(unidad1);
console.log (unidad1);


const unidad2 = new unidad ("Ninja Cinturon Negro", 4, 5, 4);
console.log(unidad2);

const effect2 = new effect ("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "resistencia", -2);
console.log (effect2);

effect2.aplicar(unidad1);
console.log(unidad1);


const effect3 = new effect ("Propagacion en pareja", 3, "aumentar el poder del objetivo en 2", "power", +2);
console.log(effect3);

effect3.aplicar(unidad1);


