const jsonfile = require("jsonfile-promised");
const fs = require("fs");

module.exports = {
  salvaDados(curso, tempoEstudado) {
    let arquivoDoCurso = __dirname + "/data/" + curso + ".json";
    if (fs.existsSync(arquivoDoCurso)) {
      this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
    } else {
      console.log(arquivoDoCurso);
      this.criaArquivoDeCurso(arquivoDoCurso, {}).then(() => {
        this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
      });
    }
  },
  adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado) {
    let dados = {
      ultimoEstudo: new Date().toString(),
      tempo: tempoEstudado,
    };

    jsonfile
      .writeFile(arquivoDoCurso, dados, {spaces: 2})
      .then(() => {
        console.log("Tempo salvo com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  criaArquivoDeCurso(nomeArquivo, conteudoArquivo) {
    console.log(nomeArquivo);
    return jsonfile
      .writeFile(nomeArquivo, conteudoArquivo)
      .then(() => {
        console.log("Arquivo Criado");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
