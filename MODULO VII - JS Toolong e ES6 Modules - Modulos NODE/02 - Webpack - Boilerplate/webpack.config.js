// Neste arquivo vamos importar pacotes/módulos do NODE, neste caso o pmodulo "path"

const path = require('path');  // CommonJS

module.exports ={
    mode: 'development',             // 'development' arquivo inteiro    // 'Production' reduz o código
    entry: './src/index.js',         //  Pasta para os códigos fonte / arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),  // Arquivo de saida, "path" serve para ele adicionar as barras, sendo compativel com todos os sistemas operacionais
        filename: 'bundle.js'        // Podemos dar wqualquer nome, mas geralmente para padronizar damos este nome.
    },

    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    
    devtool: 'source-map'  // Quando ouver algum erro, ele mapea e nos avisa em qual arquivo ocorreu o erro
};

