const { app, BrowserWindow, ipcMain } = require("electron");

app.on("ready", () => {
  const janelaPrincipal = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("obterDimensoesDaImagem", () => {});
