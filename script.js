//1 - crie uma função que exiba uma mensagem no console

function exibirMensagem() {
  console.log(
    "\n######1.#######",
    "\nOlá, está é a primeira questão do desafio de funções do Vai na Web - Modulo 2"
  );
}

exibirMensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(name) {
  console.log("\n######2.#######" + name);
}

exibirNome("\nMilena Gonçalves");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function information(name, age, music) {
  console.log(
    "\n######3.#######",
    "\nMeu nome: " +
      name +
      "\nMinha idade: " +
      age +
      "\nMeu estilho musical preferido: " +
      music
  );
}

information("Milena Gonçalves", 24, "Rock");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeMusica(filme, musica) {
  console.log("\n######4.#######", "\nFilme: " + filme + "\nMúsica: " + musica);
}
filmeMusica();

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(num) {
  console.log("\n######5.#######\n", `O triplo de ${num} é: ` + num * 3);
}

triplo(3);

//6 - crie uma função que  verifique se uma  variável é true ou false

let veri = true;

function verifique(veri) {
  if (veri) {
    console.log("\n######6.#######\n", "A variável é true");
  } else {
    console.log("\n######6.#######\n", `A variável é false`);
  }
}

verifique(veri);
