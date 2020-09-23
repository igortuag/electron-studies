const electron = require("electron");
const ChronoTray = require("./app/chronotray");
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
let tray;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 150,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
    skipTaskbar: true,
  });

  tray = new ChronoTray(`${__dirname}/robot.png`, mainWindow);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("blur", () => {
    setTimeout(() => mainWindow.hide());
  });
});

ipcMain.on("timeUpdate", (event, timeUpdate) => {
  if (process.platform === "darwin") {
    tray.setTitle(timeUpdate);
  } else {
    tray.setToolTip(timeUpdate);
  }
});
