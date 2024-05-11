// script.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o envio do formulário

        // Verificar se todos os campos do formulário estão preenchidos
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var sexo = document.getElementById('sexo').value;
        var comentarios = document.getElementById('comentarios').value;

        if (nome && email && senha && sexo && comentarios) {
            // Obter valores dos campos
            var interesses = [];
            var checkboxes = document.getElementsByName('interesses');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    interesses.push(checkboxes[i].value);
                }
            }

            // Criar uma string com os dados do formulário
            var dadosFormulario = {
                "Nome": nome,
                "Email": email,
                "Senha": senha,
                "Sexo": sexo,
                "Interesses": interesses.join(', '),
                "Comentários": comentarios
            };

            // Limpar a tabela de dados anteriores, se houver
            var tabela = document.getElementById('tabelaDados');
            tabela.innerHTML = '';

            // Preencher a tabela com os dados do formulário
            for (var label in dadosFormulario) {
                var linha = tabela.insertRow();
                var colunaLabel = linha.insertCell(0);
                var colunaDado = linha.insertCell(1);
                colunaLabel.textContent = label;
                colunaDado.textContent = dadosFormulario[label];
            }

            // Exibir os dados do cadastro
            document.getElementById('dadosCadastro').style.display = 'block';
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    });

    // Adicionar evento ao botão "Novo Cadastro"
    document.getElementById('novoCadastro').addEventListener('click', function() {
        document.getElementById('dadosCadastro').style.display = 'none';
        document.getElementById('cadastroForm').reset();
    });
});
