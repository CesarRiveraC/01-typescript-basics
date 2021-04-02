/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends{ new (...args: any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty = 'newProperty';
        hello ="override";
    };
}

@classDecorator
class MiSupeClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("hola mundo");
  }
}

console.log(MiSupeClase);

const miClase = new MiSupeClase();
console.log(miClase.miPropiedad);
