const texto = document.querySelector('#texto')
const entrada = document.querySelector('#entrada')
const reiniciar = document.querySelector('#reiniciar')
const resultado = document.querySelector('#resultado')
const historico = document.querySelector('#historico')
const alternarTema = document.querySelector('#alternarTema')

// Array para gerar textos aleatorios para o Usuario. 'exepmlo de Digitação
const textos = [
    'Exemplo de texto para digitar.',
    'Outro exemplo de texto para digitar.',
    'Mais um exemplo de texto para digitar.',
    'Digite isso.',
    'Você pode digitar isso aqui.'
]

// Função para escolher texto aleatório - Recarregando a página gera outro texto.
function novoTexto() {
    const index = Math.floor(Math.random() * textos.length)
    texto.textContent = textos[index]
}

// Iniciar o contador e Verificar se esta correto.
function atualizarTeste() {

}
// Função Inicar - localStorage
function iniciar() {
    const statusDoTeste = localStorage.getItem('testeEmAndamento')


    if(!statusDoTeste) {
        localStorage.setItem('tempoInicial', new Date.getTime())  // Para calcular quanto tempo usuario digitou.
        localStorage.setItem('testeEmAndamento', true)
    }
}

//Evento keyUp
entrada.addEventListener('keyup, atualizarTeste')



novoTexto()