/*
    ===== Código de TypeScript =====
*/

 let habilidades : string[] = ['bash','counter','healing'];

 interface Personaje{
     nombre : string;
     hp : number;
     habilidades : string[];
     puebloNatal? : string;
 }

 const personaje : Personaje = {
     nombre:'Strider',
     hp: 100,
     habilidades: ['Bash','Counter','Healing']
 }

 personaje.puebloNatal = 'Pueblo paleta';

 console.table(personaje);