const electron = require("electron");
const { app, Tray, Menu, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
  const tray = new Tray(`${__dirname}/robot.png`);
  tray.setToolTip("Esta é uma aplicação Electron");
  tray.on("click", () => {
    console.log("Você clicou no ícone da aplicação");
  });
  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  tray.setContextMenu(contextMenu);

  mainWindow = new BrowserWindow({
    height: 150,
    width: 300,
    frame: false,
    resizable: false,
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

const menuTemplate = [
  {
    label: "Terap",
    click: () => {
      console.log("Você clicou na opção Terap");
    },
  },
  {
    label: "Configuração",
  },
  {
    label: "Ajuda",
  },
];
