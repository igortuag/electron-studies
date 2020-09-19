const electron = require("electron");
const ChronoTray = require("./app/chronotray");
const { app, BrowserWindow } = electron;

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
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("blur", () => {
    setTimeout(() => mainWindow.hide());
  });
});
