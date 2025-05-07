// Webpack serve para converter os arquivos automaticamente

/*
    Abra o terminal e digite o codigo

                                            ****** npm init -y ******

Pode ser digitado sem o " -y " também

Agora vamos instalar os pacotes necessários

Digite o código:
                                   ****** npm install --save-dev @babel/preset-env @babel/core @babel/cli @babel/core babel-loader webpack webpack-cli regenereitor-runtime core-js@2
*/

/*
    CRIANDO UM ARQUIVO DE CONFIGURAÇÃO

    O arquivo tem que ter exatamente este nome: webpack.config.js
    O codigo de configuração está no arquivo
*/

/* 
    -w serve para ele ir alterando automaticamente
    ctrl + c serve para recarregar
    se quiser que ele volte, digite "npm run gera"

    Também podemos adicionar tempo

    timeout 30 npm run gera - Ele executa por 30seg e vai morrer (Só serve para Linux)
*/

/*
    Quando um arquivo este sem o node_modules, só com os arquivos package, digite apenas "npm i", ele ira instalar o node_modules
*/