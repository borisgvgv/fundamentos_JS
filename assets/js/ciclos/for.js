const heroes = [
  "EL Pidio Valdes",
  "Superman",
  "Batman",
  "Mujer Maravilla",
  "Aquaman",
];

console.warn("For tradicional");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

for (let i = 0; i < heroes.length; i++) {
  console.log(i);
}

console.warn("For of");

for (let i of heroes) {
  console.log({ i });
}

console.warn("For in");

for (let i in heroes) {
  console.log({ i });
}
