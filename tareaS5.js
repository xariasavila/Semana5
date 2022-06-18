// Fibonacci 0 al 1000

fibo1 = 0;
fibo2 = 1;
console.log(fibo1);
console.log(fibo2);

while (fibo2 <= 1000) {
  f = fibo1 + fibo2;
  fibo1 = fibo2;
  fibo2 = f;
  if (fibo2 <= 1000) {
    console.log(fibo2);
  }
}

// Fibonacci 0 al 1000 PAR
fibo1 = 0;
fibo2 = 1;

console.log(fibo1);
while (fibo2 <= 1000) {
  f = fibo1 + fibo2;
  fibo1 = fibo2;
  fibo2 = f;
  if (fibo2 % 2 == 0 && fibo2 <= 1000) {
    console.log(fibo2);
  }
}

// Fibonacci 0 al 1000 IMPAR

fibo1 = 0;
fibo2 = 1;
console.log(fibo2);
while (fibo2 <= 1000) {
  f = fibo1 + fibo2;
  fibo1 = fibo2;
  fibo2 = f;
  if (fibo2 % 2 != 0 && fibo2 <= 1000) {
    console.log(fibo2);
  }
}

//DEVOLVER EN MAYUSCULA ARREGLO
let pokeones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
const pokemonesMayuscula = pokeones.map((pokemon) => pokemon.toUpperCase());
console.log(pokemonesMayuscula);

//2.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
  {
    nombre: "Pikachu",
    tipo: "Electrico",
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
  },
  {
    nombre: "Squirtle",
    tipo: "Agua",
  },
  {
    nombre: "Charmeleon",
    tipo: "Fuego",
  },
  {
    nombre: "Weedle",
    tipo: "bicho",
  },
  {
    nombre: "Charizard",
    tipo: "Fuego",
  },
];

const pokemonesFuego = pokemones.filter((pokemon) => pokemon.tipo === "Fuego");
console.log(pokemonesFuego());
