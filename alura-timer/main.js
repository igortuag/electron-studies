const { app, BrowserWindow, ipcMain } = require("electron");

app.on("ready", () => {
  console.log("Application starts");
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.loadURL(`${__dirname}/app/index.html`);
});

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on('abrir-janela-sobre', () => {
  let sobreWindow = new BrowserWindow({
    width: 300,
    height: 200,
  });

  sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`)
})