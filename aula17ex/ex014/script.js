function carregar() {
    console.log("Função carregar() chamada!");
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img-horario');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas.`;

    console.log(hora);
    if (hora >= 0 && hora < 12) {
        //dia
        img.src = 'manha.png';
        document.body.style.background = "linear-gradient(to bottom, #A8B4C4, #FEEB65)"
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'tarde.png';
        document.body.style.background = "linear-gradient(to bottom, #FF8E1B, #A53315)"
    } else {
        //noite
        img.src = 'noite.png';
        document.body.style.background = "linear-gradient(to bottom,#32170B, #060405)"
    }
    
}

