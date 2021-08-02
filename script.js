let button = document.getElementById("button")
let select = document.getElementById("select-moedas")


async function clickButton() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,MXN-BRL").then( function (resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    let pesoMexicano = moedas.MXNBRL.high

    
    let inputValorEmReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolar = inputValorEmReal / dolar
        inputMoedas.innerHTML = valorEmDolar.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReal / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    if (select.value === "MEX$ Peso Mexicano") {
        let valorEmPesoMexicano = inputValorEmReal / pesoMexicano
        inputMoedas.innerHTML = valorEmPesoMexicano.toLocaleString("es-MX", { style: "currency", currency: "MXN" })
    }

    textoReal.innerHTML = inputValorEmReal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}


function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"
    }

    if (select.value === "MEX$ Peso Mexicano") {
        textoMoedas.innerHTML = "Peso Mexicano"
        bandeiraMoedas.src = "./img/mexico2.png"
    }

    clickButton()
}

button.addEventListener("click", clickButton)
select.addEventListener("change", trocaDeMoeda)