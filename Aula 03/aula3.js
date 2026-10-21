// criando função de soma

function somar() {
    let n1 = Number(document.getElementById("n1").value);//o document chama o HTML, o "." serve para concatenação, e o get serve para chamar a o ID
    let n2 = Number(document.getElementById("n2").value);// value seve para recuperar o valor

    let resultado = n1 + n2;// pega o value digitado na linha 4 e 5.
    document.getElementById("resultado").innerText = "Resultado: " + resultado;// procure saber a função de innerText

}

function subtrair() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 - n2
    document.getElementById("resultado").innerText = "Resultado: " + resultado;

}

function multiplicar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 * n2
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function dividir() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 / n2
    document.getElementById("resultado").innerText = "Resultado: " + resultado;

}

