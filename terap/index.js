const electron = require("electron");
const ChronoTray = require("./app/chronotray");
const { app, Menu, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 150,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
  });

  const tray = new ChronoTray(`${__dirname}/robot.png`, mainWindow);
  tray.setToolTip("Esta é uma aplicação Electron");

  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  tray.setContextMenu(contextMenu);

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
