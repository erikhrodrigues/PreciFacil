let custo = document.querySelector("#custo")
let lucro = document.querySelector("#lucro")
let taxa = document.querySelector("#taxa")
let select = document.querySelector("#select-lucro")
let inputs = document.querySelector(".inputs")
let resultado = document.querySelector("#res")
let slogan = document.querySelector(".slogan")
let homeCalcular = document.querySelector(".container__calcular")

//Alterando placeholder do SELECT
select.addEventListener('change', () =>{
    if (select.value == "calculoemporcentagem") {
        lucro.setAttribute("placeholder", "%")
    } else {
        lucro.setAttribute("placeholder", "R$")
    }  
    
})

function calcular() {
    if(custo.value <= 0 || lucro.value <=0) {
        alert("Você não digitou o CUSTO ou LUCRO do produto/serviço")
    } else {
        //criando taxa
        let taxaCalculo = 1 - (taxa.value /100)

        //gerenciando select
        if(select.value == "calculoemporcentagem") {
            var lucroCalculo = lucro.value / 100
            var total = ([custo.value * (1 + lucroCalculo)] / (taxaCalculo))

        } else {
            var total = (Number(custo.value) + Number(lucro.value)) / taxaCalculo
        }

        //Apagando inputs para exibir os resultados
        inputs.style.display = 'none';
        
        slogan.style.display = 'none';
        resultado.style.display = 'flex';
        homeCalcular.style.display = 'none';



        //Imprimindo os resultados na tela
        res.innerHTML += `<br>Você deve vender esse produto/serviço à`
        var criarResultado = document.createElement("p")
        criarResultado.classList.add("resultado__valor")
        criarResultado.innerHTML = `${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        res.appendChild(criarResultado)
        res.innerHTML += `<br>Informações:`
        res.innerHTML += `<br> - Custo do produto: ${Number(custo.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        if(select.value == "calculoemporcentagem") {
            res.innerHTML += `<br>Lucro: ${lucro.value}${lucro.placeholder}`
        } else {
            var lucroImpresso = lucro.value
            res.innerHTML += `<br>Lucro: ${Number(lucroImpresso).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        }
        res.innerHTML += `<br> - Taxas: ${taxa.value}%`

        //criando botão de Novo Cálculo para retornar a home
        criarBotao = document.createElement("input")
        criarBotao.type = "button";
        criarBotao.value = "Novo Cálculo"
        criarBotao.classList.add("resultado__botaonovocalculo")
        criarBotao.onclick = function() {novoCalculo()};
        res.appendChild(criarBotao)

    }
}
function novoCalculo() {
    res.innerText =""
    let criarImagem = document.createElement("img")
    criarImagem.setAttribute("src", "img/PreciFacil-Personagem-Resultado.svg")
    criarImagem.classList.add("imagem__personagem__resultado")
    res.appendChild(criarImagem)
    res.style.display="none"
    homeCalcular.style.display = 'flex';
    inputs.style.display = 'block';
    slogan.style.display = 'block';
    custo.value=""
    lucro.value=""
    taxa.value=""
    res.value=""
}