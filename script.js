function contar() { // Função chamada quando o botão é clicado
    // Pega os elementos do HTML
    var startNumber = document.getElementById("start")
    var endNumber = document.getElementById("end")
    var stepNumber = document.getElementById("step")
    var result = document.getElementById("result")
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d") // Permite desenhar no canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height) // Limpa o canvas antes de desenhar de novo

    // Verifica se algum campo está vazio
    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) {
        result.innerHTML = "Impossível contar!" // Mensagem de erro
    } else {
        result.innerHTML = "Contando: <br>" // Mensagem inicial
        result.innerHTML += "🏠 " // Emoji de início

        // Converte os valores para números
        let i = Number(startNumber.value)
        let f = Number(endNumber.value)
        let p = Number(stepNumber.value)

        // Se o passo for inválido, corrige para 1
        if (p <= 0) {
            window.alert("Erro! O passo não pode ser zero ou negativo. Usando passo 1.")
            p = 1
        }

        // Posição inicial para desenhar no canvas
        let x = 10
        let y = 50
        ctx.font = "20px Arial" // Fonte do texto no canvas

        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                result.innerHTML += `${c} ✌🏻 ` // Mostra no HTML
                ctx.fillText(c, x, y) // Desenha o número no canvas
                x += 40 // Move para a direita
            }
        } 
        // Contagem regressiva
        else {
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += `${c} ✌🏻 ` // Mostra no HTML
                ctx.fillText(c, x, y) // Desenha no canvas
                x += 40
            }
        }

        // Mostra bandeira no final
        result.innerHTML += `🏁`
    }
}
