
const moduloArquivo = require('./exercicio01');

moduloArquivo.lerArquivo('./aulas-nodejs/aula01/texto.txt');
moduloArquivo.escreverArquivo('./aulas-nodejs/aula01/texto.txt', 'o novo arquivo');
moduloArquivo.adicionarConteudo('./aulas-nodejs/aula01/texto.txt', 'Adicionando o novo conteúdo.')




// fs.readFile('./aulas-nodejs/aula01/texto.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log('Erro ao ler o arquivo.', err);
//         return;
//     } 

//     console.log('Conteúdo', data);
// })

// const data = 'O segundo conteúdo';
// fs.writeFile('./aulas-nodejs/aula01/texto.txt', data, 'utf8', (err) => {
//     if(err) {
//         console.log('Erro ao ler o arquivo.', err);
//         return;
//     } 
//     console.log('Conteúdo', data);
// })



