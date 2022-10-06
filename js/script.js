let custo = document.querySelector("#custo")
let lucro = document.querySelector("#lucro")
let taxa = document.querySelector("#taxa")
let select = document.querySelector("#select-lucro")
let inputs = document.querySelector(".inputs")
let resultado = document.querySelector("#res")

select.addEventListener('change', () =>{
    
        if (select.value == "calculoemporcentagem") {
            lucro.setAttribute("placeholder", "%")
        } else {
            lucro.setAttribute("placeholder", "R$")
        }  
    
})




function calcular() {
    //criando taxa
     let taxaCalculo = 1 - (taxa.value /100)

     //gerenciando select
    if(select.value == "calculoemporcentagem") {
        var lucroCalculo = lucro.value / 100
        var total = ([custo.value * (1 + lucroCalculo)] / (taxaCalculo))

    } else {
        var total = (Number(custo.value) + Number(lucro.value)) / taxaCalculo
    }


    inputs.style.display = 'none';
    resultado.style.display = 'flex';

    //let resCusto = Number(custo.value)
    //imprimindo resultado na tela
    //res.innerHTML = `Você deve vender esse produto/serviço à `

    var criarResultado = document.createElement("p")
    criarResultado.classList.add("resultado__valor")
    criarResultado.innerHTML = `${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    res.appendChild(criarResultado)

    res.innerHTML += `<br>Informações:`
    res.innerHTML += `<br>Custo do produto: ${Number(custo.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    if(select.value == "calculoemporcentagem") {
        res.innerHTML += `<br>Lucro: ${lucro.value}%`
    } else {
        var lucroImpresso = lucro.value
        res.innerHTML += `<br>Lucro: ${Number(lucroImpresso).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    }
    res.innerHTML += `<br>Taxas: ${taxa.value}%`

    //criando botão de Novo Cálculo para página de Resultado
    criarBotao = document.createElement("input")
    criarBotao.type = "button";
    criarBotao.value = "Novo Cálculo"
    criarBotao.classList.add("resultado__botaonovocalculo")
    criarBotao.onclick = function() {novoCalculo()};
    res.appendChild(criarBotao)
}

function novoCalculo() {
    res.innerText =""
    res.style.display="none"
    inputs.style.display = "block"
    custo.value=""
    lucro.value=""
    taxa.value=""
    res.value=""
}