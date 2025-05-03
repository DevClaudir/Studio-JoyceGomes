const btnVerMais = document.querySelector('#galeria button');
const imagensParaSerEscondidas = document.querySelectorAll('#galeria .nails-hidden');

if(btnVerMais) {
    btnVerMais.addEventListener('click', () => {
        for(let i = 0; i < imagensParaSerEscondidas.length; i++) {
            const imagemAtual = imagensParaSerEscondidas[i];
            imagemAtual.style.display = 'block';
        }
        btnVerMais.style.display = 'none';
    });
}