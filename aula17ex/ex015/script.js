function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = window.document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fAno.value.length === 0 || isNaN(fAno.value) || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.png')
                //adulto
            } else {
                img.setAttribute('src', 'idoso-homem.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta-mulher.png')
                //adulto
            } else {
                img.setAttribute('src', 'idosa-mulher.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.textContent = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img)
    }
}

