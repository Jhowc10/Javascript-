// Digite no navegador "can i use"
// Isso mostrará as compatibilidades dos navegadores

// Abra o terminal e digite o código: "npm init -y", isso irá criar o arquivo "package.json"

/*
    INSTALANDO O Transpilador BABEL

    Digite no terminal o código

    ******* npm install --save-dev @babel/cli @babel/preset-env @babel/core *******

    Se quiser escolher uma versão, basca colocar o @ e a versão.
    Ex.: npm install --save-dev @babel/cli@7.6.4 @babel/preset-env@7.6.3 @babel/core@7.6.4

    Para o BABEL converter o codigo digitado, digite no terminal o código:

                                ******* npx babel main.js -o bundle.js --presents=@babel/env *******

    Abrirá um novo arquivo com um código mais antigo.
    Você pode chanar o arquivo em uma tag script
    Ex.: <script src="./bundle.js"></script>

    Obs.: Toda vez que alterar o código, você deverá converter novamente para o "BANDLE" formatar o código novamente
    Mas a opção para configurar esta atualização automáticamente, veja como no arquivo "modPackage.json"

                                ******  "babel": "babel ./main.js -o ./bundle.js --presents=@babel/env -w"   ******

    Depois digite o código a seguir no terminal para ele ficar sempre compilando:

                                                    ******npm run babel *****

    ctrl + c encerra a execução do BABEL
*/

// Se você tiver "GIT", para ele não enviar a pasta "node_modules" basta criar um arquivo ".gitignore " e neste arquivo escrever o nome do arquivo, assim ele não lê e nem envia para o repositório

const nome    = 'Luiz';
const obj     = {nome};
const novoObj = {...obj};

console.log(novoObj);