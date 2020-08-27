const data = require('./data')

module.exports = {
  geraTrayTemplate() {
    let template = [
      { label: "Cursos" },
      { type: "separator" },
      { label: "Javascript", type: "radio" },
    ];

    let cursos = data.pegaNomeDosCursos();
    cursos.forEach((curso) => {
      let menuItem = {
        label: curso,
        type: 'radio'
      }
      template.push(menuItem);
    });

    return template;
  },
};
