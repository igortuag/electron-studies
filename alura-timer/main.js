const { app, BrowserWindow, ipcMain, Tray, Menu } = require("electron");
const data = require("./data");

let tray = null;
app.on("ready", () => {
  console.log("Application starts");
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  tray = new Tray(__dirname + "/app/img/icon-tray.png");
  let trayMenu = Menu.buildFromTemplate([
    { label: "Cursos" },
    { label: "", type: "separator" },
    { label: "Javascript", type: "radio" },
  ]);

  tray.setContextMenu(trayMenu);

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

ipcMain.on("curso-parado", (event, curso, tempoEstudado) => {
  console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`);
  data.salvaDados(curso, tempoEstudado);
});
