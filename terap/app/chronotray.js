const electron = require("electron");
const { Tray, app, Menu } = electron;

const contextMenu = Menu.buildFromTemplate([
  {
    label: "Sair",
    click: () => {
      app.quit();
    },
  },
]);

class ChronoTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath); // aqui, estou chamando o construtor do Tray
    this.mainWindow = mainWindow;
    this.on("click", this.onClick.bind(this));
    this.setToolTip("Esta é uma aplicação Electron");
    this.setContextMenu(contextMenu);
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
