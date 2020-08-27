const { app, BrowserWindow, ipcMain } = require("electron");
const { ipcRenderer } = require("electron/renderer");

app.on("ready", () => {
  console.log("Application starts");
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(`${__dirname}/app/index.html`);
});

app.on("window-all-closed", () => {
  app.quit();
});
let sobreWindow = null;
ipcMain.on("abrir-janela-sobre", () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    sobreWindow.on("closed", () => {
      sobreWindow = null;
    });
  }

  sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on("fechar-janela-sobre", () => {
  sobreWindow.close();
});
