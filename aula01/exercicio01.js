
const fs = require('fs');

const lerArquivo = (pathArquivo) => {
    // lendo conteúdo do arquivo
// Se não for informado o enconding, será retornado em formato buffer
// inserindo o utf8 após o path do arquivo para decodificar o conteúdo do arquivo. 
    fs.readFile(pathArquivo, 'utf8', (err, data) => {
        if(err) {
            console.log('Erro ao ler o arquivo.', err);
            return;
        } 
    
        console.log('Conteúdo', data);
    })
}

// const data = 'O segundo conteúdo';
const escreverArquivo = (pathArquivo, data) => {
    fs.writeFile(pathArquivo, data, 'utf8', (err) => {
        if(err) {
            console.log('Erro ao ler o arquivo.', err);
            return;
        } 
        console.log('Conteúdo', data);
    })
}

const adicionarConteudo = (pathArquivo, data) => {
    fs.appendFile(pathArquivo, data, 'utf8', (err) => {
        if(err) {
            console.log('Erro ao ler o arquivo.', err);
            return;
        } 
        console.log('Conteúdo', data);
    })
}

module.exports = { lerArquivo, escreverArquivo, adicionarConteudo }