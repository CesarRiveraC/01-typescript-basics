/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Cesar",
};
const pasajero2: Pasajero = {
  nombre: "Meli",
  hijos: ["Nati", "Gabri"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
