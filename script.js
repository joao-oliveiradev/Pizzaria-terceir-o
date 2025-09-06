document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.order-btn');

  botoes.forEach(botao => {
    botao.addEventListener('click', function () {
      const sabor = botao.getAttribute('data-sabor');
      fazerPedido(sabor);
    });
  });
});

function fazerPedido(sabor) {
  const numero = '55419996960869';
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const horario = `${hora}:${minutos}`;

  const mensagem = `Olá! Gostaria de pedir uma ${sabor} às ${horario}.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}
