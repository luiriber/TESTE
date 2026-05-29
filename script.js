const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
  const mensagens = [
    '🎉 Parabéns! Você clicou no botão!',
    '✨ JavaScript está funcionando!',
    '🚀 Seu site está incrível!',
    '💻 HTML + CSS + JS = Poder!'
  ];
  
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  mensagem.textContent = mensagemAleatoria;
  mensagem.style.display = 'block';
  
  // Esconder após 3 segundos
  setTimeout(() => {
    mensagem.style.display = 'none';
  }, 3000);
});
