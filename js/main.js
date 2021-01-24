function clicou() {
    alert("Obrigado por clicar!");
    console.log(document.getElementById("agradecimento"));
    document.getElementById("retorno").innerHTML = "<b>Agora clique aqui!<b/>";
}

function redirect() {
    window.open("https://www.google.com/"); //Abre o link em outra aba.
    window.location.href = "https://www.youtube.com/"; //Abre link na mesma aba.
}

function mudar() { //Utilizando o ID da tag html para alterar seu conteúdo.
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento) { //O parâmetro elemento faz menção à tag html que possui o parâmetro this, permitindo ser realizado dessa forma.
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load() {
    alert("Página carregada!");
}

function change(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

var n1 = parseInt(prompt("Informe um valor:"));
var n2 = parseInt(prompt("Informe outro valor:"));
alert(n1 + " + " + n2 + " = " + soma(n1, n2));

function validarIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

var nome = "Nicholas";
alert("Olá " + nome + "!");

var v1 = 76;
var v2 = 24;
console.log(v1 + v2);

var frase = "Cyberpunk foi um fracasso!";
console.log(frase.replace("fracasso", "sucesso"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["notebook", "teclado", "mouse", "joystick"]; //Array
lista.push("monitor"); //Adicionando elemento à lista.
lista.pop(); //Retirando o último elemento da lista.
console.log(lista[0]); //Exibindo um elemento da lista.
console.log(lista); //Exibindo todos os elementos da lista.
console.log(lista.reverse()); //Exibindo lista em ordem reversa.
console.log(lista.toString()); //Exibindo lista como String.
console.log(lista.join(" / ")); //Exibindo elementos separados pelo texto digitado.

var frutas = [{nome:"melancia", cor:"verde"}, {nome:"morango", cor:"vermelho"}]; //Dictionary
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Seja bem-vindo, você tem " + idade + " anos!")
} else {
    alert("Você deve ser maior de idade para acessar esta página!")
}

var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

var count1;
for (count1 = 6; count1 <= 10; count1++) {
    console.log(count1);
}

var d = new Date();
console.log("Data: " + d.getDay() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear())
console.log("Horas: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
*/