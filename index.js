const nome = document.getElementById('nome')
const trans = document.querySelector('#transformacao')
const img = document.querySelector('#imagem') 
let btn = document.querySelector('#mudar') 


btn.addEventListener('click', () => {
    if(btn.value == '1') {
        img.src = './imagens/naruto2.png'
        nome.innerText = 'Naruto Sennin' 
        trans.innerText = 'Modo Sennin' 
        btn.value = 2 
    } else if (btn.value == 2) {
        img.src = './imagens/naruto3.png'
        nome.innerText = 'Naruto Kurama'
        trans.innerText = 'Kurama Primeiro'
        btn.value = 3
    } else if (btn.value == 3) {
        img.src = './imagens/naruto4.png'
        nome.innerText = 'Naruto Kurama'
        trans.innerText = 'Kurama Segundo'
        btn.value = 4
    } else if (btn.value == 4) {
        img.src = './imagens/naruto5.png'
        nome.innerText = 'Naruto Rikudou'
        trans.innerText = 'Modo Rikudou Sennin'
        btn.innerText = 'Voltar ao Início'
        btn.value = 5
    } else if (btn.value == 5) {
        img.src = './imagens/naruto1.png'
        nome.innerText = 'Naruto'
        trans.innerText = 'Nenhuma'
        btn.innerText = 'transformar'
        btn.value = '1'     
    }
})