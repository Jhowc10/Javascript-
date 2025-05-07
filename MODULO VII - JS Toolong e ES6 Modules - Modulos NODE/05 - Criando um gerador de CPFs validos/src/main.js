import geraCpf from './modules/geraCpf'
import './assets/css/style.css';

// Função que auto se inicia / auto executavel
(function(){
    const gera = new geraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');

    cpfGerado.innerHTML = gera.geraNovoCpf();
})();
