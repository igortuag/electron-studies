const data = require('./data')

module.exports = {
  geraTrayTemplate(win) {
    let template = [
      { label: "Cursos" },
      { type: "separator" },
      { label: "Javascript", type: "radio" },
    ];

    let cursos = data.pegaNomeDosCursos();
    cursos.forEach((curso) => {
      let menuItem = {
        label: curso,
        type: 'radio',
        click: () => {
          win.send("curso-trocado", curso);
        }
      }
      template.push(menuItem);
    });

    return template;
  },
};
