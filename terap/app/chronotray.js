const electron = require("electron");
const { Tray } = electron;

class ChronoTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath); // aqui, estou chamando o construtor do Tray
    this.mainWindow = mainWindow;
    this.on("click", this.onClick.bind(this));
  }

  onClick(event, bounds) {
    // coordenadas do ícone da bandeja
    const { x, y } = bounds;
    // dimensões da janela (largura e altura)
    const { width, height } = this.mainWindow.getBounds();
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      this.mainWindow.setBounds({
        x: x >= 400 ? x - width / 2 : x,
        y: y >= 300 ? y - height : y,
        width,
        height,
      });
      this.mainWindow.show();
    }
  }
}

module.exports = ChronoTray;
