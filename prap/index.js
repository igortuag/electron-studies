const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const janelaPrincipal = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});
