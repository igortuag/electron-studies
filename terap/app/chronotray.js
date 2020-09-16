const electron = require("electron");
const { Tray } = electron;

class ChronoTray extends Tray {
  constructor(iconPath) {
    super(iconPath); // aqui, estou chamando o construtor do Tray
  }
}

module.exports = ChronoTray;
