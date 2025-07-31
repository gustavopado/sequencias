function contar() {
    var startNumber = document.getElementById("start")
    var endNumber = document.getElementById("end")
    var stepNumber = document.getElementById("step")
    var result = document.getElementById("result")
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) {
        result.innerHTML = "Impossível contar!"
    } else {
        result.innerHTML = "Contando: <br>"
        result.innerHTML += "🏠 "

        let i = Number(startNumber.value)
        let f = Number(endNumber.value)
        let p = Number(stepNumber.value)

        if (p <= 0) {
            window.alert("Erro! O passo não pode ser zero ou negativo. Usando passo 1.")
            p = 1
        }

        let x = 10
        let y = 50
        ctx.font = "20px Arial"

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                result.innerHTML += `${c} ✌🏻 `
                ctx.fillText(c, x, y)
                x += 40
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += `${c} ✌🏻 `
                ctx.fillText(c, x, y)
                x += 40
            }
        }
        result.innerHTML += `🏁`
    }
}