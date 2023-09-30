// Aguarde o carregamento do documento
document.addEventListener('DOMContentLoaded', function () {
    // Selecione o formulário
    var form = document.getElementById('contact-form');

    // Adicione um evento de envio ao formulário
    form.addEventListener('submit', function (event) {
        // Se o formulário não for válido, pare o envio
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Adicione a classe 'was-validated' para ativar as mensagens de validação do Bootstrap
        form.classList.add('was-validated');
    }, false);
});