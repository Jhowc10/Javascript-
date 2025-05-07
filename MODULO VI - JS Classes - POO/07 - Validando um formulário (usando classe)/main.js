class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario'); // Selecionando o formulario no HTML

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado');

            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Os campos de senhas tem que ser iguais.');
            this.criaErro(repetirSenha, 'Os campos de senhas tem que ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;

            history.criaErro(senha, 'A senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();    // Remove os erros
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText; // Captura o <label>

            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let vali = true;


        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            vali = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números');
            return false;
        }

        return vali;
    }

    validaCPF(campo){
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();